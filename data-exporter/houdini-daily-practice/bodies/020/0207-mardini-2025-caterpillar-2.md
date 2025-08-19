### Mardini 2025 - Caterpillar (Day 2)

Today is day 15 of [Mardini 2025][mardini-2025]. The prompt for today is "RUN",
in the KineFX category.

Today I went back to revisit the caterpillar I created for an earlier project. When I
planned this, the intention was for the caterpillar to have legs instead of wheels, but
since it turned out much more mechanical and robotic, I now have a robot caterpillar on
wheels, uh, "running" along a track. Yeah...

On the surface this isn't very different from the original, and it's mostly true, on the
surface.

A lot of the changes here are technical. In the original, I cut a lot of corners to model
the caterpillar because the original didn't need to animate, so it only had to look good
for still frames. The wheels didn't rotate the correct amount for the distance traveled.
In fact, the left and right wheels were perfectly mirrored and didn't change based on the
caterpillar segment, or for left and right wheels (which are different because of the
segments rotating.)

The caterpillar path was computed with a sin wave, which caused it to speed up and
slow down based on which part of the curve. Now the movement is simulated at a fixed
speed along an arbitrary curve, and can loop around if the curve is too short. I've
also improved the calculation of where each curve segment ends up, so the body doesn't
appear to "drag" quite as much and follows along on the same path as the head, to a
much greater degree (although it does drag to an extent; that's just the correct
behavior when the segments are free to swivel and don't have their own motive power.
This was done as a cheat to get it to look a little better.)

I ran into an issue with the Solver SOP that I use to simulate the caterpillar moving.
I figured out eventually that when you play back from within the solver, the simulation
result doesn't feed back into itself correctly. Apparently this is intentional, or at
least an expected side effect of how the Solver SOP is implemented, but it explains
why I've always had such trouble with this node in the past. I always thought it was
just flaky and fixed it every time by manually resetting the simulation and rebaking
the sim; knowing this should help me in the future when I need to use this node again.

All of that said... yeah, the final render isn't _that_ different from the original.
The node tree I created is just more robust and could support many more use cases than
before. I can live with that.

New stuff:

  - I noticed some performance issues with baking the caterpillar model at one point,
    so I finally bit the bullet and looked into the Performance monitor window in order
    to profile which nodes were taking so long. I was surprised how easy it was to use;
    and how integrated it is into the network view. The slow nodes are highlighted red
    in a way that's nonintrusive but very easy to see. I will definitely be using it
    more in the future. As for what the performance issue was... turns out the Assemble
    SOP is pretty heavy. I use it to assign a @name attribute to different primitives
    so I can more easily assign materials and render properties in the LOPS context, but
    apparently it does a lot more than that so using it multiple times in a row is a
    big waste. Problem solved!
  - The velocity blur was looking pretty bad, even in stillframes. I realized that the
    issue was that the wheels were turning too fast between frames, so the subframes
    were being sampled, but the File Cache didn't compute the subframes correctly. Turns
    out you can configure the file cache to emit data for subframes directly, instead of
    guessing by LERPing between two frames. Then, after the file cache was updated, I
    did the same for the Compute Point Velocity SOP, and used a TimeShift SOP to ensure
    even the first frame has velocity for the render.
  - This is the first time I've used the Edge Transport SOP or Extract Point from Curve
    SOP. I used both in conjunction to determine where along a curve the front of the
    caterpillar should be after traveling a fixed distance. The distance is a function
    of time and a configurable speed. These nodes are more technical than most SOP
    nodes, but they're incredibly useful in niche situations. I will definitely use
    them again.

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[entry-post]: https://www.sidefx.com/forum/topic/100154/?page=1#post-440451
