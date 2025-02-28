### Mardini 2025 - Spinning Top

Today is day 1 of [Mardini 2025][mardini-2025]. The prompt for today is "TOY", in
the SOPS category.

For today I created a spinning top animation. It's designed so that the resultant
video can be looped seamlessly. I also attempted to create a cool pattern for the
ground/stage material, but although I learned a bunch, everything I tried made the
image extremely garish and noisy. So I rendered it twice, once with the noisy material
so there's a record, and once with a normal metallic material.

New stuff:

  - This is the first time I touched the new COPS nodes (copernicus). I used it to create
    the spiral pattern on the top, although I let it drive a bunch of MaterialX nodes instead
    of using copernicus to generate material maps, if only because I'm more familiar with
    the MaterialX nodes so it allowed for faster iteration. Copernicus is really
    powerful, but I'm not familiar enough with them yet to do anything really complex.
    I'm hoping to play with it more for a lot of my other projects this month.
  - I'm going to count the spinning top velocity blur, even though I've done it before,
    if only because the motion is so fast that I had to subdivide the frame 10+ times
    to get a good-looking motion blur. At the time of me writing this I'm still not
    sure how good it'll look in practice though.

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[entry-post]: https://www.sidefx.com/forum/topic/99943/?page=1#post-437884
