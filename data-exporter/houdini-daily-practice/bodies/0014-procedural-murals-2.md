### _Better_ Procedural Murals

Tiles can optionally be generated using a cell/fracture pattern, so it doesn't look
so much like a grid.

It can be ran on arbitrary (curved) geometry, although that causes significant problems
if the curves on the original geometry are smaller (or even close-in-size-to) than
individual tiles. Even for slow curves it creates a few artifacts that you can see here.

One tradeoff for the arbitrary geometry is that I can't assume UV coordinates.
The input geometry has to be UV-mapped already for it to work properly.

The tile colors are sampled using the UVs of each vertex and then averaged,
rather than sampling once with the average UV of the vertices. This should produce
a mural more recognizable as the original image.

The two things I wanted this to do that I didn't get to today:

1. Parameterize and export this node network, so I can import it and use it in other projects
2. See if I can figure out how to bake normal and roughness maps so I can export a single
   two-tri primitive and use it in a game (it may not look it, but these are extruded tiles).

...so that's what I'll do tomorrow. If those don't take too long, I'll look at additionally:

3. Randomizing tile reflectivity and normals a bit so different tiles catch the specular light better
4. Materials/render settings for a stained-glass window with subsurface scattering

...although if I don't get to 3 or 4 tomorrow I won't keep going with the project.
I'll choose a different thing to work on for the day after.

