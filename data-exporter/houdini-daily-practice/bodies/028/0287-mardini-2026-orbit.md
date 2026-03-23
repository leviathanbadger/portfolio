### Mardini 2026 - Orbit

Today is day 23 of [Mardini 2026][mardini-2026]. The prompt for today is "Orbit".

I had this practice planned since before the month even began. I hoped it would look
nice, and in truth, it doesn't look bad, but it's also not exactly photogenic as I
hoped it would be. Regardless, the point of the practice was to do two things that
seemed tricky but that I had an idea for accomplishing anyway.

First, the orrery itself, computed in a way that you can time shift to any time and
get a good result. Take that, three body problem! Heh. This turned out really well
in my opinion. Of course I wasn't going for any kind of world-accurate gravity or
orbital dynamics. Everything's coplanar, and the orbits are perfect circles, and the
celestial bodies are positioned and scaled to make them look nice rather than for
any kind of physical accuracy. But scrubbing back and forth on the timeline and
watching the entire thing go is actually really satisfying.

Second, the depressed gravity field displayed as a topographical map. The first
thing I tried didn't work exactly, although it failed in a way that I predicted.
Trying to use the actual formula for gravity creates ugly asymptotes which (aside
from looking bad) also severely messes up the quantize + other nodes pipeline I had
set up for the striations. The Poisson solver worked well after some tweaking. Even
then, this is probably the weakest piece because the striations are created in a
single texture, rather than being mathematically derived. You can see in the fourth
stillframe how this causes the lines to pixelate, which forced me to render the
animation from much higher than I originally intended.

All in all though, it worked out pretty well.

New stuff:

- Orbital mechanics math (not physically accurate, but with continuous math instead
  of discrete, so it can be projected forward or backwards to any point in time.)
- Solver Poisson Multigrid COP - to create faux gravity simulation without asymptotes;
  not physically accurate.
- Quantize COP, Mono to ID COP, ID to SDF COP, SDF to Mono COP - to create
  topographical lines/striations from gravity simulation.
- Area Light LOP used as a sphere, and Light Linker LOP to prevent it from changing
  the appearance of the sun. (I wanted the sun to look very yellow/orange but cast a
  mostly white light on all of the surrounding planets.)
- Practice with motion blur. This didn't actually end up being necessary, because I
  ended up slowing down the animated frames significantly so that the planets (and
  especially their moons) didn't become blurry messes. But I did learn a lot in
  attempting it in the first place.

Stars/space HDRI is from https://www.spacespheremaps.com/hdr-spheremaps/.

My entry post is [here][entry-post].

[mardini-2026]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2026/
[entry-post]: https://www.sidefx.com/forum/topic/103422/?page=1#post-456632
