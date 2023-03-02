### Mardini 2023 - Linear

Today is day 2 of [Mardini 2023][mardini-2023]. The prompt for today is "linear".

My goal was to make a set of nodes connected together by line wires, generated in a way that would
allow me to line up a camera so that it all looks organized in a specific direction, but even a
little bit off from that everything looks chaotic and messy, like a fractal viewed from too close
up. Positioning everything precisely with math should make this easy; however, I discovered quickly
that although I can do this easily enough in the editor (using a volume fill for example) getting
the same effect in a render is much more difficult. The other problem I had was that I didn't have
enough macro details to make the render look interesting in the first place.

I solved these issues by 1. using noise to empty large sections of the scene, then using leaf trimming
algorithms to delete nodes that didn't have enough neighbors; and 2. massively overcompensating on
the size of the generated mesh. The end result is that the simulated connections mesh sat at just
under 2.6 million edges (4-13 for each node, although obviously each edge was shared by two nodes).

My entry post is [here][entry-post].

The output was rendered using PDG/TOPs again, because I really want to nail this technology. It's not
super useful for _this_ specific project, and likely won't be for any of the other Mardini daily art
projects, but it's critical to learn for when I have larger projects that involve more than one or
two renders total.

[mardini-2023]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2023/
[entry-post]: https://www.sidefx.com/forum/topic/89107/?page=2#post-385088
