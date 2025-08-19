### Bottle of Ambrosia

I tried to create a 3D model of a bottle of ambrosia, from [Hades][hades] (the game
by [Supergiant games][supergiant-games])

Modeling the bottle itself didn't prove to be _too_ hard, although there were some
challenges I wasn't expecting. The bigger issue was in attempting to create the
render materials for it.

As almost every material in the object is very heavily reflective and/or refractive;
I also wanted the ambrosia itself to have heavy subsurface scattering, making it even
worse. The reflections and refractions of course also required that I turn on caustics
to prevent hard shadows cast by translucent objects. For all of these reasons, in order
to get a decent render image I had to up the reflection/refraction limits and samples
per pixel by several orders of magnitudes to remove grainy artifacts from the image.
The samples per pixel in particular were set to 1024, when normally I get by with 32
or even less; and the default is 9.

With those settings, I was able to render a single still-frame image using the karma
XPU renderer in about 35 minutes. But wait, it gets worse.

In attempting to fiddle with the material settings, I also discovered that subsurface
scattering isn't fully supported by the XPU renderer. And the CPU renderer is orders
of magnitude slower than the XPU renderer of course; and with my inexperience creating
materials I really depend on the visual feedback to know if changes I'm making are
a step in the right direction or not.

With the difficulties in creating the materials, I was unable to spend the time needed
to finish modeling the fine details on the bottle itself, including the bow on the
ribbon, or the silver base.

The HDRI map is from [polyhaven][polyhaven-reading-room].

[hades]: https://www.supergiantgames.com/games/hades/
[supergiant-games]: https://www.supergiantgames.com/
[polyhaven-reading-room]: https://polyhaven.com/a/reading_room
