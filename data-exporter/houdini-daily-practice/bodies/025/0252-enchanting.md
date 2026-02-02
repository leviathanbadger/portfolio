### Enchanting

This is the twenty-second prompt of the [Nodevember 2025](https://www.nodevember-2025.com/),
"Enchanting".

I'll return to the 2024 prompts later, but since I skipped nodevember this year in
favor of writing 30k words in November, I'm going to go to the 2025 prompts and do
the 2024 prompts later.

I've been having difficulty returning to practice lately, and I eventually realized
that in part it's because I'm getting paralyzed by how much work it is to do a single
daily practice. So I'm going to limit myself to 2 hours per practice to make it easier to
get started and finish each day. I don't necessarily expect this to work very well,
because I'm a perfectionist, but it's worth a try.

This one took about 5-6 hours, which seems like a lot (...and it is) but that's largely
because I've never touched the POPs context before. Even though I thought this particle
simulation would be simple and an easy way to learn, it turns out there were quite a few
problems with the default settings (...at least for this particular scene.)

1. The POPs context uses VDB collisions by default, but there's no error or warning when
   you try to use a surface for collisions. I wasted a bunch of time trying to fix this.
2. The particles here are moving way too fast for efficient motion blur, so I had to divide
   each frame into many substeps and learn the 'Spark Trail' recipe (combination of 'retime'
   and 'particle trail' SOPs) to convert the particle life to a curve instead of a point.
   The substeps were necessary so that the collisions with the floor look like a bounce
   instead of a weird curve.
3. The POPs context is weird, and you have to put the collider and gravity force in strange
   places that still don't make sense to me.
4. This render required a lot of animated geometry properties to make the portal surface blur
   and fade from one input to another. I ended up using an output AOV to drive parts of this
   in a slap comp instead of in the actual render.

The HDRIs (both of them, for the street and the pier) are from [PolyHaven](https://polyhaven.com/).
