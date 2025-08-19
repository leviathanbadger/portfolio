### Clockwork (Day 1)

The first goal today was to make an HDA to procedurally generate gears based on various
parameters. I created that without too much difficulty; however, UV mapping gave me
some difficulty because I was attempting to map UV coordinates radially instead of
projecting UV coordinates orthogonally.

The intention was to use the UV coordinates to create an anisotropic specular effect.
Projecting using polar coordinates gave warped/otherwise distorted effects. Brickering
the output geometry helped a lot, but it massively increased the poly count of the
gears, and it still had visible (and ugly) artifacting near the center of the gears.

Eventually I gave up on using the UV coordinates to derive the anisotropy; instead
I'll create anisotropic texture maps in substance painter on tomorrow's practice. I
should have thought to do that first, but I'm still learning, and that's the point of
practice, after all.
