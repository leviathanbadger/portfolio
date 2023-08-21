### Greenhouse (Day 3)

Big day. Took several hours.

I started by adding benches between two of the roof supports. They don't look
exactly like I was picturing, but they don't look bad. I'm keeping them for now.

Then I created a method to procedurally create shelves with a particular shape and
height, that scatters points for various plants on each shelf. The scatter was
harder than I expected, because Houdini's default scatter node doesn't have an
option to avoid the edge of the surface you're scattering onto.

After I got that working, I downloaded a variety of potted plant models from
textures.com and slotted them into the scatter slots.

Creating materials for all of this was the biggest challenge, especially the plants.
Each of the potted plant models has three or four materials. The soil and pot
materials are shared between them all, and then each plant type has a thin plant
material (for leaves) and optionally a solid plant material (for stalks, berries, etc.)
As the models were relatively high-res, I had to instance the plants as I render them,
which made it a slight challenge to use a different material for each component
in the Solaris/LOPs context.
