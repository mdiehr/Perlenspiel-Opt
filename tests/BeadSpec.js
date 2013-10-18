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

function BeadStyleRange(x, y, w, h, style)
{
	for( var xi = x; xi < x + w; ++xi )
	{
		for( var yi = y; yi < y + h; ++yi )
		{
			XBApplyBeadStyle(xi, yi, style);
		}
	}
}


// Applies a style wholesale to a bead
function BeadStyle(x, y, style)
{
	if( PS.CheckX(x, "BeadStyle") && PS.CheckY(y, "BeadStyle") )
	{
		var w = 1;
		var h = 1;
		
		if( x === PS.ALL )
		{
			x = 0;
			w = PS.Grid.x;
		}

		if( y === PS.ALL )
		{
			y = 0;
			h = PS.Grid.y;
		}
		
		BeadStyleRange(x, y, w, h, style)
	}
	else
	{
		return PS.ERROR;
	}
	
	return true;
}
function XBApplyBeadStyle(x, y, style)
{
	PS.BeadFlash(x, y, style.flash);
	PS.BeadData(x, y, style.data);
	PS.BeadBorderWidth(x, y, style.borderWidth);
	PS.BeadBorderColor(x, y, style.borderColor);
	PS.BeadShow(x, y, style.show);
	PS.BeadColor(x, y, style.color);
	PS.BeadGlyph(x, y, style.glyph);
	PS.BeadGlyphColor(x, y, style.glyphColor);
	PS.BeadAlpha(x, y, style.alpha);
	PS.BeadBorderAlpha(x, y, style.borderAlpha);
	PS.BeadFlashColor(x, y, style.flashColor);
	if( style.audio )
		PS.BeadAudio(x, y, style.audio);
	if( typeof style.exec === "function" )
		PS.BeadFunction(x, y, style.exec);
}

function Paint(x, y)
{
	BeadStyle(x, y, BeadPaint);
}

function PaintEnter(x, y)
{
	BeadStyle(x, y, BeadEnter);
	
	if( mouseDown )
	{
		Paint(x, y);
	}
}

function PaintLeave(x, y)
{
	BeadStyle(x, y, BeadLeave);
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
	
	BeadStyle(PS.ALL, PS.ALL, BeadBG);

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
