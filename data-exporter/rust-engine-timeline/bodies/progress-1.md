### 3D Cube Rendered

In the last few days, I fixed the validation errors due to CPU/GPU synchronization issues.
Additionally, I figured out how to get a ModelView and Projection matrix into the vertex
shader and finally got a simple cube rendering in the center of the screen.

If you have followed along with the Vulkan Rust tutorial, you'll note that I'm going out
of order significantly here. They don't switch from 2D to 3D space for a long time yet -
however, since I'm already familiar with the math involved (although I'm not an expert)
I skipped ahead and did it myself. It's much more satisfying to render a cube than a single
triangle. This does mean that I had to skip ahead to add uniform buffers and related objects
though.

However, there are a couple of things of note here.

First, this is rendered without indices. Each triangles' vertices are unique to itself,
there's no deduplication on the cube face corners for example. I darkened one of each
of the cube face's triangles to show this. This is just a natural consequence of going
through the tutorial out of order, I guess.

Next, although the swapchain and a bunch of other resources are recreated on window resize
now, the app still doesn't support a fullscreen mode. I doubt the tutorial will get to it,
as that would involve querying hardware support for various resolutions and refresh rates,
and I'm pretty sure that's out of scope for Vulkan. I'll get to it eventually, but for now
that's not really super important because it's much easier to diagnose things in a windowed
application anyway.

Finally, _obviously_ there's no lighting here yet. That's really not a quick thing to jump
into. There are so many more important things to get working before that becomes a
necessity.

I've linked to a random youtube video that I found while researching some of the GLM math
functions to get this to work. It's linked because I realized the video was posted by Jamie
King, who used to teach at [Neumont College of Computer Science][neumont], which I attended
and from which I received my degree. I never had him has a teacher, but I still went
through some of his videos when I was learning about OpenGL graphics programming when I
was taught by Robert Lamb. Just a fun fact.

[neumont]: https://www.neumont.edu/
