### Instanced Rendering

There was actually quite a bit of refactoring done between the last screenshot (motion blur)
and this one. The visible, obvious feature added was the ability to have instanced rendering.
Here I'm rendering a couple hundred marbles, each with distinct transformations and colors,
using a single draw call.

In part, I extracted most of the render code from the scene and game object abstraction,
with the intention of eventually moving the render itself into another thread and allow the
engine to better take advantage of multiple threads. That's a long-term goal, but the
refactor is helpful now, because I know I'll need it eventually and this forces me to
come up with a better way of representing the render data decoupled from the game state.

Aside from that, I also split the original render pass again, so now there are three render
passes.

First, I write to the motion vector and depth buffers, but no color. This is because writing
these fragments are relatively cheap, and because the motion vector buffer needs additional
info to render that's mostly useless in every other render step. So I can get the cheapest
and most specialized render passes done first, without adding expensive lighting calculations
or texture lookups.

Second, I write the color buffer, but not the depth buffer. Because the depth buffer is
pre-written, I can use it to drop fragments early, and massively speed up the render because
I can skip lighting calculations for most of the fragments which will later be occluded.

Third, the postprocessing step remains the same.

This structure was heavily influenced by the [Doom 2016 Graphics Study][doom-2016-study]
blog post by Adrian Courrèges.

[doom-2016-study]: https://www.adriancourreges.com/blog/2016/09/09/doom-2016-graphics-study/
