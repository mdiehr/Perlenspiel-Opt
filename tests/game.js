/////////////////////////////////////////////////////////////////////
// game.js for Perlenspiel 2.3.9
// Modifications by Mark Diehr: mdiehr@fullsail.com

/////////////////////////////////////////////////////////////////////
// Put your global variables after this line.
var size = 16;
var rate = 1;
var paused = false;

var fpsElement = null;
var dateElement = null;
var lastTime = null;

/////////////////////////////////////////////////////////////////////
// Functions

function GetRandomColor()
{
	return PS.MakeRGB(PS.Random(255), PS.Random(255), PS.Random(255));
}

function PaintCell(x, y)
{
	PS.BeadColor(x, y, GetRandomColor());
	PaintBorder(x, y, PS.Random(10), GetRandomColor())
	PaintGlyph(x, y, "#", GetRandomColor());
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

/////////////////////////////////////////////////////////////////////
// Events

PS.Init = function (options)
{
	"use strict";

	// change to the grid dimensions you want

	PS.GridSize ( size, size );
	
	// Put any other init code here
	//PS.BeadFlash(PS.ALL, PS.ALL, 0);
	PS.BeadBorderWidth(PS.ALL, PS.ALL, 0);
	PS.BeadColor(PS.ALL, PS.ALL, 0x336699);
		
	PS.StatusFade(false);
	PS.StatusText("Use the mouse and keyboard.");
};

PS.Tick = function (options)
{
	"use strict";

	// Put code here to handle clock ticks
};

PS.Click = function (x, y, data, options)
{
	"use strict";
		
	// put code here for bead clicks
	PS.BeadColor(x, y, 0xFF0000);
};

PS.Release = function (x, y, data, options)
{
	"use strict";

	// Put code here for when the mouse button is released over a bead
	PaintCell(x, y);
};

PS.Enter = function (x, y, data, options)
{
	"use strict";

	// Put code here for when the mouse enters a bead
	PS.BeadColor(x, y, 0xFFFFFF);
};

PS.Leave = function (x, y, data, options)
{
	"use strict";
	
	// Put code here for when the mouse leaves a bead
	PS.BeadColor(x, y, 0);
};

PS.KeyDown = function (key, shift, ctrl, options)
{
	"use strict";

	// Put code here for when a key is pressed
	PS.BeadColor(PS.ALL, PS.ALL, 0);
};

PS.KeyUp = function (key, shift, ctrl, options)
{
	"use strict";
	
	// Put code here for when a key is released
};

PS.Wheel = function (dir, options)
{
	"use strict";

	// Put code here for when mouse wheel is moved
};
