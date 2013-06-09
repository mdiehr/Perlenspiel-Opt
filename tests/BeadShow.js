/////////////////////////////////////////////////////////////////////
// game.js for Perlenspiel 2.3.11
// Modifications by Mark Diehr: mdiehr@fullsail.com

/////////////////////////////////////////////////////////////////////
// Put your global variables after this line.
var size = 3;
var rate = 1;
var paused = false;

var fpsElement = null;
var dateElement = null;
var lastTime = null;

/////////////////////////////////////////////////////////////////////
// Functions

/////////////////////////////////////////////////////////////////////
// Events

PS.Init = function (options)
{
	"use strict";

	// change to the grid dimensions you want

	PS.GridSize ( size, size );
	
	// Put any other init code here
	PS.BeadColor(PS.ALL, PS.ALL, 0x336699);
	PS.GridBGColor(0x888888);

	PS.BeadShow(1, 1, false);
		
	PS.StatusFade(false);
	PS.StatusText("Use the mouse to click.");
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
	PS.Debug("Clicked on " + x + ", " + y + "\n");
};

PS.Release = function (x, y, data, options)
{
	"use strict";

	// Put code here for when the mouse button is released over a bead
};

PS.Enter = function (x, y, data, options)
{
	"use strict";

	// Put code here for when the mouse enters a bead
};

PS.Leave = function (x, y, data, options)
{
	"use strict";
	
	// Put code here for when the mouse leaves a bead
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
