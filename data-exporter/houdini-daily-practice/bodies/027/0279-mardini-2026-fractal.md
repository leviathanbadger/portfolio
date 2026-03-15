### Mardini 2026 - Fractal

Today is day 16 of [Mardini 2026][mardini-2026]. The prompt for today is "Fractal".

I took yesterday's practice as a freebie, so I though I could spend more time on
this. I should have cut my losses half way through. I've spent too much on this
practice and it's... ugly. Like, really ugly. It could have been good. The idea
wasn't terrible, but I don't have enough time or experience to create good
materials for everything, or to create a nice scene, and I didn't plan through
where the lights in the scene were going to come from.

Maybe it would have been a better idea to render a single cube, rather than huge
piles of many of them, but a hero asset shows too many issues due to resolution
issues when modeling, as well as issues with me just not being able to create good
materials for everything. Drawing the camera back and rendering a pile instead of
just one allows me to have better composition, sort of -- a foreground and
background at least -- but the cubes just become noise, because some of the fine
detail I *tried* to add became too small to visually parse.

Altogether... one of my worst practices of the month, so far. It's technically
ambitious, and I learned a lot, but it's ugly as heck.

New stuff:

- Reading from COPs in a Volume VOP to generate geometry while reading texture
  samples from COPs.
- Julia Fractal COP. Sampled in the above to create the fractal rock chunks.
- LOPs Component Builder with procedural variants and simulation proxy.
- Triplanar Project Hex Tile COP. Similar to Triplanar Project COP, but with
  hexes with possible random rotations and scales to break up texture
  seams/repeats.
    - Once again, I tried but failed to get this to work with a normal map. I
      think I'm missing something fundamental here...
- Layout LOP to position a lot of different boxes.
    - This didn't work, and I still don't know why. It wouldn't let me import the
      reference into the Layout LOP.
- Explore Variants LOP, Point Instancer LOP with random variants. Then I just had
  to create points to instance them to in SOPs, which honestly was what I probably
  should have done the first time.

HDRI and some material textures come from GreyscaleGorilla.

My entry post is [here][entry-post].

[mardini-2026]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2026/
[entry-post]: https://www.sidefx.com/forum/topic/103358/?page=1#post-455875
