### 'The Shining' Elevator (Day 2)

I improved the wainscotting plank generation to prevent some geometry issues and to lower
the polygon count.

Then I created the wall paintings and decorative curtain/blanket thingies using a vellum sim, as
well as the elevator frame and doors. The doors are animated to open over about ten seconds,
since the water sim is intended to be really, really slow to simulate slow motion.

Everything is generated using UVs and has somewhat correct normals.

Finally, I stubbed MaterialX materials for each of the objects in the scene and placed
a few placeholder lights so the scene isn't lit by a camera spotlight and it'll look a bit
more realistic. The materials themselves don't take advantage of any textures. For now,
they're just PBR materials with colors but no actual texture. So it looks kinda crappy.
But it's better than the default grey material.
