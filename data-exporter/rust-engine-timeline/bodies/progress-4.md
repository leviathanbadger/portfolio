### Textured Cube Rendered

Firstly, the cube is now rendered using indices, so the amount of memory that
has to be used to store vertex data is significantly reduced (at least, for large
models with many shared vertices.)

Secondly, although you can't really tell by the screenshot, there's now a depth
buffer attachment for the render pass so that fragments are occluded based on distance
from the camera, instead of the render order.

Thirdly, the engine startup code is refactored significantly, to the point where large
portions of it aren't really recognizable from the Rust Vulkan tutorial any more. I'm
proud of this, although I'm not super happy with the exact abstraction I chose for it.
After refactoring and adding various other features, it's become clear that the
behavior I chose is too opinionated. I'll probably eventually refactor this again,
or at least rename the abstraction so it can be reused in other contexts without it
looking weird. For now it's fine.

Fourthly, there's now a _very_ simple scene abstraction, along with an entity-component
system. This is particularly hairy, because Rust doesn't allow me to abstract this the
way that I want, and I'm not sure what the idiomatic way to do it in Rust would be.

Finally... and this is the _only_ change made that's visible in the screenshot... a
single texture is loaded from the disk, passed into GPU memory, and exposed to the
fragment shader using a COMBINED_IMAGE_SAMPLER descriptor, so that I can now render my
cube with a texture, rather than just a solid color. Phew. Lots of work for just that.

As a side note, there is no multithreading in my engine still. I'll add multithreaded
resource loading in the near future, but there's no way I'm multithreading the core
gameplay/render loop itself until I'm much more familiar with both Vulkan and Rust.
