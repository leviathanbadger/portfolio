### Separate Render and Postprocessing Passes

Quite a bit of work went into supporting this functionality. The ultimate goal, and the reason
for starting this effort, is actually to decouple the render resolution from the output
resolution. Eventually I want to use DLSS2 or FSR2 to accomplish temporal upscaling for this;
however, as there's quite a bit of work still to do before I can attempt that, for now I'm
still going to render at the same resolution as the output image. I just want to make sure
that there's nothing _technically_ coupling the render pass attachments to the window resolution
via the swapchain.

Eventually, this will mean I can dynamically scale the render resolution and upscale to the
output resolution later. Also it means that eventually resizing the window doesn't need to
recreate the depth buffer or other render pass attachments, which should make resizing the
window a much less expensive operation. But for now... it means neither of those things.

So... there are now _two_ render passes, not just one. The first pass renders things as normal,
but to a separate image and depth buffer that aren't necessarily the same resolution or format
as the swapchain. The second takes the image rendered to in the previous pass and renders it
to a window-sized 2D quad. The shader I used also applies a distortion effect based on the
screen coordinates, just to prove that it's working.

The model used here is one I created for one of my Houdini daily practices. You can find it
[here][die-model].

[die-model]: https://brandonslade.me/houdini-practice/95
