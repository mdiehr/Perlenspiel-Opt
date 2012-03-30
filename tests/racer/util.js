// util.js for Perlenspiel 2.1

// Set strict mode in JS
"use strict";

var PI = 3.141592653589;

function RandomRange(min, max)
{
    return min + Math.floor(Math.random() * (max - min + 1));
}

function RandomChar(glyphs)
{
	var item = RandomRange(0, (glyphs.length - 1));
	return glyphs.charAt(item);
}


function ShiftBeadsDown()
{
	if( SLOWMO )
	{
		for( var x = 0; x < WORLD_WIDTH; ++x)
		{
			for(var y = (WORLD_HEIGHT - 1); y > 0; --y)
			{
				PS.BeadData(		x, y, PS.BeadData(			x, y-1));
				PS.BeadColor(		x, y, PS.BeadColor(			x, y-1));
			}
		}		
	}
	else
	{
		for( var x = 0; x < WORLD_WIDTH; ++x)
		{
			for(var y = (WORLD_HEIGHT - 1); y > 0; --y)
			{
				PS.BeadGlyph(		x, y, PS.BeadGlyph(			x, y-1));
				PS.BeadGlyphColor(	x, y, PS.BeadGlyphColor(	x, y-1));
				PS.BeadData(		x, y, PS.BeadData(			x, y-1));
				PS.BeadColor(		x, y, PS.BeadColor(			x, y-1));
			}
		}
	}
}
