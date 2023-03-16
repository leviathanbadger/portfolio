### Mardini 2023 - Reflect

Today is day 22 of [Mardini 2023][mardini-2023]. The prompt for today is "reflect".

I've had today's image in mind for several weeks, almost since the beginning of the month.
Several other projects (especially this week) were altered in order to prepare for it,
because I knew this one would be a technical challenge unless I broke it up and learned
how to do different parts of it earlier.

It _did_ help, although the end result ended up being significantly less complex than I
originally imagined. The idea was to model an entire fair, not just a ferris wheel.
I was going to add several other rides; Christmas lights or langerns strung up on poles
along the dock; blocked out buildings for other carnival shops and attractions; more
carefully art-directed people, with some people _in_ the ferris wheel cars instead
of just placed randomly around its base.

The reason most of this complexity was removed should be obvious. Lack of time. Aside
from that, I'm still having some issues getting emissive lights to work as I want them
to in a render, so the colors I could choose from were significantly reduced.

The lake/river water geometry was produced using the "Ripple" SOP, which I've never
used before. There's also a ripple solver that I didn't know about that I could use
in a future update if I wanted to make this an animation (with the ferris wheel
actually spinning, for example) - but that's overkill for my use case.

I've mentioned that the lighting in this scene is done through emissive geometry. In
this case I could _maybe_ have used a ton of point lights, but I'd have to figure out
how to instace lights in Solaris, and it wouldn't be as accurate. That said... the
light from the emissive geometry is sadly lacking intensity, and I still haven't figured
out how best to use emissive lights. So while I like the end result, it's not what
I had originally planned it to look like.

Lastly, the light pollution in the background (behind the mountains) was accomplished
using COPs.

<!-- My entry post is [here][entry-post]. -->

[mardini-2023]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2023/
<!-- [entry-post]: ... -->
