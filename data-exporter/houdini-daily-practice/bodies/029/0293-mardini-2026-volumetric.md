### Mardini 2026 - Volumetric

Today is day 29 of [Mardini 2026][mardini-2026]. The prompt for today is "Volumetric".

I started trying to make the river Lethe from Greek mythology; I figured that the
slow-moving river that's not supposed to be physically accurate would make it easier to
model, but after a while I got bogged down in the details of trying to get the river to
animate lethargically, with a noisy fog volume animating with it... and I realized that
I wouldn't have time to model any rocks, trees, grass, etc., let alone render the entire
sequence before I had to submit it.

So I pivoted a bit, and switched from the river Lethe to an abstract terrain with a
magical glowing river. I still intend to render it as an animation, but I'll probably
remove the volumetrics from it and submit the uglier first draft to Mardini.

New stuff:

- Flow Solver with collision, geometry-driven velocity control, cable pack+unpack to
  pass through images that don't need to be recomputed each frame.
- ROP Image Output COP with a cable input to save an animated sequence with multiple
  AOVs.
- Practice exposing material properties as parameters instead of using constants.
- 'Sparkly' emission with extremely exaggerated emission at tiny, noise-driven points.

My entry post is [here][entry-post].

[mardini-2026]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2026/
[entry-post]: https://www.sidefx.com/forum/topic/103471/?page=2#post-457322
