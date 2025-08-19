### Mardini 2025 - Engraved Table

Today is day 2 of [Mardini 2025][mardini-2025]. The prompt for today is "FURNITURE",
in the SOPS category.

For today I modeled a fancy dining room table with engravings. The table itself I modeled
fairly quickly; apparently I'm getting pretty good with many of the SOPS modeling tools,
if only in relation to boxy shapes with (at most) simple curves. The engravings, however,
I wanted to do with copernicus, both because a heightmap is a more efficient way to do it,
and because I have been trying to avoid using the boolean SOP except in simple cases, since
it often causes more problems than it solves.

New stuff:

  - More practice with copernicus. This is only the second time using copernicus, so it's
    still a fairly simple use, but it required a lot of setup in SOPS to create the engraving
    pattern in 3D space, then translate it into UV spaace for rasxterization onto a heightmap.
  - The leaves in the leaf pattern were created with a Curve SOP followed by a Planar Inflate
    SOP, the latter of which I've never used before.
  - I focused on the actual render least of all, but for lighting I did attempt to use a
    Karma Sky Atmosphere node for a realistic outdoor lighting.

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[entry-post]: https://www.sidefx.com/forum/topic/99954/?page=1#post-438110
