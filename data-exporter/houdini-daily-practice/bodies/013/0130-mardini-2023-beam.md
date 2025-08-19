### Mardini 2023 - Beam

Today is day 25 of [Mardini 2023][mardini-2023]. The prompt for today is "beam".

My first impulse was to do an animated light show, but I quickly thought better of that
when I realized that rendering that would involve very fine volumetric fog with many
very narrow spot lights - and not just once, but for hundreds of frames. IF the last
few days of practice have taught me anything, it's that complex lighting and volumetric
fog scenarios are _extremely_ expensive to render. It doesn't help that most volumes
don't render correctly in the XPU renderer. (Expectedly, because it's in beta.)

So I simplified the idea, and decided to model and render a lighthouse, shining a bright
spotlight through foggy night. This works better because I don't have to animate it
(although I can if I want to) and can only render a few frames; and also because the
volumentric fog doesn't have to have quite as high a resolution, because there's only
one beam of light, and it has a much more broad beam.

Also, in this practice I used the "Volume Distort" SOP for the first time to create
the rock formations, displacing it with noise. The general shapes were first created
using metaballs scattered randomly in a volume.

Although I did not have to create a wave simulation (there's a pretty simple ocean
tool that will create it without simulating it to get a "close enough" look) I wanted
to learn how to simulate and render an ocean. So, I also created an ocean simulation
using the "wave tank" shelf tool, along with whitewater using "whitewater" shelf tool.
The scope creep is real. This part didn't turn out great if you focus on the shape of
the ocean overall, although individual details can look great. For some reason the
simulation created some _very_ weird artifacts (like water suddenly appearing dozens
of meters in the air above rocks, or the water level being several meters lower under
the rocks than it is around them.) Still, for a first attempt it's not bad.

The default ocean renderer worked out of the box without customization... for the most
part. Unfortunately it has a few pretty noticeable artifacts on one of the day renders.
Even the whitewater looks fine, although I didn't assign it a material. Not sure how
that works. That said, rendering it the way I usually do in TOPs did _not_ work out.
The ocean rendered completely differently, without the whitewater and seemingly without
volumetrics. Presumably it's using the preview shader. I don't know how to fix it,
so I'm manually triggering renders.

Each frame takes 15-40 minutes to render. Less for daytime shots (although the ocean
_is_ a complex volume so it's still expensive to render), and more for night because it
still has to render the ocean, but now it also has to render the fog. Especially at
night, indirect volumetric lighting is _extremely_ noisy, so I'm mitigating that by
rendering in 4k with a denoiser, then using Photoshop to downsample to 1080p. This
minimizes the artifacts from both the noise and the denoiser without having to
massively increase the primary samples (rays per pixel).

My entry post is [here][entry-post].

[mardini-2023]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2023/
[entry-post]: https://www.sidefx.com/forum/topic/89530/?page=1#post-388368
