/* game.js for Perlenspiel 2.3.13
Modifications by Mark Diehr: mdiehr@fullsail.com */

/* Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
Perlenspiel is Copyright © 2009-13 Worcester Polytechnic Institute.
This file is part of Perlenspiel. */

/* This is a template for creating new Perlenspiel games
All of the functions below MUST exist, or the engine will stop and complain! */

/* PS.Init ()
	Initializes the game
	This function normally includes a call to PS.GridSize (x, y)
	where x and y are the desired initial dimensions of the grid
*/
PS.Init = function (options)
{
	"use strict";
	
	// change to the grid dimensions you want
	
	PS.GridSize ( 8, 8 );
	
	// Put any other init code here
	
};

/* PS.Click (x, y, data)
	This function is called whenever a bead is clicked
	x = the x-position of the bead on the grid
	y = the y-position of the bead on the grid
	data = the data value associated with this bead, 0 if none has been set
*/
PS.Click = function (x, y, data, options)
{
	"use strict";
	
	// put code here for bead clicks
	
};

/* PS.Release (x, y, data)
	This function is called whenever a mouse button is released over a bead
	x = the x-position of the bead on the grid
	y = the y-position of the bead on the grid
	data = the data value associated with this bead, 0 if none has been set
*/
PS.Release = function (x, y, data, options)
{
	"use strict";

	// Put code here for when the mouse button is released over a bead
	
};

/* PS.Enter (x, y, button, data)
	This function is called whenever the mouse moves over a bead
	x = the x-position of the bead on the grid
	y = the y-position of the bead on the grid
	data = the data value associated with this bead, 0 if none has been set
*/
PS.Enter = function (x, y, data, options)
{
	"use strict";

	// Put code here for when the mouse enters a bead
	
};

/* PS.Leave (x, y, data)
	This function is called whenever the mouse moves away from a bead
	x = the x-position of the bead on the grid
	y = the y-position of the bead on the grid
	data = the data value associated with this bead, 0 if none has been set
*/
PS.Leave = function (x, y, data, options)
{
	"use strict";
	
	// Put code here for when the mouse leaves a bead
	
};

/* PS.KeyDown (key, shift, ctrl)
	This function is called whenever a key on the keyboard is pressed
	key = the ASCII code of the pressed key, or one of the following constants:
	Arrow keys = PS.ARROW_UP, PS.ARROW_DOWN, PS.ARROW_LEFT, PS.ARROW_RIGHT
	Function keys = PS.F1 through PS.F1
	shift = true if shift key is held down, false otherwise
	ctrl = true if control key is held down, false otherwise
*/
PS.KeyDown = function (key, shift, ctrl, options)
{
	"use strict";

	// Put code here for when a key is pressed
	
};

/* PS.KeyUp (key, shift, ctrl)
	This function is called whenever a key on the keyboard is released
	key = the ASCII code of the pressed key, or one of the following constants:
	Arrow keys = PS.ARROW_UP, PS.ARROW_DOWN, PS.ARROW_LEFT, PS.ARROW_RIGHT
	Function keys = PS.F1 through PS.F12
	shift = true if shift key is held down, false otherwise
	ctrl = true if control key is held down, false otherwise
*/
PS.KeyUp = function (key, shift, ctrl, options)
{
	"use strict";
	
	// Put code here for when a key is released
	
};

/* PS.Wheel (dir)
	This function is called whenever the mouse wheel moves forward or backward
	dir = PS.FORWARD if mouse wheel moves forward, PS.BACKWARD if backward
*/
PS.Wheel = function (dir, options)
{
	"use strict";

	// Put code here for when mouse wheel is moved
	
};

/* PS.Tick ()
	This function is called on every clock tick
	if a timer has been activated with a call to PS.Clock()
*/
PS.Tick = function (options)
{
	"use strict";

	// Put code here to handle clock ticks
	
};
