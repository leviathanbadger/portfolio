### Mardini 2025 - Wood Rings

Today is day 9 of [Mardini 2025][mardini-2025]. The prompt for today is "WOOD",
in the SOPS category.

For this practice, I attempted to make a tree stump. I wasn't so interested in modeling
the stump itself as much as trying to make a good texture for the tree rings for the
tree's innards. Eventually, after a lot of work put into making that texture, I abandoned
the idea of modeling the stump entirely because I spent a lot of time on this already,
and creating and rendering a 3D scene to display a 2D texture kinda misses the point.

Maybe I'll come back later and model the stump itself, not just the tree rings texture,
but it definitely won't be until after Mardini completes. And TBH I probably won't,
because despite my best efforts the tree rings texture still kinda looks off. I don't
even know why. I'm so bad with this kind of thing.

That said, I'm not exactly disappointed. The end result is... acceptable. Just not the
knock-your-socks-off amazingly awesome photorealistic result that I was hoping for; but
that was never going to happen because I have very little experience with this to draw from.

New stuff:

  - Well, I generated the tree ring shapes in SOPS using some more complex VEX and math.
    I generated each ring individually with a uniform size, manually applying UVs and fixing
    UV boundaries, then I used a formula for exponential decay to reduce the size of each
    ring in a natural-seeming way. Then I used an attribute noise SOP to make the stump less
    circular, and more organic-looking.
  - After that all of my work was done in Copernicus to construct the texture itself. I used
    a Rasterize Setup COP + Rasterize Geometry COP to pull in the tree ring UV and index
    information; I used multiple Fractal Noise, Remap, Ramp, Blend, and Blur COPs to generate
    each layer of the texture and composite them together.

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[entry-post]: https://www.sidefx.com/forum/topic/100068/?page=1#post-439557
