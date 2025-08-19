### Mardini 2023 - Sci-fi

Today is day 31 of [Mardini 2023][mardini-2023]. The last day. The prompt for today is
"sci-fi".

This one didn't really turn out the way I was imagining it at first. I was trying to make
a space station - human, and futuristic, but not creepy and dark like most games set in
space (you know - the ones where demons from hell or necromorphs hide in different
corners and try to kill you). Problem is the more I tried to make the inside look like
a space ship, the more I realized that most games and movies make spaceships look like
spaceships by providing context. Still images don't really convey that unless you
make a view of space a clear focus of the image. Even then, most of the materials I tried
to convey the idea of "space ship" just looked out of place or didn't help.

So I purchased an alien model and threw two of them in, as if they were having a
conversation. That, combined with a view of the earth outside of the window, just barely
made it clear that the setting is a spaceship/space station. And by then I was getting
a little burned out again, so I set up the TOPs workflow and began the render.

This scene uses emissive geometry lighting again. You can see the source lining the
ceiling in some of the shots. This makes the render take a really long time, and in
this case gives the scene a fairly flat look since the light is coming from every
direction. Still, I like how the lights turned out when they're in frame themselves,
so I left them in.

That said, although they lit the background/scene sufficiently for me, they didn't
illuminate the aliens enough to bring out the detail. So I tried something new here -
Light linking to allow light from a particular light source to only affect a specific
set of geometry. In this case, I have a spot light that only casts light on the aliens,
not on the floor or anything else.

To reiterate - I purchased the alien model, I did't create it myself.

The cartoon text was an idea I had later. It wasn't too difficult to overlay simple
things like this using COPs, so long as the actual scenes are already rendered. So I
added another TOP node to perform the composition. The actual composition nodes I used
are new to me. They're easy to use, but very limited in functionality. I've got to admit
(not for the first time) that COPs nodes are incredibly limited. Possibly the worst
part of Houdini, except maybe the frequent crashes.

My entry post is [here][entry-post].

[mardini-2023]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2023/
[entry-post]: https://www.sidefx.com/forum/topic/89641/?page=1#post-389126
