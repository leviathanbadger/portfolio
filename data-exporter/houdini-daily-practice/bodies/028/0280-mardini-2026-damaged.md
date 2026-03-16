### Mardini 2026 - Damaged

Today is day 17 of [Mardini 2026][mardini-2026]. The prompt for today is "Damaged".

Only got one practice done today, but I actually like it, unlike the last two
practices. I did have to reduce scope, even so. Animations are always rough to
begin with.

New stuff:

- Grunge Rust COP. I actually didn't end up using it directly, because it generates
  a 2D noise and I needed it in 3D space. But I copied the node internals and
  created a rough equivalent using 3D noise nodes instead.
- Radioactive symbol decal on barrel created procedurally using Wrangle COP and
  math. (Simple trigonometry.)
    - Resample COP both before and after to antialias this.
- MPM solver with viscous liquid. I did use this once before for the
  ['honey' practice](https://brandonslade.me/houdini-practice/241) back in January,
  but this time I fine-tuned the material to be more liquid, and with noise to
  adjust the viscosity for different parts of the fluid. The intention was to
  create a pouring animation that feels off-kilter or slightly wrong, but I won't
  know if it worked until I finish rendering.
- Emissive properties of the radioactive sludge are different for primary rays
  (directly visible to the camera) versus reflections/etc. It's only a little
  visible here, because I had to cut the scope down. Originally the barrel was
  going to spill into a lab-like room with a lot of other surfaces to reflect the
  sludge or otherwise catch the light.
- First time using the Labs Curve Resample by Density SOP.
- Only the second or third time using the Inflate SOP. This time I used it directly
  for modeling the ribs on the barrel, instead of deintersecting geometry that's
  imprecise by design (see clay material from the
  ['miniature' practice](https://brandonslade.me/houdini-practice/269) earlier this
  month).
- Camera motion rig with Look at Constraint LOP and XForm Edit LOP. Again, I've done
  this before, but not for a while and I need to get in the habit whenever I have an
  animation with a movable camera.
    - This time I animated the focus distance, although the F-stop is high enough
      that you may not see it. Low F-stop might have looked better in still, but I
      thought it'd look weird animated.

My entry post is [here][entry-post].

[mardini-2026]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2026/
[entry-post]: https://www.sidefx.com/forum/topic/103365/?page=1#post-455971
