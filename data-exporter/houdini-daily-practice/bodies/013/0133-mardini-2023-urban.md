### Mardini 2023 - Urban

Today is day 28 of [Mardini 2023][mardini-2023]. The prompt for today is "urban".

For a lot of this practice I was following along with a tutorial Houdini just released
going into detail about how to use TOPs to procedurally generate a large-scale city.
Of course I added my own efforts to it, so it isn't entirely derivative.

1. The city plan is procedurally created, rather than being traced from a top-down/
   satellite view of a city section.
2. The block sizes are much closer to the actual size of blocks in big cities. I think
   it looks better, but the tradeoff is a massive increase in triangle count. (over 8
   million triangles for this scene.)
3. The skyscrapers don't just shoot straight up. Or at least, they don't _necessarily_
   shoot straight up. Many of them have fatter bases and skinnier tops, with the
   portion of the building extruded selected procedurally. I think this gives it a
   nice profile and looks better than simple cube shapes.

All of that said, the tutorial videos are a series of 11 videos, and I only watched
the first 7. (I do want to finish the series, but first I have to finish Mardini.)

I'm not happy with the end result, but only because I know I can do better. I just
have to move on because I'm short on time. But I intend to come back later to do
at least this much:

* Add UVs and textures to everything, so it's not all just a single color.
* Increase variety of building material and construction style. Lots of skyscrapers
  aren't the boring-*** business variety seen here. And even when they are, they
  typically have more than a _flat_ roof.
* Fix the artifact visible in one of the buildings in the middle distance.
* Add procedural decorations on the roof. Roof entrances, helipads, AC units, etc.
* Improve city plan generation; include parks, rivers, streets, bridges, monorail,
  etc.
* Populate the streets with pedestrians, cars, trucks, etc.
* Switch the HDRI texture used so you don't see a vaguely-reflected tree in the
  windows. It wouldn't be so bad if the camera was at ground level, but from this
  angle it looks like there's a giant tree (possibly taller than the skyscrapers)
  just off camera to the right. I "fixed" it quickly for this render by just
  increasing specular roughness. You still see a blob of green, but at least it
  doesn't ruin the scale of the shot.
* Mess with the render settings, textures, and materials a _lot_ more. I just threw
  it together for this one.

My entry post is [here][entry-post].

[mardini-2023]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2023/
[entry-post]: https://www.sidefx.com/forum/topic/89588/?page=1#post-388712
