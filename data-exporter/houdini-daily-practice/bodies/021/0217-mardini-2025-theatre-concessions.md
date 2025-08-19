### Mardini 2025 - Theatre Concessions

Today is day 25 of [Mardini 2025][mardini-2025]. The prompt for today is "FLOOD",
in the DOPS category.

I was very excited for this project, which is a good thing in one sense because I
knew it would be challenging and I need the motivation to do it right. However, it
also got me excited for a great result that's basically not possible to achieve
with my current level of expertise, at least not in about a day's worth of work.

The double-simulation (RBD for the ice cubes, FLIP for the liquid) was problematic
because realistically the simulations _should_ interact with each other. The liquid
sim obviously has to use the ice cubes as collision geometry, and the RBD sim should
use the liquid sim to help drive motion (from water pressure) and buoyancy (from
submersion). Rather than attempting to do that, however, I ran the RBD sim
independently, and useed a keyframed control to drive the "water level" for a
heuristic buoyancy. I didn't try to drive ice cube movements with the liquid
velocity.

This approacth is easier; however, it also has the problem that I had to guess
what the water level would be over time before I ran the water sim, or the
buoyancy would raise the ice cubes before or after the actual water level changed.
If too early, then the water sim fills in under the ice cubes and they look like
they're floating _way_ out of the water; if too late, then the ice cubes remain
sunk and respond sluggishly. But because the FLIP sim takes forever to generate,
and changing any FLIP sim properties drastically changes how it runs, I had
to iteratively change the keyframed buoyancy level, rerun the RBD sim, then rerun
the FLIP sim to see the result. I did this 5-6 times yesterday.

Finally, I got a result that I liked and I was excited to render it, but... I hit
a wall in attempting to generate a good material for the soda. The problem is
the liquid behaves like a volume and a solid; a solid because the liquid has
a clearly defined surface with sharp reflections and refractions, and a volume
because soda is actually very transparent, but absorbs more and more light the
farther it has to travel though it. I tried several things, but after the
practice took me past midnight for the second day in a row I gave up. I picked
a frame that looks "good enough" with a compromised soda material, and
rendered a still without attempting to render the full animation.

In the future, I want to come back and:

  1. Fix the soda material so it actually looks like soda, and not a vaguely
     brown pane of glass.
  2. Properly weave the simulations together, instead of using a keyframed water
     water level for a heuristic buoyancy.
  3. Add more bubbles and subsurface detail (cracks/etc.) to the ice cubes. I
     have some bubbles, but they're too small/infrequent to be seen in most cases.
  4. Add rising bubbles/fizz to soda sim. Not even sure how to do this, but it's
     another major part of why the soda looks weird.
  5. Like the dominos project, add collision-driven sound effects.
  6. Improve the backdrop/use an HDRI so that the reflections and refractions
     can display more detail, instead of just the weird blue/white in the crap
     I slapped together at EOD yesterday for final render.

New stuff:

  - Timed awakening and conditional collisions in RBD sim. In the past I've
    pretended this by starting
  - Heuristic SOP-driven buoyancy force in RBD sim.
  - Retime SOP (distinct from Time Shift SOP, which I've used many times) to generate
    interpolated subframes after the RBD simulation without risking the simulation
    result changing by adding substeps to the solver itself.
  - Multiple simulations (RBD for ice cubes, FLIP for water sim.)
  - Disabling narrow band and reseeding in the FLIP solver. This was necessary because
    it's a very high-resolution FLIP simulation with a thick (for the resolution) pool
    of liquid, so the water pressure was constantly driving the particles out of the
    narrow band and losing water volume over time, without it draining anywhere.
    The cached ~200 frames of water simulation take up almost 40 GB of space on my
    external hard drive.
  - This is the second time I've used the "dielectric priority" render setting
    to enable rendering multiple translucent objects that intersect with each other.
    This one turned out better, despite my problems with the soda material.

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[entry-post]: https://www.sidefx.com/forum/topic/100276/?page=1#post-441600
