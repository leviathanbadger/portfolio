### Mardini 2026 - Caustics

~~Today is day 21 of [Mardini 2026][mardini-2026]. The prompt for today is "Caustics".~~

**They sneakily changed the prompt for today.** I don't know when they made the change, but I
only noticed it when I went to write this up. The new prompt is "Food". So I can't really
use this project as an entry for the contest, and I have to quickly come up with a
replacement practice project for the "Food" prompt.

Ugh, I don't feel like writing up this one. I focused almost entirely on technical
things since I knew going in that this one would be next to impossible for me to make
look good. I just don't have the experience with genuine caustics in a render (or
fake caustics with a GOBO, for that matter.)

New stuff:

- Sculpt SOP -- again, not the first time, but it's a node I'm particularly bad at so
  it's worth noting whenever I use it.
- MPM sim. No, of course this isn't new; but it's a big time investment meaning it's
  really hard to learn to use this correctly. In this case I'm attempting a normal
  water simulation, so I didn't have to adjust parameters too much; but it's a
  constant emission source, with delete planes on the container. I'm not going to
  animate a full sequence of frames, but I still had to simulate a full sequence to
  get to a point where there's water covering the entire riverbed.
- I attempted to blend adjacent frames temporally in order to remove temporal jitter,
  but the attempt failed. I scrapped the attempt; it's not strictly necessary anyway,
  considering that the anticipated output is one or more stillframes, not animated
  sequences.
- Primvar-driven 'wetness' parameter. Yes, I've done this once before too. But:
    - This time I'm driving the wetness parameter with a Solver SOP, which should
      hopefully allow me to drive the wetness parameter over time, and allow for
      individual wet spots to 'dry up' over time. Again, not super relevant for a
      stillframe, but the hope is that it'll still make it look more realistic to
      have wet spatters, not just a clean waterline.
- Enabling caustics. I've tried this before, many times, but apparently it's something
  that Houdini is _really, really_ bad at. It's apparently extremely poorly optimized,
  especially Karma XPU. There are many threads online discussing this issue. I'm going
  to render _a single frame_ overnight, with about 100,000 samples per pixel, and see
  if the caustics show up at all.

HDRI is from PolyHaven. GreyscaleGorilla only has a few free HDRI, and none of them are suitable for this project.

**Edit**: I'm repurposing this project to submit for day 31, 'refract'. I'm too burned
out to create a new one right now, but happily 'caustics' and 'refract' basically fit
the same project ideas.

My entry post is [here][entry-post].

[mardini-2026]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2026/
[entry-post]: https://www.sidefx.com/forum/topic/103486/?page=2#post-457578
