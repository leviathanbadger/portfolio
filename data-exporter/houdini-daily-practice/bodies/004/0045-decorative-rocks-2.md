### Decorative Rocks (Day 2)

Today's practice I wanted to update the procedural rocks practice I did a month
ago. I didn't go out of my way to massively improve the simulation itself,
although I did increase the gravity so the falling animation doesn't look as
slow. The scale is still wrong, and the rock material itself is too soft,
allowing the rocks to take a long time to settle.

Aside from that... I just about tripled the number of rocks in the simulation,
improved their starting position and the camera position, added a ground plane,
and... most importantly... imported the scene into the solaris context and
rendered it all with the karma renderer using materialx shaders. I had to swap
out the spotlights for regular point lights and directional lights, but the
result is that the animation that took over four days to render a month ago
now takes 8-9 hours using the Karma XPU renderer; and that's with three times
the number of rocks, a fancy partially-translucent material for the bowl, and
a new (albeit crappy) "marble" material for the table the bowl is sitting on.

I added a postrender denoising step to remove some of the artifacts of
scattering light, but I think it was a mistake; it worked, but too well: the
whole render appears to be blurred and fuzzy.

If I come back to this later, there are a few things I'd wish to improve:

1. Adjusting the rocks' scale and physical properties, so they aren't left at
   the defaults and they react more as I would expect them to.
2. Using a low-res object for the collision geometry, but a high-res object
   for rendering; so that I can get close-up views of the rocks without
   geometry edges being apparent in the shot.
3. Hopefully... find a way to get a similar render without faking parts of the
   sheen using an emissive color
4. Toy with having a different subsurface and base color.
5. Try to experiment with volume rendering to get a "glittery" rock, instead
   of just a glowy sheen.
