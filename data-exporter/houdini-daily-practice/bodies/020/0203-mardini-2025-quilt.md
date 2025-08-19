### Mardini 2025 - Quilt

Today is day 11 of [Mardini 2025][mardini-2025]. The prompt for today is "FABRIC",
in the SOPS category.

Today I modeled a very simple bed & bedframe, then simulated and textured a quilt
draped over it. Considering the prompt for today's practice, the quilt is the point;
obviously.

The end result is nice, but I spent _waaay_ too long on creating different patterns.
I could have randomized it a lot more than I did, but I knew that the end result
would be very noisy if I did that. Even with the effort I put into it, since the
fabrics for each section are chosen randomly, there are still some glaring issues
with the fabric selections. (Similar colors right next to each other, even the same
fabric on adjacent segments once or twice.) If I put in more effort I could generate
the fabric selection more intelligently to remove these issues, and still have the
general fabric selection be random; but it's not worth the effort right now.

New stuff:

  - This was my first attempt to use the new wrinkle defomrer added in Houdini 20.5.
    I didn't do much research beforehand, and to be honest I didn't really have a
    specific look I was going for; I just wanted to quickly generate a "soft" look
    for the pillows I quickly created with a grid and the Planar Inflate SOP (that
    was also added in Houdini 20.5).
  - Lots of practice with COPS nodes. Some old but used in new ways (Tile Pattern
    COP, UV Transform, Rasterize Setup & Rasterize Geo COPs), some new (Random Mono
    COP, Wrangle COP, Quantize COP, UV Sample COP, Convolve 3x3 COP, Eikonal COP.)

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[entry-post]: https://www.sidefx.com/forum/topic/100093/?page=1#post-439840
