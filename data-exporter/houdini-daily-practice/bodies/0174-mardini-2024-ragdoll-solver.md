### Mardini 2024 - Ragdoll Solver

Today is day 20 of [Mardini 2024][mardini-2024]. The prompt for today is the [Ragdoll
Solver SOP node][ragdoll-solver-sop].

I attempted this several times, but each time the ragdoll solver had issues that I couldn't
work past, like extremely jittery solving (or completely random-seeming solving). Maybe if
I had more time I'd be able to push past it, but I don't, so I moved on to other projects.
The plan is to come back on the weekend and give it another attempt, although it'll be too
late to submit it on the correct day.

Later in the week, I finally returned to this, and continued to struggle. I attempted to
use the ragdoll tools about 10 times total without success, before stumbling upon one
configuration that worked... well enough. The ragdoll solver still jitters weirdly, but
not to the same extent as previous failures, so I'll call it a win and put this behind me
forever.

I used the motion clip nodes in order to blend several animations together. I had some
difficulty getting the locomotion to apply correctly since some of the animations have
the character taking a step backwards, but after a while I figured out how to do it.

Even then, I had difficulty getting the ragdoll to follow it, because the ragdoll tools
just wouldn't work on the skeleton created for the model I wanted to use. So eventually
I used motion clip + match points + full body IK to retarget the animation onto the
built-in electra test geometry.

Finally, I used three separate vellum simulations to simulate the three balls hitting
the ragdoll character. It was difficult to position the balls correctly so they'd hit
the character at the correct position and frame to make the hit look real, and I'm
still not 100% sure I achieved it. Again, animations are very hard to judge until
they're rendered out and you can watch it in realtime.

My entry post is [here][entry-post].

[mardini-2024]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2024/
[ragdoll-solver-sop]: https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--ragdollsolver.html
[entry-post]: https://www.sidefx.com/forum/topic/95066/?page=2#post-417475
