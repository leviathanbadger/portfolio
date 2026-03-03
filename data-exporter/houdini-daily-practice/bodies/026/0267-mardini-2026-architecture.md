### Mardini 2026 - Architecture

Today is day 4 of [Mardini 2026][mardini-2026]. The prompt for today is "Architecture".

This was meant to be a modeling exercise, with little to no new techniques. I did a few
new things, and I used several nodes in new ways, but the original idea was just a
stillframe of a simple, mostly geometrical Japanese arch. However, as I was setting up
the render I kept on having idea for things to do, so it eventually turned into an
animation, with displacement, and a warping and chromatic aberration effect on the
archway, and some tint and vignette. I'm pleased with the way it turned out, but I had
to rerender the entire sequence twice because of unpleasant jittering in the animation
that it took a few tries to fix. It's not the kind of thing that can be noticed before
you render.

- In the COPs network, I used the new 'cable' feature for the first time. I'm honestly
  annoyed at myself for not doing this before now, because it's honestly saving me a
  lot of time.
- Composing materials in COPs. (But for the most part, the material textures are from
  GreyscaleGorilla, I didn't make them myself.)
- Revolve SOP without a complete revolution; and with the 'column' type instead of
  skinning.
- Bend SOP in two directions across an axis.
- Computing PolyBevel SOP normals differently than the flat surfaces used otherwise.
- Component Builder LOP with animated input geometry, requiring configured settings
  and a Cache LOP.
- Masked and customized chromatic aberration in postprocessing (slap comp). The
  distortion effect is actually done via a geometric lens in-scene.
- Tint and vignette in postprocessing.

Note: the HDRI and some of the base material textures are from GreyscaleGorilla.
(Although I did compose several materials together in COPs, and the paint material
and mask is entirely me.)

My entry post is [here][entry-post].

[mardini-2026]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2026/
[entry-post]: https://www.sidefx.com/forum/topic/103260/?page=1#post-454498
