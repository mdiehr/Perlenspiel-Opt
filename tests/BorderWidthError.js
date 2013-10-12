/////////////////////////////////////////////////////////////////////
// game.js for Perlenspiel 2.3.12
// Modifications by Mark Diehr: mdiehr@fullsail.com

// Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
// Perlenspiel is Copyright © 2009-13 Worcester Polytechnic Institute.
// This file is part of Perlenspiel.

/////////////////////////////////////////////////////////////////////
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
	
	PS.GridSize ( 4, 4 );
	
	// Put any other init code here
	PS.BeadBorderWidth(PS.ALL, PS.ALL, 10);
	PS.BeadBorderColor(PS.ALL, PS.ALL);
	PS.BeadColor(PS.ALL, PS.ALL, PS.COLOR_RED);

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
	
};
