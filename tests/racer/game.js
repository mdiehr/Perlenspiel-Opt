// game.js for Perlenspiel 2.1

/*
Perlenspiel is Copyright © 2009-12 Worcester Polytechnic Institute.
This file is part of Perlenspiel.

Perlenspiel is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Perlenspiel is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You may have received a copy of the GNU Lesser General Public License
along with Perlenspiel. If not, see <http://www.gnu.org/licenses/>.
*/

// This is a template for creating new Perlenspiel games
// All of the functions below MUST exist, or the engine will stop and complain!

// The following comment line is for JSLint. Don't remove it!

/*global PS */

// Set strict mode in JS
"use strict";

// PS.Init ()
// Initializes the game
// This function normally includes a call to PS.GridSize (x, y)
// where x and y are the desired dimensions of the grid

var SLOWMO = navigator.userAgent.indexOf("Firefox")!=-1;


var WORLD_WIDTH = SLOWMO ? 21 : 25;
var WORLD_HEIGHT = SLOWMO ? 21 : 25;
var WORLD_MID = Math.floor(WORLD_WIDTH / 2);

var CAR_X = WORLD_MID;
var CAR_X_OLD = CAR_X;
var CAR_Y = WORLD_HEIGHT - 7;

var LEFT = false;
var RIGHT = false;
var SPACE = false;

var CRASHED = false;

PS.Init = function ()
{
	// change to the dimensions you want

	PS.GridSize ( WORLD_WIDTH, WORLD_HEIGHT ); 

    // Put any other init code here
    PS.Clock(4);
    
    PS.StatusFade(false);
    PS.StatusText("Road Racer Bad Game");
    
    // Disable bead flashes
    PS.BeadFlash(PS.ALL, PS.ALL, false);
    
	// Color the background
	RoadInit();
};

// PS.Click (x, y, data)
// This function is called whenever a bead is clicked
// It doesn't have to do anything
// x = the x-position of the bead on the grid
// y = the y-position of the bead on the grid
// data = the data value associated with this bead, 0 if none has been set

PS.Click = function (x, y, data)
{
	// put code here for bead clicks
	//PS.BeadColor(x, y, PS.COLOR_RED);
};

// PS.Release (x, y, data)
// This function is called whenever a mouse button is released over a bead
// It doesn't have to do anything
// x = the x-position of the bead on the grid
// y = the y-position of the bead on the grid
// data = the data value associated with this bead, 0 if none has been set

PS.Release = function (x, y, data)
{
	// Put code here for when the mouse button is released over a bead	
};

// PS.Enter (x, y, button, data)
// This function is called whenever the mouse moves over a bead
// It doesn't have to do anything
// x = the x-position of the bead on the grid
// y = the y-position of the bead on the grid
// data = the data value associated with this bead, 0 if none has been set

PS.Enter = function (x, y, data)
{
	// Put code here for when the mouse enters a bead	
};

// PS.Leave (x, y, data)
// This function is called whenever the mouse moves away from a bead
// It doesn't have to do anything
// x = the x-position of the bead on the grid
// y = the y-position of the bead on the grid
// data = the data value associated with this bead, 0 if none has been set

PS.Leave = function (x, y, data)
{
	// Put code here for when the mouse leaves a bead	
};

// PS.KeyDown (key, shift, ctrl)
// This function is called whenever a key on the keyboard is pressed
// It doesn't have to do anything
// key = the ASCII code of the pressed key, or one of the following constants:
// Arrow keys = PS.ARROW_UP, PS.ARROW_DOWN, PS.ARROW_LEFT, PS.ARROW_RIGHT
// Function keys = PS.F1 through PS.F1
// shift = true if shift key is held down, false otherwise
// ctrl = true if control key is held down, false otherwise

PS.KeyDown = function (key, shift, ctrl)
{
	// Put code here for when a key is pressed	
	if(key == PS.ARROW_LEFT)
	{
		LEFT = true;
	}
	else if( key == PS.ARROW_RIGHT)
	{
		RIGHT = true;
	}
	else if( key == 32)
	{
		SPACE = true;
	}
};

// PS.KeyUp (key, shift, ctrl)
// This function is called whenever a key on the keyboard is released
// It doesn't have to do anything
// key = the ASCII code of the pressed key, or one of the following constants:
// Arrow keys = PS.ARROW_UP, PS.ARROW_DOWN, PS.ARROW_LEFT, PS.ARROW_RIGHT
// Function keys = PS.F1 through PS.F12
// shift = true if shift key is held down, false otherwise
// ctrl = true if control key is held down, false otherwise

PS.KeyUp = function (key, shift, ctrl)
{
	// Put code here for when a key is released	
	if(key == PS.ARROW_LEFT)
	{
		LEFT = false;
	}
	else if( key == PS.ARROW_RIGHT)
	{
		RIGHT = false;
	}
	else if( key == 32)
	{
		SPACE = false;
	}
};

// PS.Wheel (dir)
// This function is called whenever the mouse wheel moves forward or backward
// It doesn't have to do anything
// dir = 1 if mouse wheel moves forward, -1 if backward

PS.Wheel = function (dir)
{
	// Put code here for when a key is pressed	
};

// PS.Tick ()
// This function is called on every clock tick
// if a timer has been activated with a call to PS.Timer()
// It doesn't have to do anything

PS.Tick = function ()
{
	if(SPACE)		// Hold to pause
	{
		return;
	}
	
	UpdateMovement();
	UpdateCollisions();

	GameRender();

};

function UpdateMovement()
{
	CAR_X_OLD = CAR_X;
	
	if( !CRASHED )
	{
		if( LEFT && (CAR_X > 0) )
		{
			CAR_X -= 1;
		}
		
		if( RIGHT && (CAR_X < WORLD_WIDTH - 1) )
		{
			CAR_X += 1;
		}
	}
}

function UpdateCollisions()
{
	if( PS.BeadData(CAR_X, CAR_Y) != 0 )
	{
		CRASHED = true;
	}
}

function GameRender()
{
	if(CRASHED)
	{
		if(SLOWMO)
		{
			PS.BeadGlyph(CAR_X_OLD, CAR_Y, " ");
		}
		else
		{
			PS.BeadGlyph(CAR_X_OLD, CAR_Y, GLYPH_TRAIL);
			PS.BeadGlyphColor(CAR_X_OLD, CAR_Y, COLOR_CAR_TRAIL);
		}
		
		// Kapow!
		PS.BeadGlyph(CAR_X, CAR_Y, GLYPH_CRASHED1);
		PS.BeadGlyph(CAR_X, CAR_Y+1, GLYPH_CRASHED2);
		PS.BeadGlyph(CAR_X, CAR_Y-1, GLYPH_CRASHED3);
		PS.BeadGlyphColor(CAR_X, CAR_Y, COLOR_CRASH);
		PS.BeadGlyphColor(CAR_X, CAR_Y+1, COLOR_CRASH);
		PS.BeadGlyphColor(CAR_X, CAR_Y-1, COLOR_CRASH);
		
		PS.StatusText("You Crashed! Score: " + roadDistance);
	}
	else
	{
		if(SLOWMO)
		{
			PS.BeadGlyph(CAR_X_OLD, CAR_Y, " ");
		}
		else
		{
			PS.BeadGlyph(CAR_X_OLD, CAR_Y, GLYPH_TRAIL);
			PS.BeadGlyphColor(CAR_X_OLD, CAR_Y, COLOR_CAR_TRAIL);
		}
		
		RoadUpdate();
		RoadRender();

		PS.BeadGlyph(CAR_X, CAR_Y, GLYPH_CAR);
		PS.BeadGlyphColor(CAR_X, CAR_Y, COLOR_CAR);
	}
	
	PS.DrawGrid();
}
