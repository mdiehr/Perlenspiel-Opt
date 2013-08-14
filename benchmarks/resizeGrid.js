/////////////////////////////////////////////////////////////////////
// game.js for Perlenspiel 2.3.12
// Modifications by Mark Diehr: mdiehr@fullsail.com

// Please fill out these comments with the appropriate information.
//   Title:	Draw Beads
//  Author:	Mark Diehr
//    Date:	August 14th, 2013

// Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
// Perlenspiel is Copyright © 2009-13 Worcester Polytechnic Institute.
// This file is part of Perlenspiel.

/////////////////////////////////////////////////////////////////////
// Put your global variables after this line.

var size = 32;
var rate = 1;
var paused = false;

var fpsElement = null;
var dateElement = null;
var lastTime = null;

var averageFps = 0;
var countFps = 0;

var sizeDir = -1;

/////////////////////////////////////////////////////////////////////
// Put your function definitions after this line.

function SetupFPS()
{
	fpsElement = document.createElement("div");
	document.body.appendChild(fpsElement);
	dateElement = new Date();
	lastTime = dateElement.getTime();
}

function CountAverageFPS(newFps)
{
	countFps++;
	var oldRatio = (countFps-1)/countFps;
	var newRatio = 1 - oldRatio;
	averageFps = (oldRatio * averageFps + newRatio * newFps);
}

function UpdateFPS()
{
	dateElement = new Date();
	currTime = dateElement.getTime();
	var msPerFrame = currTime - lastTime;
	var fps = 1 / (msPerFrame / 1000.0);
	
	if( !paused )
	{
		CountAverageFPS(fps);
	}
	
	fpsElement.innerHTML = "FPS: " + fps.toFixed(2) + "<br>Average: " + averageFps.toFixed(2);
	lastTime = currTime;	// save
}

function Redraw()
{
	if( size + sizeDir > 1 && size + sizeDir < 32 )
	{
		size += sizeDir;
	}
	else
	{
		sizeDir *= -1;
	}
	
	SetGridSize();

	for( var x = 0; x < size; x++ )
	{
		for( var y = 0; y < size; y++ )
		{
			if( ((x + y) % 2) == 0 )
			{
				PS.BeadColor(x, y, 0x990000);
			}
			else
			{
				PS.BeadColor(x, y, 0x0);
			}
		}
	}
}

function SetGridSize()
{
	PS.GridSize(size, size);
	PS.BeadFlash(PS.ALL, PS.ALL, 0);
	PS.BeadBorderWidth(PS.ALL, PS.ALL, 0);
}

function PaintBorder(x, y, width, color)
{
	PS.BeadBorderWidth(x, y, width);
	PS.BeadBorderColor(x, y, color);
}

function PaintGlyph(x, y, glyph, color)
{
	PS.BeadGlyph(x, y, glyph);
	PS.BeadGlyphColor(x, y, color);
}

// This is a template for creating new Perlenspiel games
// All of the functions below MUST exist, or the engine will stop and complain!

/////////////////////////////////////////////////////////////////////
// PS.Init ()
// Initializes the game
// This function normally includes a call to PS.GridSize (x, y)
// where x and y are the desired initial dimensions of the grid
// options = a table with optional parameters; see documentation for details

PS.Init = function (options)
{
	"use strict";
	
	// change to the grid dimensions you want

	SetGridSize();
	
	// Put any other init code here
	
	SetupFPS();

	Redraw();
	
	PS.StatusFade(false);
	PS.StatusText("Running...");
	PS.Clock(rate);
	
};

/////////////////////////////////////////////////////////////////////
// PS.Click (x, y, data)
// This function is called whenever a bead is clicked
// It doesn't have to do anything
// x = the x-position of the bead on the grid
// y = the y-position of the bead on the grid
// data = the data value associated with this bead, 0 if none has been set
// options = a table with optional parameters; see documentation for details

PS.Click = function (x, y, data, options)
{
	"use strict";
	
	// put code here for bead clicks
	if( paused )
	{
		paused = false;
		PS.StatusText("Click to stop.");
	}
	else
	{
		paused = true;
		PS.StatusText("Click to start.");
	}
};

/////////////////////////////////////////////////////////////////////
// PS.Release (x, y, data)
// This function is called whenever a mouse button is released over a bead
// It doesn't have to do anything
// x = the x-position of the bead on the grid
// y = the y-position of the bead on the grid
// data = the data value associated with this bead, 0 if none has been set
// options = a table with optional parameters; see documentation for details

PS.Release = function (x, y, data, options)
{
	"use strict";

	// Put code here for when the mouse button is released over a bead
	
};

/////////////////////////////////////////////////////////////////////
// PS.Enter (x, y, button, data)
// This function is called whenever the mouse moves over a bead
// It doesn't have to do anything
// x = the x-position of the bead on the grid
// y = the y-position of the bead on the grid
// data = the data value associated with this bead, 0 if none has been set
// options = a table with optional parameters; see documentation for details

PS.Enter = function (x, y, data, options)
{
	"use strict";

	// Put code here for when the mouse enters a bead
	
};

/////////////////////////////////////////////////////////////////////
// PS.Leave (x, y, data)
// This function is called whenever the mouse moves away from a bead
// It doesn't have to do anything
// x = the x-position of the bead on the grid
// y = the y-position of the bead on the grid
// data = the data value associated with this bead, 0 if none has been set
// options = a table with optional parameters; see documentation for details

PS.Leave = function (x, y, data, options)
{
	"use strict";
	
	// Put code here for when the mouse leaves a bead
	
};

/////////////////////////////////////////////////////////////////////
// PS.KeyDown (key, shift, ctrl)
// This function is called whenever a key on the keyboard is pressed
// It doesn't have to do anything
// key = the ASCII code of the pressed key, or one of the following constants:
// Arrow keys = PS.ARROW_UP, PS.ARROW_DOWN, PS.ARROW_LEFT, PS.ARROW_RIGHT
// Function keys = PS.F1 through PS.F1
// shift = true if shift key is held down, false otherwise
// ctrl = true if control key is held down, false otherwise
// options = a table with optional parameters; see documentation for details

PS.KeyDown = function (key, shift, ctrl, options)
{
	"use strict";

	// Put code here for when a key is pressed
	
};

/////////////////////////////////////////////////////////////////////
// PS.KeyUp (key, shift, ctrl)
// This function is called whenever a key on the keyboard is released
// It doesn't have to do anything
// key = the ASCII code of the pressed key, or one of the following constants:
// Arrow keys = PS.ARROW_UP, PS.ARROW_DOWN, PS.ARROW_LEFT, PS.ARROW_RIGHT
// Function keys = PS.F1 through PS.F12
// shift = true if shift key is held down, false otherwise
// ctrl = true if control key is held down, false otherwise
// options = a table with optional parameters; see documentation for details

PS.KeyUp = function (key, shift, ctrl, options)
{
	"use strict";
	
	// Put code here for when a key is released
	
};

/////////////////////////////////////////////////////////////////////
// PS.Wheel (dir)
// This function is called whenever the mouse wheel moves forward or backward
// It doesn't have to do anything
// dir = PS.FORWARD if mouse wheel moves forward, PS.BACKWARD if backward
// options = a table with optional parameters; see documentation for details

PS.Wheel = function (dir, options)
{
	"use strict";

	// Put code here for when mouse wheel is moved
	
};

/////////////////////////////////////////////////////////////////////
// PS.Tick ()
// This function is called on every clock tick
// if a timer has been activated with a call to PS.Clock()
// It doesn't have to do anything
// options = a table with optional parameters; see documentation for details

PS.Tick = function (options)
{
	"use strict";

	// Put code here to handle clock ticks
	if( !paused )
	{
		Redraw();
	}
	
	UpdateFPS();
};
