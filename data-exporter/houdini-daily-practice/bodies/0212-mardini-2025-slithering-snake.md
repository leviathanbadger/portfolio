### Mardini 2025 - Slithering Snake

Today is day 20 of [Mardini 2025][mardini-2025]. The prompt for today is "SLITHER",
in the KineFX category.

I revisited the coiled snake from a week ago, [practice day 205][day-205]. Where
previously I made an abstract coil to showcase just the scales, Today I attempted
to make a snake slithering animation. It's really hard to know how well I succeeded
until I render it out, but the model is simple enough I can play it back in
near-realtime in the modeling context (no textures or fancy camera movement).
There, at least, the snake appears to slither as I'd expect a snake to.

Two things are missing that I was intending to add, but I don't have the time
(or, honestly the motivation - I'm not enjoying this project as much as I thought
I would): modeling out the actual snake's head, so it's not just a slithering
tube, and adding some secondary motion to the end of the snake's tail because
right now it looks too rigid and procedural.

Adding motion to the scene caused a huge amount of motion blur (intentionally,
because it'd look super weird if it didn't); but ironically, that motion blur
causes the render to look like a blurry mess, and hides all of the detail in the
scale material I was so proud of from a week ago. It also requires the "head" of
the snake to be visible, whether it looks like a head or not. The snake body also
no longer goes through a Vellum sim to press it flat against the ground and give
the body some shape to ground it in the world. So, this practice has taken a firm
step _backwards_ in almost every way.

New stuff:

  - Mostly just figuring out an algorithm to procedurally recreate something akin
    to a snake's motion. I looked up slow-motion videos of snakes moving to do this,
    and while I have many of the elements correct, a snake's actual motion is a lot
    more organic than I was expecting. It isn't quite as formulaic as I had hoped;
    the back of the tail has a lot of fairly unpredictable secondary motion; any
    kind of obstacle or even uneven ground breaks my algorithm easily.

    If I were to continue this project, I'd probably have to do a lot more research
    into this motion, and switch from a purely algorithmic approach to a solver.
    Maybe I could combine it with a Vellum simulation treating the snake body as
    a string, and manually applying constraints or forces to get that behavior
    regardless of the ground level or obstacles in the way. But I don't have the
    technical knowledge of how to do that, and I'd rather wait for a more interesting
    project to come along before I try to dig into a solver's internals like, or my
    motivation will die entirely.

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[day-205]: https://brandonslade.me/houdini-practice/204
[entry-post]: https://www.sidefx.com/forum/topic/100214/?page=1#post-441036
