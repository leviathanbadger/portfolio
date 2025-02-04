### Bubble Rocket

It's been a while since I used Houdini for anything, but I wanted to get back into it
before this year's [mardini][Mardini] competition started. I participated in both
previous years, and it would be a shame to lose the streak now.

That said, I didn't really know what to do, since it's been too long since I worked
on the stormveil castle project to pick it up again from scratch. Eventually I
decided to model a simple cartoon rocket to refresh myself on the simple modeling tools;
but I combined it with a bubble trail to use a relatively new Houdini feature that I've
never touched before. The "remesh bubbles SOP" node is relatively simple, but
unfortunately it's not exactly easy to render thousands of raytraced translucent bubbles.
I put an actual soap bubble shader (with the fancy colored swirls and everything) firmly
out of scope for this project, but even so it took a while to figure out render settings
that don't look awful or take hours to complete.

I have two cameras rendered. The distant view (including the rocket) takes about 35
minutes on XPU (maximizing CPU and GPU utilization); and the close-up of the bubbles
takes about 65 minutes. I had to enable a denoiser even so even though it makes the
bubbles blur together and look like mush. Still, it looks better than without using
the denoiser; I rendered each camera with and without so you can see the difference.

[mardini]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2024-winners/
