### Mardini 2026 - Crowd

Today is day 28 of [Mardini 2026][mardini-2026]. The prompt for today is "Crowd".

I got excited for this prompt because at the last minute, just before I started,
I had an idea for a project that I thought would be fun and that I really wanted
to do. The problem is, it's an animation, and I left it too late to start it. If
I wanted to submit an animation, I had to start it rendering overnight, and I
started the practice at about 9 PM.

So... rather than doing the smart thing, and cutting back on the scope, or making
it a still so I could work on it in the morning, I instead kept working on the
project until I was satisfied and finally started the render at 3 AM. With
extremely low render settings (128 samples per pixel) because it's a 20-second
video instead of the normal 10 seconds, and I have less time to render it. If the
animation finishes rendering overnight and I don't like something about it, I may
fix it and use the cloud rendering service to push it out fast (even if it is
expensive) because I just really like this idea.

I still had to cut the scope to an extent. I wanted little floaties/debris in the
water, and some slight warp/distortion on the jar, and a grunge mask for the
ground and jar to make the scene seem more dirty instead of mostly pristine...
but I got most of what I wanted.

New stuff:

- Art-directed RBD bullet sim to place the eyeballs. I debated not putting this
  here because it was a pretty simple sim, all things considered, but I think I'll
  put every simulation use here because they're almost always finicky and require
  many rounds of adjustment+resim.
- Randomly moving and randomly selected look-at points. This is one Solver SOP,
  mostly trivial, but it's something I've never done before.
- Look-at with maximum rotation change speed. (Can't just linearly interpolate the
  look-at position, have to interpolate the orient quaternion.) Another Solver SOP;
  not as trivial, lots of trig and linear algebra. But it wasn't as bad as I
  thought it would be, and I'm glad I put in the effort.
- Nested dielectrics again. This time the liquid transmission has a color and depth,
  which is maybe the smarter way of doing volumetric liquids on a budget.
- Procedural displacement/normal maps for the jar lid. This part turned out very
  well, in my opinion. We'll see how it looks in the animation, but the stills are
  great.
- Procedural material for eyeballs. Two, actually; one for the iris (including
  dilating/contracting pupil based on look-at distance and randomized iris color),
  and the other for the white with pink veins eyeball itself.

HDRI is from PolyHaven.

My entry post is [here][entry-post].

[mardini-2026]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2026/
[entry-post]: https://www.sidefx.com/forum/topic/103469/?page=1#post-457186
