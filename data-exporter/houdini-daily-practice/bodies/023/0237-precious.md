### Precious

This is the seventh prompt of the [Nodevember 2025](https://www.nodevember-2025.com/),
"Precious".

I'll return to the 2024 prompts later, but since I skipped nodevember this year in
favor of writing 30k words in November, I'm going to go to the 2025 prompts and do
the 2024 prompts later.

I've been having difficulty returning to practice lately, and I eventually realized
that in part it's because I'm getting paralyzed by how much work it is to do a single
daily practice. So I'm going to limit myself to 2 hours per practice to make it easier to
get started and finish each day. I don't necessarily expect this to work very well,
because I'm a perfectionist, but it's worth a try.

This one took about 3.5 hours. Longer than I expected, partly because I wanted to make
all of the common D&D dice (and I still had to give up on the D4 and D10 because of the
nonstandard numerals on the D4 and the 'pentagonal trapezohedron' faces on the D10). I
was careful about trying to get the numbers on the correct faces, but I wasn't too
careful about orienting the text correctly. I also didn't have time to size the different
dice consistently so, for example, the D20s are kinda gigantic compared to the rest.

The dice are created in an HDA, so I can easily add variation, but I didn't have time to
do more than a slight bit of variation in terms of numeral color and edge bevel. I'd have
loved to have more than just the mostly translucent dice body, and maybe I'll eventually
come back to implement this since the framework is already mostly in place.

I ran a simulation on a bunch of dice to get them to fall naturally, which took a huge
chunk of time because I still don't really understand the RBD bullet solver despite using
it many times. Worse, I ended up throwing out the result except for the last frame because
even in slower playback I could tell that the simulation had... issues... with jitter and
getting all of the dice to settle.

That said, the final render isn't bad. The lack of variation in the dice is annoying to
me, but this is one of the first renders I've done with some very nice, clean caustics
(light refraction through an object causing concentrated light rather than just a shadow).

Parts of the render I didn't make:

  - Because of transmissive/translucent materials:
    - Again, the wood surface on the ground plane is from the Houdini catalog.
    - Again, the lighting is from
      [an HDRI I found](https://polyhaven.com/a/christmas_photo_studio_01) from PolyHaven.
