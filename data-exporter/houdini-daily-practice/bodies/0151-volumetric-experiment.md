### Volumetric Experiment

For the moment I'm burnt out on large-scale projects. Today I just played around
with various techniques using volume SOP nodes, in an attempt to learn more about
volumes in general. (SDF, fog, VDB vs regular volumes, sparse volumes, etc.)

The practice very closely mirrors the referenced "reaction diffusion" tutorial series
created by Entagma. I watched the tutorials because they were interesting, then later
reproduced the node tree in a different context and worked through many of the same
problems myself to get a similar effect.

In the end the result isn't exactly what I had hoped for. It's not bad, but I realized
that I'm looking to do something similar on the surface of a model, not completely
filling a volume. Still in 3D, so I can't make use of a 2D reaction diffusion algorithm.
I have some ideas how to do that, but I'm also slightly burned out on this project
already. This method of generating this kind of growth pattern is incredibly
interesting, but it also takes _waaay_ too long to simulate, even on a small scale.
I'll have to think about it more and find a way to get a similar-looking effect using a
faster heuristic if I want it to be at all useful for a possible project in the distant
future.
