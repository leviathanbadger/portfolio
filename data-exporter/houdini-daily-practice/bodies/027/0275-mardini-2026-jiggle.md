### Mardini 2026 - Jiggle

Today is day 12 of [Mardini 2026][mardini-2026]. The prompt for today is "Jiggle".

It's a lava lamp. It *sort* of fits the 'jiggle' prompt. Either way, this project
was the idea I had for today that I was most excited by.

New stuff:

- FLIP simulation with surface tension and viscosity, no gravity, arbitrary forces
  (attempting to stir up the blobs in a natural way with a noise field).
    - I could have made this an animation, but this type of frame is incredibly
      expensive to render, and the FLIP sim has about 3000 frames because its
      motion is very slow.
    - Also: despite my attempts to create natural movement and separation, the
      magic numbers I chose just created a single amorphous blob in the center of
      the lamp within about 5 seconds. I could have continue to fiddle with the
      numbers and try different things, but not with my time constraints.
- More practice with dielectric priority, this time with volumes involved.
- Emissive lighting from within nested dielectrics. Emissive lighting from volumes.
- (Attempted to) use the bokeh parameters in the Karma Lens Shader. I don't know if
  I did anything wrong, but I suspect this scene is wrong for it because the only
  out-of-focus things are already very diffuse because of rough reflections, and
  they're pretty close to the camera anyway.
- Light Linker LOP to light under lava blobs from contributing to anything else
  (except indirectly). This helps prevent ugly light reflections in the lamp glass
  that in a real lava lamp would be cleverly hidden in the base with an alcove and
  mirrors (and, in general, engineering.)

My entry post is [here][entry-post].

[mardini-2026]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2026/
[entry-post]: https://www.sidefx.com/forum/topic/103329/?page=1#post-455495
