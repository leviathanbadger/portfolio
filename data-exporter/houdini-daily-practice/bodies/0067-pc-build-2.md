### PC Build (Day 2)

I added quite a bit more detail to the case, including adding the front panel
as well as the front and side panes of glass.

As for rendering, I added an instanced light along the bottom and top of the
right side of the case; then I changed the animation options and spun the
build so I could render out a five-second clip of the build spinning around
as if on a turntable.

I rendered the animation twice; once with just the CPU and once with the XPU
renderer. The CPU has quite a bit fewer rays, but it still looks better because
the XPU renderer is still in alpha and doesn't support shaped light sources
(such as the spotlights I was primarily using to light the scene).
