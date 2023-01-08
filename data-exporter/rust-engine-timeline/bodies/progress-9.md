### Motion Vector Attachment & Motion Blur

This is mostly self-explanatory. I created a motion-vector attachment and write to it at the
same time as the color and depth in the first render pass. Then, in the postprocessing render
pass, I take the color and motion vector together to simulate motion blur. This is a mostly
naive implementation of motion blur, but the main reason for working on it was to get the
motion vector anyway, since I need it to support DLSS2 or FSR2 once I work on that.

The model used here is one I created for one of my Houdini daily practices. You can find it
[here][die-model].

[die-model]: https://brandonslade.me/houdini-practice/95
