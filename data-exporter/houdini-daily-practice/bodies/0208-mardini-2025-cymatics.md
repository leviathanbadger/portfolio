### Mardini 2025 - Cymatics

Today is day 16 of [Mardini 2025][mardini-2025]. The prompt for today is "JUMP",
in the KineFX category.

Full disclosure, I was basically following a tutorial for this project. I found the
cymatic patterns node that gave me the idea to do this, then after a small bit of research
I found a tutorial that does exactly what I intended to do. So, rather than doing all of the
work myself I followed the tutorial. Guided learning is still learning, after all; and I
didn't copy everything exactly the same, I also added my own spin, and I configured the render
myself.

I was originally going to try to use a vellum grain simulation to do this, but the tutorial
just uses a wrangle + jitter node, and the end result looked nice so I did the same. I'll
play around with vellum grains some other time.

New stuff:

  - The main new node is the Chladni Cymatic Patterns COP in the new Copernicus compositing
    environment. I also used the Height To Normal COP to convert these patterns to a kind of
    gradient that I could use to sample the resultant pattern in a Solver SOP to generate
    the sand jitter motion here.
  - This is the first time I've rendered points directly in the LOPS context. By default,
    points are rendered as spheres, which is usually a bad thing (at least in my experience)
    because you'll get an otherwise clean render but because your geometry wasn't cleaned
    up enough in SOPS you have orphaned points that get very visibly rendered as giant
    spheres where they really shouldn't be in the end result. However, so long as the points
    are intentional and expected, this is actually a pretty nice feature because it saves on
    memory when you have a grain simulation or something like this. You don't need to create
    millions of polys worth of tiny spheres, you just have a few hundred thousand points
    that get instanced as spheres in the render.

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[entry-post]: https://www.sidefx.com/forum/topic/100165/?page=1#post-440526
