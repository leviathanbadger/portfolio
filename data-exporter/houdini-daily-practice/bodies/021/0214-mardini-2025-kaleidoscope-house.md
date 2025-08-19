### Mardini 2025 - Kaleidoscope House

Today is day 22 of [Mardini 2025][mardini-2025]. The prompt for today is "EXPLODE",
in the DOPS category.

I tried to do an RBD simulation to recreate a ground explosion effect seen in the Houdini
19.0 keynote, but it wasn't working like I wanted it to, and I was just not having fun.
So I scrapped it and attempted to make a kaleidoscope effect instead. I wanted to make
it in a lens shader at first, but I quickly realized that I have no idea how to do that,
and after wasting time on the RBD sim I didn't have time to research it or figure out
the math. So... project for another time.

Instead I created a simple house mesh (well... it started simple, then I went overboard
on the details). Then, with judicious use of the Clip SOP and controlled animation
parameters, I sliced the mesh up into pie chunks, copy + transformed them with more math,
and stitched the new copies along the seams. As an experiment, it... uh... works. I guess.

The only thing I regret about the project is that since I wasted so much time at the
start, I didn't have the chance to create actual textures for all of it, which I feel would
have made the end result much better.

New stuff:

  - Clip SOP. Believe it or not, I've never used this node before. It's almost as if
    there's not really a good use case for knifing a geometry perfectly along a plane
    in a typical modeling workflow. I had to use it here because that's literally what
    I'm doing to make this effect, but I don't imagine I'll really find a good use for
    this in the future.

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[entry-post]: https://www.sidefx.com/forum/topic/100249/?page=1#post-441282
