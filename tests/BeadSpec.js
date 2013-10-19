/////////////////////////////////////////////////////////////////////
// game.js for Perlenspiel 2.3.13
// Modifications by Mark Diehr: mdiehr@fullsail.com

/////////////////////////////////////////////////////////////////////
// Put your global variables after this line.
var size = 16;

var BeadBG = {color:0x000000, glyph:"#", glyphColor:0x453565, flash:false, borderWidth:[1, 1, 0, 0]};
var BeadPaint = {color:0xFF3300};
var BeadEnter = {borderColor:PS.COLOR_YELLOW, borderWidth:2};
var BeadLeave = {borderWidth:0};

var mouseDown = false;

/////////////////////////////////////////////////////////////////////
// Functions

function Paint(x, y)
{
	PS.BeadStyle(x, y, BeadPaint);
}

function PaintEnter(x, y)
{
	PS.BeadStyle(x, y, BeadEnter);
	
	if( mouseDown )
	{
		Paint(x, y);
	}
}

function PaintLeave(x, y)
{
	PS.BeadStyle(x, y, BeadLeave);
}

/////////////////////////////////////////////////////////////////////
// Events

PS.Init = function (options)
{
	"use strict";

	// change to the grid dimensions you want

	PS.GridSize ( size, size );
	
	// Put any other init code here		
	PS.StatusFade(false);
	PS.StatusText("Use the mouse to paint.");
	
	PS.BeadStyle(PS.ALL, PS.ALL, BeadBG);

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
	mouseDown = true;
	Paint(x, y);
};

PS.Release = function (x, y, data, options)
{
	"use strict";

	// Put code here for when the mouse button is released over a bead
	mouseDown = false;
};

PS.Enter = function (x, y, data, options)
{
	"use strict";

	// Put code here for when the mouse enters a bead
	PaintEnter(x, y);
};

PS.Leave = function (x, y, data, options)
{
	"use strict";
	
	// Put code here for when the mouse leaves a bead
	PaintLeave(x, y);
};

PS.KeyDown = function (key, shift, ctrl, options)
{
	"use strict";

	// Put code here for when a key is pressed
	
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
