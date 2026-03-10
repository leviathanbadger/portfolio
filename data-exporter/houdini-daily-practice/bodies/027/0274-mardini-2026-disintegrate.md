### Mardini 2026 - Disintegrate

Today is day 11 of [Mardini 2026][mardini-2026]. The prompt for today is "Disintegrate".

I didn't really have a cohesive idea of what I wanted to make here. I had a few ideas of
things I wanted to try, but mostly just random parts that don't necessarily go together
well.

To be honest, the part about this practice I most wanted to try was a kind of temporal
blur where I'd play the simulation forward in realtime, then 'rewind' it at a faster
speed -- not linearly, but by blending the frames in reverse. Specifically, the EXRs for
each frame would be generated with both the beauty pass (C) and the depth, and I'd choose
which image to pull each pixel from based on which frame has that pixel closest to the
camera. I was hoping this would make for an interesting streaking effect. However, after
some research completed while the initial frames were rendering... ~~it's probably not
possible in the current compositing context in Houdini to do this.~~

Update: actually, while it isn't possible to do it in the COPs context, Houdini ships with
the oiiotool CLI utility and an OpenImageIO TOP node which calls it. So, after more
fiddling (when I probably should have been working) I got it to blend the frames the way
I want it, and then created the video.

Ultimately, the result is a wonky animation that looks more than a little weird and
arbitrary, but it's worth it for the distortion/blended frames in the reverse animation.
In my opinion.

New stuff:

- An RBD Bullet simulation with arbitrary POP forces.
- Triplanar projection again to create a different material for the interior and
  exterior of a fractured object.
    - Turns out triplanar projecting a normal map is tricky, so I had to cut this out
      of the final product. No normal maps, which hurt the cohesion of the resultant
      materials.
- OpenImageIO TOP node to perform some image magic that wouldn't have been possible
  in the current COPs context.
- VCR scan line distortion. No, I didn't put a ton of effort into this, it's not even
  a little physically accurate; but it's close enough to be reminiscent and I really
  like the effect for how little time and effort it took.

Material textures are from GreyscaleGorilla, although I used COPs triplanar projection
to composite them together. COPs used for reverse animation effects, except for the
frame blending by depth (which isn't currently possible in COPs so I did it with the
OpenImageIO TOP node.)

My entry post is [here][entry-post].

[mardini-2026]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2026/
[entry-post]: https://www.sidefx.com/forum/topic/103324/?page=1#post-455362
