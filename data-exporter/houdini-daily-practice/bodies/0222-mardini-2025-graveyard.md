### Mardini 2025 - Graveyard

Today is day 30 of [Mardini 2025][mardini-2025]. The prompt for today is "MOONLIGHT",
in the LOPS category.

The original idea was just to silhouette a tree against the moon, but that seemed dull
and uninspired the more I thought about it. It also didn't give any hint as to what kind
of detail to include outside of the moon and tree. The moon is a sphere (citation needed),
so it has a square aspect ratio. That leaves a lot of negative space that needs to be
filled with _something_. (I know I don't absolutely _have_ to make my art projects in the
16 by 9 aspect ratio, but my site is set up for it.)

After looking up a bunch of reference images for ideas, I saw one that showed a bunch of
zombie hands reaching out of the soil in a graveyard, and it gave me the idea for this.
The project as a whole is interesting because the actual render is very, very lightweight.
In fact, in post, I'm throwing out about two-thirds of the beauty pass and generating
completely new color data made from gradients, driven by custom render variables exported
in addition to the beauty pass.

New stuff:

  - LABS Tree generator tools. I think this is the third time I've played with them, and
    although I didn't go too deep into it (I didn't even touch leaf generation) I did
    go into it this time with the specific goal of making a particular type of tree in
    order to fit the creepy graveyard theme.
  - Many additional render vars (AOVs) in the Solaris/Karma render settings. I wanted
    to render pretty much everything but the moon in COPS, but still use Karma to generate
    a bunch of helpful AOVs to use as masks and other helpful information for compositing.
  - Figured out how to make a vignette effect in post-processing. It's not exactly
    difficult, but there isn't a node dedicated to it so you have to build it yourself.
  - I also used a white noise + soft light blend mode with a small mask amount to generate
    a fake film grain (a very, very small amount of it).
  - Orthographic camera. Oddly, I've never attempted to render using one before, although
    I often use them when I'm modeling.

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[entry-post]: https://www.sidefx.com/forum/topic/100354/?page=1#post-442178
