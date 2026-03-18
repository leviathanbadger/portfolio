### Mardini 2026 - Neon

Today is day 19 of [Mardini 2026][mardini-2026]. The prompt for today is "Neon".

I had two ideas for this project which I sort of half-started and then abandoned.
First I was going to make a neon billboard on a skyrise occluded by rain, at night;
I rejected this because there would be way too much geometry to model for that
scene to play out even close to how I want it to look, and I'd further have to
create some kind of graphic design to actually put on the billboard, further
complicating the project. Next I was going to create an 80's neon-lit pinball
machine; it sounds like an interesting project, but I started doing research into
pinball machines and realized it has a similar problem -- way too much geometry,
way too much painted/printed graphics to create to augment the scene, way too
little time.

Finally I ran out of ideas, so I was just going to go for a very simple Tron-style
terrain with light trails. In the process I had the idea of creating a Mario
Kart-style track lit and rendered as if it were in Tron. So that's how I got this
weird mix. There's still not enough geometric detail for a Mario Kart track, but
the Tron aesthetic partially mitigates that. The result looks nice,

New stuff:

- Orient mode in Curve SOP. I've used this once before.
- PolyWire SOP -- seems to be a less useful version of Sweep SOP, TBH.
- HeightField Mask Noise SOP -- pretty self-explanatory. Somehow, I've never used
  it before, at least in my memory.
- Emissive-only geometry. This is mostly true; there's nothing here that isn't
  either emissive or transmissive. It turned out well. I considered adding a fog
  volume to get a glow effect directly in the render, instead of adding it in
  post; but without trying it I opted against it because I think it would take
  away from the Tron aesthetic. The fuzzy 'glass' material on the track and
  terrain already doesn't perfectly fit the reference material, but I liked how
  it looked so I kept it anyway.

My entry post is [here][entry-post].

[mardini-2026]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2026/
[entry-post]: https://www.sidefx.com/forum/topic/103379/?page=2#post-456248
