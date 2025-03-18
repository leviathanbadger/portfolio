### Mardini 2025 - Bioshock Rust Intro

Today is day 19 of [Mardini 2025][mardini-2025]. The prompt for today is "CRAWL",
in the KineFX category.

I've wanted to do this project for a long time, but every time I thought about it
in the past I wasn't sure where to start. Truthfully, The result is still not
what I'd hoped, but realistically I only spent seven hours on this, and something like
this is going to take a lot of back and forth. It's not exactly simple making layered
materials like this - paint, fading and peeling off; then iron, corroding and rusting.
Elsewhere: gold corroding and tarnishing. I didn't get the animations correct,
but for the time I spent on it I'm very pleased with the result.

Besides material blending and animation speed issues, I also didn't have time to add
the ripping cloth sim over the subtitle, or to add many of the finer details of lighting
that are evident in the reference video. But I had so much fun with this, I will
definitely be coming back to it at some point in the future to improve on this project.

New stuff:

  - Material blending in Copernicus. I've technically done this to a small extent for
    the rusted pipe for [practice day 204][day-204], but this is orders of magnitude
    more complicated than that, including a stable procedural decay over time, and
    blending between several different materials instead of just two.
  - Radial and concentric ramps for specifying the paint color. In itself this isn't
    complex, but I also had to apply it to the base color map in physical space, not
    texture space, which adds a huge degree of complexity since the painted areas'
    UV coordinates are procedurally generated. They are likely to be rotated and
    scaled differently, so I couldn't just shim the ramp in the correct location for
    UV space.

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[day-204]: https://brandonslade.me/houdini-practice/204
[entry-post]: https://www.sidefx.com/forum/topic/100200/?page=1#post-440934
