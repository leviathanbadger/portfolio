### Mardini 2023 - Mud

Today is day 7 of [Mardini 2023][mardini-2023]. The prompt for today is "mud".

I struggled to come up with a response to this prompt. The only thing I could think of
was a mudslide, but I'm not confident I can make a mudslide that actually looks good.
Eventually I thought of a footprint in mud, and then somehow I remembered the Sherlock
Holmes quote "the game is afoot", wherein he makes up the word "afoot".

Somehow that turned into this.

I tried to use a Vellum simulation for the mud, but the particles needed to be too fine
to take on the footprint, and each frame was taking 5+ minutes to simulate, and the
viscosity parameter didn't work well when the particles were that small anyway. So I
used the Vellum sim to get a general shape, then used a boolean subtract to get more
fine detail on the footprint.

I played with COPs in this project in a way that I haven't done before. I wanted the
output image to be sharp within the magnifying glass but blurry outside of it, which
isn't really possible with raytracing. So... I render the image twice, once with a low
f-stop and a bright green shader for the glass, and again with no depth of field and
a real glass shader. Then I used the COPnet to combine the images with a "chromakey"
node and composite text on top of everything. All of this (the rendering & compositing)
was done using PDG/TOPs.

<!-- My entry post is [here][entry-post]. -->

[mardini-2023]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2023/
<!-- [entry-post]: ... -->
