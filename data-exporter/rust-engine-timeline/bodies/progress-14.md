### HDR Engine Support and Tonemapping

This screenshot will look ugly. I _know._ That's because the window is rendering to
HDR now, for a 10-bits per color component HDR screen, but taking a screenshot clamps
the colors (without tonemapping) back down to 8-bits per color component for an SRGB
screenshot.

Which is obviously going to mess up the output.

This looks good on my HDR screen, I promise. That said, I barely understand HDR
tonemapping and the techniques involved here, even after days of research on the
topic, so I'll probably put HDR support on hold for a bit and focus on SRGB for a
while.

In the meantime, [here's][tonemapping] a helpful resource regarding tonemapping, and
[here's][hdr] one for HDR outputs. [Here's][nvidia-hdr] a more technical overview
regarding HDR by NVidia.

[tonemapping]: https://64.github.io/tonemapping/
[hdr]: https://learnopengl.com/Advanced-Lighting/HDR
[nvidia-hdr]: https://developer.nvidia.com/sites/default/files/akamai/gameworks/hdr/UHDColorForGames.pdf
