### Campfire

I wanted to get into fire simulations a bit, but I haven't looked at any tutorials
or examples of using it so I decided to start with something small.
Hence the campfire.

I started by procedurally generating a firepit. The rocks are generated, then oriented
using a rigidbody simulation so that the procedural rocks are less likely to stand on
end around the fire.

I wanted to make fire on smaller branches leaning on each other in a teepee form, but
thought I'd have trouble procedurally generating that. Instead I made a log house.
I tried to set them on each other using a rigidbody sim, but the default collision
geometry didn't play nicely with that. I didn't want that to stop me from learning
to make a fire simulation so I just positioned the logs statically rather than working
through it. If you look closely you can tell the logs are clipping into each other.

Creating the fire sim itself was easy, I just used a preset and tweaked a few parameters.
I'll learn the mechanics for a later project.

Finally I decided to attempt to light the scene entirely by the flickering light of
the flames. Unfortunately there's no builtin method to accomplish this; I ultimately
created a weak point light and instanced it onto points that I scattered into the
flame volume at the hottest points. Hopefully it will work well, but I won't be
able to tell until it's completely rendered out and I can see how well it looks
in realtime.
