### Mardini 2023 - Rural

Today is day 29 of [Mardini 2023][mardini-2023]. The prompt for today is "rural".

My first idea was to create a barn, but that sounds pretty boring. So instead I created
a wind turbine, which also ended up being pretty boring. And frankly, it also looks
a little ugly. At least I got to try a few new things.

First of all, I recently learned about the "sky environment map" COPs node, which can
be used to procedurally create a sky map for use in a dome light (or environment light).
Even so, that's not much use without another feature I recently learned about: the
"Render Light Geometry" setting in solaris dome light LOP. This is something I've been
looking for for a while, but I guess I didn't use the correct terms to search when I
looked for it previously. The option is relatively hidden. Basically it allowed me to
render the sky map as the background of the render, as if it were an infinitely large
sphere. So the sky is prettier in this render than most of my previous ones, and it
didn't require COPs to composite the image and the sky post-render. (Although I did
use COPs to generate the sky map prior to the render... still a better workflow IMO.)

I also used various heightfield options that I've touched on before but never seriously
used. The heightfield mask, wrangle, and scatter SOPs. I used them... although the
results themselves are somewhat lacking. I blame the ridiculous scale of the wind
turbines for making everything else look ridiculous by comparison. I could have played
around with it more, added a variety of plants, trees, and bushes for example, but
I'm about out of credits for downloading models from textures.com for the month and
I didn't feel like spending lots of time modeling them.

Lastly, I played around with motion blur in Karma again, but this time with "computed
motion" and a manual shutter speed, where previously I computed the velocity in SOPs.
This was a pretty quick and easy way to generate motion blur, I'll definitely use it
again in future projects.

Only two more days in Mardini. I'm expecting both of the next projects to be difficult.
So it's probably fair to expect poor to middling results for them as well. We'll see.

<!-- My entry post is [here][entry-post]. -->

[mardini-2023]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2023/
<!-- [entry-post]: ... -->
