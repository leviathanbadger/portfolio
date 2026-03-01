### Mardini 2026 - Aquatic

Today is day 3 of [Mardini 2026][mardini-2026]. The prompt for today is "Aquatic".

It's a fishbowl. But without any fish, because I have to cut scope somewhere. How aquatic.

New stuff:

- VDB/volume modeling practice for fishbowl and rocks.
- RBD sim with 3000+ rocks using proxy and high-res geometry.
- Dielectric priority for nested transmissive materials.
- I added a GOBO light filter to restrict outside light to a window shape, but the
  refraction caused a lot of the fishbowl to default to black because there's no
  geometry to collect light in those other directions. So I disabled it.
- I also attempted to use caustics, but the render turned out very differently, and not
  better. I have no idea why or how I can fix it. This is not the first time I've been
  foiled by caustics because enabling it creates a vastly different result than not having
  it enabled does.

Note: HDRI and wood material are from GreyscaleGorilla.

My entry post is [here][entry-post].

[mardini-2026]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2026/
[entry-post]: https://www.sidefx.com/forum/topic/103245/?page=1#post-454331
