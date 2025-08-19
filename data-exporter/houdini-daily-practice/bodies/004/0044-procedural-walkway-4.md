### Procedural Walkway (Day 4)

Last week I gave up on rendering this scene in Karma, because there were so
many technical difficulties involved in pulling the scene into the Solaris
context; however, in the intervening week I've since learned that there's
a new system for defining physically-based materials called MaterialX that's
incompatible with the existing standard materials. It apparently has better
Karma support than the old mantra materials, so I spent today learning the
new system and translating the old materials into this new format.

The good news:

- I managed to get the scene rendering in Karma; and using actual
  displacement, not just a fake displacement with a bump map.

The bad news...

- MaterialX isn't quite as programmatic as the existing materials system, so
  I had to dumb down the algorithm to generate the displacement map in order
  to implement it in a node system instead of code.
- Apparently actual displacement is limited in detail compared to the bump
  map system, the full scene render shows lots of artifacting in rendering
  the scene view because it isn't tesselating enough. It might be possible
  to configure this detail somewhere, but I don't know enough to do it quickly
  and I'm out of time today.
- Additionally, real displacement doesn't play nicely with opacity maps.
- While I was able to get the scene rendering in Karma, the GPU renderer
  (Karma XPU) that is in alpha is missing a few critical pieces of functionality
  that prevent it from rendering correctly, even with the materials in place.
  First, it doesn't correctly cull backfaces, which is currently allowing me to
  position the camera outside of the main tube for the hero shot; and second,
  it doesn't support spotlights yet, which I'm using to light the scene from
  above. (Third: the displacement using the XPU renderer doesn't appear to
  update the tesselated geometry normals in the same way as the CPU renderer,
  although the hero shot won't be close enough for that to make much of a
  difference.)
