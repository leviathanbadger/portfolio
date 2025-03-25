### Mardini 2025 - Chocolate

Today is day 26 of [Mardini 2025][mardini-2025]. The prompt for today is "MELT",
in the DOPS category.

I was going to try to do an Avengers Infinity War style person-melting-to-dust thing,
but then I realized that it would be incredibly difficult to get right, and I don't
really want another animation right now.

So I modeled a Ghirardelli chocolate square instead, without taking pains to get the
dimensions or details right, just the general shape. I didn't have time to texture
the wrappers, not even to add the same wishbone shape that I stamped onto the unwrapped
chocolate itself, but with the stylistic render I created in post using a slap comp I
think this actually works out better. If I come back later I may add a small wishbone
texture there anyway, but driving a change in the metalness or specular roughness
instead of the diffuse color. I think the subtler detail would look really nice here.

New stuff:

  - Copernicus VDB nodes (Shape/combine/etc.) Used to generate the wishbone pattern on
    the top of the unwrapped chocolate.
  - Another RBD sim, mostly unguided, to scatter the wrapped chocolates around.
  - Vellum Fluid sim (rather than FLIP) for the super viscous caramel goodness. At least,
    I tried, before I figured out that Vellum fluids doesn't support per-particle
    viscosity. Then I went to a FLIP fluid sim because I needed that and I'm more
    familiar with it anyway.
  - More slap comp postprocessing, this time with edge detection by depth, luminance
    quantize, chromatic aberration, equalize... I'm not sure if I overdid it, but I
    like the end result.

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[entry-post]: https://www.sidefx.com/forum/topic/100292/?page=1#post-441700
