### Mardini 2024 - Karma Material Builder

Today is day 7 of [Mardini 2024][mardini-2024]. The prompt for today is the Karma Material Builder
LOP node, which doesn't seem to have any documentation.

Again, I've been using this node for a very long time now. (Technically I was using the USD MaterialX
Builder node instead, but ultimately that's the same thing, just without the Karma render properties
node.) So today was another freebie, since I could pick just about anything to render and it would
fit the prompt.

However, last project took a lot of time and I also lost time that day seeing Dune Part 2 in theatres
(not that I regret that) so I wanted something simpler than terrain generation for today's practice.
I also have rarely used the Font SOP node, so I started with an extruded, diegetic text "SPRING", then
built a very simple scene themed around it.

The variations of flowers and grass were purchased from textures.com. Then I used the component builder
network nodes to add them to the layout asset gallery, and used the Layout node to scatter them. I ended
with millions of instances of scattered flowers and grass, which is _waaay_ too many, considering how
high-poly they are, and considering that the materials used for them include a displacement map.

It took just under 35 minutes to render in 4k. The GPU crashed after a short while, because it didn't
have enough memory, and the CPU had to finish the render. The CPU itself used up over 128 GB RAM. (All
that I have, plus several gigs in the pagefile.) I'm lucky my computer didn't crash mid-render. Maybe
I should upgrade to 256 gigs of RAM. Can you even get 64 GB sticks?

My entry post is [here][entry-post].

[mardini-2024]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2024/
[material-builder-lop]: https://www.sidefx.com/docs/houdini/nodes/lop/materiallinker.html
[entry-post]: https://www.sidefx.com/forum/topic/94829/?page=1#post-415122
