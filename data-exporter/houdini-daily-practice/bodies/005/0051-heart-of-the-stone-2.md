### Heart of the Stone of Tear (Day 2)

The second day of modeling and rendering the Heart of the Stone of Tear; a
significant room in a giant fortress in the Wheel of Time. Now the sword
is placed, but I left Rand there still for scale. He's still naked.

I also procedurally added detail to the column bases, entirely via a
MaterialX displacement shader; I think it turned out well.

I had a bit of trouble trying to get the sword that is not a sword to emit
light. Enabling emission is easy enough, but the XPU doesn't allow you
to treat geometry as a light source, so the only time the rest of the
scene is lit is when the raytracing happens to directly hit the sword, by
accident, when calculating light. The CPU renderer works, but creates
significant artifacts for some reason. Eventually I just positioned four
point lights around the hilt, hoping that would prevent the sword from
casting discernable shadows. It seems to have worked well enough.

I don't know why there are so many random spots of white on the edges of
the image. No matter what I do I can't seem to completely get rid of them.
