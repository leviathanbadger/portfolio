### 'The Shining' Elevator (Day 8)

The main change between this one and the last is that the blood splatter map takes
into account previous frames so even when the liquid simulation takes the blood
away from a spot, the walls/floor/furniture still render as "bloody".

This was accomplished with a trick that aggregates the particle points from all of the
frames along with an attribute indicating which frame the particle first appears. This
makes it relatively fast to generate the blood splatter maps; the downside to this
approach is that it doesn't allow me to move the furniture, because the blood splatter
map only takes into account the current frame's furniture positions. Pretending the
couch moves with the blood would cause the blood splatter to "slide" and would look
very unnatural.

Still, it's good enough for now. I'm starting to burn out on this project, so I want
to just simulate the blood flooding out from the elevator, re-render, and call the
project finished.

I also touched up the blood materials a bit, although they still look unrealistic
and fake. I did some research into what I'd have to do to get a photorealistic
blood material, and I can say with certainty I don't want to go through the hassle
of setting all of that up. Nuh-uh.
