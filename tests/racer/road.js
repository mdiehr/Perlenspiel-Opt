// road.js

// Set strict mode in JS
"use strict";

// Constants
var GRASS_LEFT;
var GRASS_RIGHT;

var STRIPE_X;
var STRIPE_LEN;
var STRIPE_SPACE;

var ROAD_WAVE;
var ROAD_DIFF;

// Locals
var roadDistance = 0;

function RoadInit()
{
	PS.BeadColor(PS.ALL, PS.ALL, COLOR_ROAD);
    PS.BeadBorderWidth(PS.ALL, PS.ALL, 0);
    
	DrawOneGrass(0,0);
	DrawOneGrass(WORLD_WIDTH-1, 0);
	roadDistance = 0;
	
	GRASS_LEFT = 1;
	GRASS_RIGHT = 1;
	
	STRIPE_LEN = 2;
	STRIPE_SPACE = 4;
	
	ROAD_WAVE = 0.1;
	ROAD_DIFF = 2;
}

function RoadUpdate()
{
	// Update sides of the road
	if( roadDistance >= 1)
	{
		GRASS_LEFT  = 1 + Math.floor((Math.sin(0  + roadDistance * ROAD_WAVE)+1) * ROAD_DIFF);
		GRASS_RIGHT = 1 + Math.floor((Math.sin(PI + roadDistance * ROAD_WAVE)+1) * ROAD_DIFF);
	}
	
	roadDistance++;
	ShiftBeadsDown();

	// Update difficulty
	ROAD_DIFF = 1 + Math.log(1 + roadDistance);

	if( roadDistance > 200 )
	{
		PS.StatusText("Score: " + roadDistance);
	}
	else if( roadDistance > 50 )
	{
		PS.StatusText("Use Left/Right to steer. Don't hit obstacles.");
	}
}

function RoadRender()
{
	// Reset to all ashfault
	PS.BeadGlyph(PS.ALL, 0, " ");
	PS.BeadData(PS.ALL, 0, 0);	// Disable collisions
	PS.BeadColor(PS.ALL, 0, COLOR_ROAD);
		
	// Fill in top row with new symbols for grass
	for( var g = 0; g < GRASS_LEFT; ++g)
	{
		DrawOneGrass(g, 0);
	}
	
	for( var g = 0; g < GRASS_RIGHT; ++g)
	{
		DrawOneGrass(WORLD_WIDTH - 1 - g, 0);
	}
	
	// Draw the stripe
	var stripeX = WORLD_MID + Math.floor((GRASS_LEFT - GRASS_RIGHT)/2);
	var stripeTotal = STRIPE_LEN + STRIPE_SPACE;
	if( (roadDistance % stripeTotal) < STRIPE_LEN)
	{
		PS.BeadColor(stripeX, 0, COLOR_STRIPE);
	}
	
	// Obstacles
	if( roadDistance > 100 )
	{
		if(RandomRange(0, 35+ROAD_DIFF) <= ROAD_DIFF)
		{
			var posX = RandomRange(1, WORLD_WIDTH - 2);
			PS.BeadData(posX, 0, 2);
			PS.BeadColor(posX, 0, COLOR_PUDDLE_BACK)
			PS.BeadGlyph(posX, 0, GLYPH_PUDDLE);
			PS.BeadGlyphColor(posX, 0, COLOR_PUDDLE);
		}
	}
	
	if( roadDistance > 150 )
	{
		if(RandomRange(0, 55+ROAD_DIFF) <= ROAD_DIFF)
		{
			var width = RandomRange(2, 4);
			var posX = RandomRange(0, WORLD_WIDTH - width - 1);
			for(var x = 0; x < width; ++x)
			{
				PS.BeadData(posX+x, 0, 3);
				PS.BeadColor(posX+x, 0, COLOR_BOX_BACK);
				PS.BeadGlyph(posX+x, 0, GLYPH_BOX);
				PS.BeadGlyphColor(posX+x, 0, COLOR_BOX);
			}
		}
	}
}

function DrawOneGrass(x, y)
{
	if(!SLOWMO)
	{
		PS.BeadGlyph(x, y, RandomChar(GLYPH_TUFTS));
	    PS.BeadGlyphColor(x, y, COLOR_TUFT);
	}
    PS.BeadData(x, y, 1);	// Collisions on
    PS.BeadColor(x, y, COLOR_GRASS);
}
