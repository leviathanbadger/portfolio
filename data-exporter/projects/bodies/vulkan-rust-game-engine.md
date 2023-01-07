### Vulkan-Rust Game Engine

This game engine was started in late 2022, after I decided to take a few months hiatus from work
in order to relax, recover from burn out, and work on personal projects again after spending
so long without doing so.

In the past I'd written several game engines using OpenGL (or variants such as WebGL), written in
C++ (or Typescript). A few of these, as well as related projects, are also included in this portfolio
site. ([OpenGL/CPP][opengl-cpp-engine], [WebGL/TypeScript][webgl-ts-engine]) I even built and
published a game (named [Collide][collide-game]) to Steam with a friend using the WebGL engine
at one point.

However, all of that was done years ago, during or before school. Frankly, OpenGL was on its way out
even then. Since then, the graphics and gaming technologies on offer have massively increased, and
I had never had a chance to play with them. Hence my desire to learn to use Vulkan.

My reason for learning Rust at the same time is because it's just always been something I've wanted
to learn, but I've never had a good reason to learn it before. There are always better tools and
technologies to pick that I'm more familiar with or that are more suited to the job. Since I'm
already starting a difficult project, I thought it would make sense to make it more difficult
still by building it in a completely new (to me) language, one which is notoriously annoying to
learn due to its borrow and lifetime checkers.

And so you have it. Those are the high-level goals of the engine.

### Engine structure

The engine itself is planned to be highly opinionated. I am drawing inspiration from
the graphics study blog posts for [Doom 2016][doom-2016-graphics-study] and
[Doom Eternal][doom-eternal-graphics-study]. Both are excellent reads by the way, they show what's
technically possible with this technology, in a way that's actually in use in triple-A projects.

My engine is planned to be fully forward-rendered, although it will have three passes. (Only
three for now, there may be more later.)

1. The first pass writes the depth buffer and motion vector buffer, but no color (so I can ignore
   lighting and other expensive fragment computations.) This trick is taken directly from the
   aforementioned graphics studies.
2. The second pass renders color, using the pre-written depth buffer to drop fragments early
   (depth test = equals). This is where lighting is computed, although for now I'm just using
   the blinn-phong lighting model from a single directional light. No physically-based rendering
   or shadows yet.
3. Third pass is post-processing. I color-correct, tone-map, upscale, add simple motion blur
   using the motion vectors captured in the first pass, etc. and finally write to the swapchain.

At the moment I'm also not doing anything fancy to optimize the render, other than pre-writing
the depth fragment in the first pass. I'm not culling any geometry based on the camera frustum
or any other metric. I'm not even reducing the render resolution, even though the third pass
would nominally (if naively) upscale the rendered image if it were rendered at a lower resolution.

Also, again, the lighting is done exclusively with blinn-phong lighting via an ambient light
color and a single directional light. There is no PBR, lighting, ambient occlusion, reflection
or refraction, or anything else to justify separating the color and lighting pass from the
depth and motion pass. That's just planning for the future.

I do have very simple instanced rendering working, as seen in the bowl of marbles screenshot.
There isn't a great abstraction around it currently, but at least the render pipeline supports it.

### Stretch goals

I do have several stretch goals that I'll get to (or not) depending on how much time I invest in
this project, and whether or not I get stalled on certain aspects of it.

* Learn about (and add support for) mastering content in HDR - partially completed, in progress.
* Learn about (and add support for) temporal super-sampling using DLSS2 or FSR2 - not started,
  the HDR and motion vector components need to be completed first, but I'm planning to start on
  this soon.
* Learn about (and add support for) physically-based rendering - not started. Currently the project
  just uses the blinn-phong lighting model, from a single directional light, because that's the math
  I'm already familiar with.
* Learn about (and add support for) ray tracing or path tracing functionality - not started.
* Add support for additional low-level graphics APIs, such as DirectX or WebGPU. This is a _super_
  stretch goal, meaning I'll probably never do it, although I'm trying to keep it in mind to a
  degree as I architect the engine. Not started.

[opengl-cpp-engine]: https://brandonslade.me/projects/opengl-game-engine
[webgl-ts-engine]: https://brandonslade.me/projects/html5-game-engine
[collide-game]: https://brandonslade.me/projects/collide-game
[doom-2016-graphics-study]: https://www.adriancourreges.com/blog/2016/09/09/doom-2016-graphics-study/
[doom-eternal-graphics-study]: https://simoncoenen.com/blog/programming/graphics/DoomEternalStudy
