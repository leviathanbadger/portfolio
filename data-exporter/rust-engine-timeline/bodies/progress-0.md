### First Rendered Output!

Huzzah!

It took over two weeks to get here. I knew it would be a while, because it takes a
long time even in OpenGL, and Vulkan is theoretically lower-level still. Additionally,
I have little to no experience with Rust.

That said, I was basically just following along with the Rust-Vulkan tutorial
[here][rust-vulkan-tutorial]. I was going slow because I want to make sure I understand
everything that I'm doing. (Otherwise, what's the point?) A lot of the extra time was
spent overcoming issues with Rust whenever I tried to refactor things on my own - usually
because of the borrow or lifetime checker, which I already hate. As much as they _might_
prevent a class of bugs at some point in the future, for _now_ they're just preventing
a whole lot of code that would be valid in any other programming language.

Note that even though I have Vulkan clearing the framebuffer, there are a lot of validation
errors in the console due to synchronization issues. Looking ahead at the tutorial, that's
the next thing to fix.

Additionally, resizing or minimizing the window crashes the app, because the swapchain becomes
outdated and I don't handle it gracefully. The Rust-Vulkan tutorial will get to it soon,
I'm sure.

[rust-vulkan-tutorial]: https://kylemayes.github.io/vulkanalia/
