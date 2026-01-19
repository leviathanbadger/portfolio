### Rocket

This is the eighteenth prompt of the [Nodevember 2025](https://www.nodevember-2025.com/),
"Rocket".

I'll return to the 2024 prompts later, but since I skipped nodevember this year in
favor of writing 30k words in November, I'm going to go to the 2025 prompts and do
the 2024 prompts later.

I've been having difficulty returning to practice lately, and I eventually realized
that in part it's because I'm getting paralyzed by how much work it is to do a single
daily practice. So I'm going to limit myself to 2 hours per practice to make it easier to
get started and finish each day. I don't necessarily expect this to work very well,
because I'm a perfectionist, but it's worth a try.

Originally I planned to model the 'Hail Mary' from Project Hail Mary, as seen in the
movie trailers for the film coming out in March. But I decided while preparing that I'm
more interested in attempting to do another shot from the trailer, a close-up of the sun.
It's not a rocket, but it *is* in space. And it has an awesome fiery fusion reaction.
Which is almost the same thing, if you think about it while squinting your mind a bit.
No, no, don't try too hard, you'll hurt yourself.

> The sun is dying.
>
> - Lots of very worried people living on Earth.

That's enough spoilers. (Really, though, you find out this much basically in chapter
one. It's the premise, not a plot twist. Stop complaining.)

Rendering this is a bit challenging for two main reasons.

1. First, the solar flares. Instead of trying to custom-make a pyro simulation to set
that up, I went for a noise-generated fog volume that I render as smoke/fog and pretend
it's the solar flares.
2. Second, the constancy. I'm going for an animation; mostly just slow-rotating around
the sun so the stars move with parallax and you can see how the custom fog volume catches
the light differently on different points in the volume. But I wanted the sun itself to
have some motion, and the COPs noise nodes I used to generate the temperature map of the
sun didn't have an input for the time (and I couldn't easily finangle one because it only
supports a 3D input, which would be the world-space position.) I have a partial solution,
but I guess I won't actually know how it looks until it finishes rendering.

Another thing to note, I downloaded the outer space/nebula HDRI from
[here](https://www.spacespheremaps.com/hdr-spheremaps/).
