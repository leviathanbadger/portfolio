### Mardini 2025 - Desert Dunes

Today is day 29 of [Mardini 2025][mardini-2025]. The prompt for today is "SUNSET",
in the LOPS category.

You can do a sunset scene over just about anything, and chances are it'll look decent.
Funnily enough, this is actually the second time making a desert scene, although [the
first time][day-62] I was following along with a tutorial and specifically learning how
to use heightfields and the old COPS context. This time I focused less on both of those
(although I did use them to generate the terrain and textures) but I focused most of my
energy on:

  1. A noise- and trigonometry-based sand ripples (the few inches tall wind-driven
     ripples.)
  2. Running another MPM simulation for the footsteps in the sand with (sorta) realistic
     sand collapsing/resetting.
  3. The render and postprocessing.

New stuff:

  - Another attempt at MPM, this time with the "sand" material type. I also was a bit
    smarter, and chose a project that doesn't require perticularly good results, since
    I'm just taking the end result and flattening it to the topmost layer of sand
    so I can update the original mesh and attempt to blend between the simulation and
    original mesh height. Even if the results are a little messy, the blending and
    a moderate blur should fix the issues. And it turned out all right, although
    you can definitely still see where the blending begins.
  - A lot of postprocessing in the slap comp, in ways I've definitely never used it
    before. HSV adjust, Chroma key, selective blur, selective glow,
    3x3 convolve, etc. I also used a slope direction + streak blur COP for the first
    time to generate the sand texture, although it's a very subtle effect and not
    visible in the final render. I found that my slap comp behaves significantly
    differently when I render 1080p versus 4k. Presumably other render sizes would
    have their own strange render characteristics. At some point I'll look into which
    specific nodes are causing the discrepancy, but not today. I'm beat.

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[day-62]: https://brandonslade.me/houdini-practice/62
[entry-post]: https://www.sidefx.com/forum/topic/100340/?page=1#post-442101
