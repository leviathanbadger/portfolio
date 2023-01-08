### OBJ Loading Blooper

Following along with the Rust-Vulkan tutorial to be able to load OBJ models for rendering.
I thought it worked at first, when I used the OBJ file provided in the tutorial; however,
when I used my own the UVs for the model are completely messed up.

I eventually figured it out. The OBJ loading library changed default behaviors since the
tutorial was written, and the sample model only works coincidentally. The correctly-rendered
model is visible in a later screenshot.

The model used here is one I created for one of my Houdini daily practices, by the way. You
can find it [here][die-model].

[die-model]: https://brandonslade.me/houdini-practice/95
