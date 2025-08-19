### Mardini 2023 - Rock

Today is day 6 of [Mardini 2023][mardini-2023]. The prompt for today is "rock".

It's a few-hour effort at recreating a rock crab from [Pirates of the Caribbean: At
World's End][pirates-3].

If I were doing this properly, I'd spend more time to learn KineFX so I could create
the skeletal structure and use inverse kinematics to animate the skeleton. However,
I don't have time to do that, and I wanted to learn to use animation keyframes
directly. (On previous animations I set properties procedurally/programmatically, or
using a simulation of some sort to bake out entirely new positions without using
keyframes.)

No attempt was made to animate the legs, just the arms.

I tried _really_ hard to use the Substance Material node in order to create a material
for the rock and ground. However, when it worked, it caused the render to be orders
of magnitude slower than it should have been. As in, it estimated it would take 30+
minutes to render a single 1080p frame. And the thing is... it didn't usually work.
The XPU renderer straight-up failed to start when the material is set using that node.
Often, the CPU renderer crashed the entire Houdini application with a segfault error.
So, I bit the bullet and just exported texture maps from Substance Painter. The
contest rules technically say that textures can come from external programs so long
as the main art is done in Houdini...

My entry post is [here][entry-post].

[mardini-2023]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2023/
[pirates-3]: https://youtu.be/fjJRksUxkno
[entry-post]: https://www.sidefx.com/forum/topic/89182/?page=1#post-385731
