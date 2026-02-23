### Orc Temple

Instead of continuing an existing project, I'm going back to the
[Nodevember 2024][nodevember-2024] prompts. Although the prompts are meant to be completed
in two days, I'm taking a more leisurely approach and spending a week on each prompt to
ensure I don't burn myself out practicing while working full-time. This is the first day of
the second prompt, "Orc Temple". Since Mardini 2026 is theoretically starting in just over
a week, I only really have time for this one prompt beforehand.

Since it's a week-long project, I don't mind greyboxing a bit. I'm getting the big-picture
items in the scene before I refine them iteratively each successive day.

New stuff:

- Component Builder (write out component geometry, proxy geometry, component and proxy
  materials, render properties, etc. to .usd files and import them later directly from file.
  This significantly improves the editor performance when making scene changes because it
  doesn't need to rebake meshes as often.)
- Normal map - I've probably done this at some point in the past, but it's been long enough
  I had to relearn it. And to be fair, I usually use a displacement map instead.
- (Attempt to) use the ripple solver. I wanted to make physically-accurate ripples according
  to some wind direction, with collisions on the cliff/shore/temple pillars instead of just
  using a noise pattern for the lake surface; but that proved to be out of scope for today.
  I'll have to do more research on it and do it on a later day. Either way, I did try to use
  it, even if the attempt was scrapped for today.
- Automatic wet map based on world position and water height. This actually probably isn't
  very obvious from just looking, but the ground, cliff, and pillars have to have a darker
  diffuse color and less rough specular anywhere that's below the water level, or the
  'water' looks like a big glass or plastic block instead of water. Luckily, here I can fake
  a wetmap using the world Y coordinate and a parameter-driven water height.
- Volume-based water absorption. I've technically tried this before, but not for a lake with
  a clear surface. I've tried to make lakes before, and they're... really hard. Hopefully
  this one looks better.
- Driving materials with inherited primvars, created with the Configure Property LOP and
  Edit Property LOP. Specifically, the water level is driven by a primvar, and many of the
  materials read it to adjust their behavior.
- Depth-based distance desaturation. It's not really visible in this shot, because almost
  everything is in the foreground; but I'm trying a new thing to subtly indicate depth by
  slightly desaturating distant objects to mimic energy loss via atmosphere. I ramped up the
  effect when I was making it until it was visible in this scene, but then I adjusted the
  parameters to what I expect to be used once I have a distant horizon.

[nodevember-2024]: https://nodevember.io/prompts/2024
