### "Wet Floor" Sign

I didn't have much time today, so I modeled a "wet floor" sign.
It was a fairly simple thing to model, although I did have a bit
of trouble with the render. That's because only part of the model
needed a texture, and I wasn't sure how to render a decal texture
instead of a repeating texture.

After that I had some difficulties with the UVs before I realized
that the problems were related to a bug in the XPU renderer (it
_is_ in alpha still) that was distorting the UVs for the mesh
I was attempting to render. Switching to a CPU renderer solved
that (although it also increased the render time from 30s to 30m).

Overall a successful experiment, even if it's not groundbreaking
or incredibly fancy.
