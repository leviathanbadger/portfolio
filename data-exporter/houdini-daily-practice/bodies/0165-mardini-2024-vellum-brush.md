### Mardini 2024 - Vellum Brush

Today is day 11 of [Mardini 2024][mardini-2024]. The prompt for today is the [Vellum
Brush SOP node][vellum-brush-sop].

The idea was to create a blanket fort, like kids create when they know nothing about
construction, in order to make a magical place they can pretend to own. I did create
one of these growing up, but it was every bit as bad as this simulated on turned out
to be. Probably worse actually - this one actually looks stable, even if the blanket
colors and thicknesses make it look pretty derpy.

To simulate it, I actually had four separate Vellum sims, one at a time, rather than
doing them all together. This allowed me to custom-build each layer of the sim, so
it looks much less procedural and much more natural than it might have otherwise looked.

I used the Instancer node in LOPs context to create multiple lights, as if along a
string of Christmas lights. I've done this before with a single-color light, but here
I had a lot of difficulty getting the color that was randomly chosen on the points to
take effect on the instanced light. I tried a dozen different things but kept running
into issues. I'm pretty sure this is a regression, because many sources I found online
say you should be able to just set `v@Cd` on the point and the light takes on the color
in the Instancer node; but I had to create a long chain of attribute wrangle/copy
property nodes to manually set the instanced light's color property.

All of the materials are from the AMD MaterialX material library, I didn't put a ton of
effort into them since I spent so much time on the rest of this.

Altogether spent ~6 hours on this, which was the time I was meant to do this project
and the next. Yikes. So... this week might be rough. If I'm to complete them all on
schedule, the next few will be really crappy, low-effort ones because I just won't
have time to do better.

My entry post is [here][entry-post].

[mardini-2024]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2024/
[vellum-brush-sop]: https://www.sidefx.com/docs/houdini/nodes/sop/vellumbrush.html
[entry-post]: https://www.sidefx.com/forum/topic/94896/?page=1#post-415638
