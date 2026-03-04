### Mardini 2026 - Miniature

Today is day 6 of [Mardini 2026][mardini-2026]. The prompt for today is "Miniature".

I was originally going to create a normal city block, or possibly a spaghetti
overpass with a lot of lanes and cars, then use a high angle and low depth of field
trick to pretend the scene is a smaller scale than it actually is. But, that's a lot
of geometric detail that I don't have time to render; and I noticed that
GreyscaleGorilla has a clay/playdoh material as part of their (very limited) free
library of materials. So I pivoted and started actually modeling as if I were making
a miniature. Ironically, I modeled everything here at the actual correct scale for a
desk with a computer, keyboard, cup, books, etc.; and I didn't even bother to scale
it down before creating the scene for render.

New stuff:

- Inflate SOP. Used to deintersect geometry. I didn't end up actually using this
  though, because it causes a bulge that looks more like a balloon than clay.
  Instead I just used the VDB SOPs to create fattened/rounded edges.
- Used cables again when creating the clay material.
- Triplanar Projection COP to apply the clay material textures on the object in 3D
  space, rather than letting visible seams appear when applied naively.
- High aperture/low depth of field to indicate extreme closeup camera to really sell
  the scale, even without something specific to use as a reference point.
- Film grain in postprocessing. This is relatively minute, and might actually look a
  bit like noise except that it's nonuniformly applied. I suspect it would look better
  if this were an animation rather than a still, but I do think it's better with than
  without.
- Other postprocessing that I've used before: Mono (luminosity) COP, Contrast COP,
  Vignette COP.

Note: HDRI and clay material textures are from GreyscaleGorilla.

My entry post is [here][entry-post].

[mardini-2026]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2026/
[entry-post]: https://www.sidefx.com/forum/topic/103278/?page=1#post-454776
