### Mardini 2026 - Galactic

Today is day 7 of [Mardini 2026][mardini-2026]. The prompt for today is "Galactic".

It's getting late, so I will be brief. The main idea I had was just to use a polar
projection to create a 'tiny planet' render. I did end up using the HeightField tools
and the Ocean Spectrum/Houdini Ocean Procedural nodes, which I don't have a lot of
practice with. Then I spend a bunch of time throwing in random postprocessing nodes
in an attempt to figure out how to make the output better (or at least more
stylistic.) I'm very bad at this subjective crap, so I'm honestly not sure if the
end result is better or worse than it was at the start.

Some of the new postprocessing effects I tried to use, with mixed success:

- Color Correct COP. I honestly have no idea what it does or how best to use it, so
  I don't know if I used it well or not.
- Selective/local contrast driven by an AOV.
- Radial blur, applied only to the sky. Had to use a wrangle to get the direction,
  then a Streak Blur to accomplish it.

Note: the HDRI is from GreyscaleGorilla.

My entry post is [here][entry-post].

[mardini-2026]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2026/
[entry-post]: https://www.sidefx.com/forum/topic/103293/?page=1#post-454908
