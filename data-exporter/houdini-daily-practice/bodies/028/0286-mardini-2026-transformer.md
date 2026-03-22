### Mardini 2026 - Transformer

Today is day 22 of [Mardini 2026][mardini-2026]. The prompt for today is "Transformer".

Yes, it's the alphabet wall from Stranger Things. I have had this idea for a very long
time, but I didn't get around to making it. To be honest, it barely fits the prompt, but
it's tangentially related to electricity, which is tangentially related to a particular
interpretation of the word 'transformer'. Regardless, I felt inspired to make this
because I wanted practice with CHOPs and I realized this was a perfect way to do it.

New stuff:

- Flow Solver in COPs network. Mostly for fun, but it created the abstract wallpaper
  color. I don't love the result, but hopefully it won't look terrible in the final
  animation.
- More grunge COPs -- which are apparently prebuilt nodes that layer noise on top of
  each other in preset ways that mimic different types of materials. Here I used the
  Grunge Rust COP, Grunge Aurora COP, and Grunge Birch Bark COP for various purposes.
- Practice with the Font SOP, although I have used it before for various purposes; this
  time I needed to slightly randomize each letter's position, which was a bit tricky.
- CHOP network to drive animation parameters. This is only my second time using it, so
  pretty much everything in here is still very new to me.
    - Keyboard CHOP, to detect keyboard input.
    - Record CHOP, to record and playback that keyboard input.
    - Lag CHOP to make keyboard input less binary/jarring.
    - Noise CHOP to add some jitter on top of keyboard input, to simulate... uh... power
      fluctuation or something.
    - Math CHOP to combine keyboard and noise channels.
- Point Instancer LOP with attribute-driven intensity values (which attribute in turn is
  CHOP-driven.) This required the use of an Attribute Wrangle LOP to translate the
  primvars into the correct format.

My entry post is [here][entry-post].

[mardini-2026]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2026/
[entry-post]: https://www.sidefx.com/forum/topic/103412/?page=1#post-456571
