### Mardini 2025 - Caterpillar (Day 3)

Today is day 28 of [Mardini 2025][mardini-2025]. The prompt for today is "MUD",
in the DOPS category.

My original project idea for today fell through, because I was supposed to do something
different for [day 216][day-216] (themed "CRASH"). Originally I was going to model a car,
and simulate it crashing into a wall. Then today I would texture it and add procedural
mud spatters to the undercarriage and sides.

I wasn't particularly excited by the idea, but I figured I could do it in a few hours and
it wouldn't matter much that it wasn't entertained. I just needed something to do for the
day. After the idea fell through, I couldn't think of something I'd like to actually make
related to mud, because - let's face it - mud is not very fun to think about or look at.
It's a terrible prompt for an art piece, unless you're trying to take the prompt abstractly.

So... I gave up on making a good piece of art, and instead focused on learning something
new. The MPM Solver is a new multi-material solver that was released in Houdini 20.5, but
I haven't messed with it before since I knew next to nothing about it. But after doing a
little research on the side during this month, I found out that it has a preset for mud.
I figured I set up a bare-minimum MPM simulation using a previous project as a base,
without any kind of fancy configuration, and without attempting to fine-tune any settings
or make any particular look. Then I'd bust out a render with a wet-looking but completely
opaque mud material, and render it overnight, and call it done no matter how awful the
result is.

So... The catepillar project is back, for day 3.

New stuff:

  - MPM solver. I really didn't want my first MPM solver project to be _mud_ of all things,
    but I have to start somewhere. That said, no matter the result, or how often I
    tell myself "I won't go overboard with this", I'm fully aware it's incredibly stupid
    to try to learn an entirely new, notoriously compex solver, to make an art project
    with a 4 hour deadline (self-imposed). I'm letting the sim run right now, and doing
    my writeup in the meantime. It's taken about an hour already to get 82 frames in of
    300 for a 10-second clip. I might have to cut it short.
  - Not something I specifically _did_ for this project, I just learned about dependency
    links and some of the functionality behind that in Houdini. I had no idea that you
    could see a visual indication of node dependencies direcly in the network view. I
    don't know how useful this will be, since I have't had an issue with circular
    dependencies for a very long time, but I also haven't workd on more compliceated
    projects for a while either. Either way, it's fascinating to find an entire part
    of Houdini I've never seen before. Just goes to show... I still have a _lot_ to
    learn.
  - Procedural mud wet/mud map using the MPM solver output as input into a Copernicus
    COPnet. I had to use a SOP solver to aggregate all of the spatter points in UV space
    for the entire animation, then delete all of the future points for every frame to
    build up the mud spatter map. This is more complicated than
    on the caterpiller. This is a real stretch, considering I was already simulating
    using a new solver. (Edit: yep, it's nearing 1 AM and I'm finally getting the
    animation render set up to run overnight.)
  - The "Allow Shader Parameter Animation" parameter on the Material Library LOP. I feel
    embarrassed to admit it, but I've never used this before. In the past when animated
    materials failed to work properly, I assumed it was a bug with Houdini and restarted
    the program, which always worked. But this time when rendering the full scene it
    didn't want to pick up new mud map textures for most of the rendered frames, so I
    looked into it and finally found this setting.

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[day-216]: https://brandonslade.me/houdini-practice/216
[entry-post]: https://www.sidefx.com/forum/topic/100324/?page=1#post-441984
