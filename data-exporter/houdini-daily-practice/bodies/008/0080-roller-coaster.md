### Roller Coaster (Day 1)

Houdini 19.5 came out today. So for the next couple of days I'll be doing
small projects to learn how to use the new tools.

In this case, I was inspired by the racetrack example demoed in the Houdini
19.5 release video. I decided to do something similar, except with a
steel-frame roller coaster.

So I looked around for a reference image to use, and happily I found a 3D
generated roller coaster project someone already created. The main issue
with their model is that it didn't orient the track properly, causing
the coaster to look a bit unnatural, especially if you focus on the 360
degree loops. This is the problem that was designed to be solved by the
new curve orient features in the curve SOPs.

After generating the track based on the curve, this tool also generates
the support structure. Theoretically, it will never generate any supports
that intersect with the track. It does this by raycasting down through
a VDB generated from the track to determine if a position is valid to
generate a support pillar.

I got stuck on some math for generating the VDB, because I didn't want
the generated colliders to follow the banking on the original curve, but
I still needed it to correctly handle going upside-down, for example.
I solved the issue eventually, but because of that I didn't have time
to set up a render pipeline to play around with the new Karma XPU
renderer features. I guess I'll continue this tomorrow.
