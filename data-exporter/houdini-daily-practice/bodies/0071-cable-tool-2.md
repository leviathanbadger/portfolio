### Cable Tool (Day 2)

Following along with a tutorial to learn how to create a procedural cable
tool that uses the Vellum solver and integrates with Unreal Engine to allow
for a significant amount of detail in a game engine environment.

This is day two; I'm probably about done with the generation portion of it,
and tomorrow I'll work on wrapping the tool in an HDA, adding generation
options for variety, and fixing the simulation to a single frame. If I have
time, I'll work on importing it into Unreal Engine, but if not I'll defer
that until the fourth day. I'm not sure how much effort that will be
because I've never done anything like it before.

In addition to the generation steps that I've adapted from the tutorial
video, I added a greater degree of randomness for the cables, added UVs
(to be used in creating materials for rendering in-game), and added
a few control nodes to allow the cables to be generated for a VFX render
(high poly-count for best visual fidelity) or a game engine plugin (low
poly-count for real-time rendering.)
