### Mardini 2023 - Grass

Today is day 11 of [Mardini 2023][mardini-2023]. The prompt for today is "grass".

I made another animation. I know, it's dumb, they take longer and I'm trying to get
ahead. But they're also more fun, in part because I can experiment with various
simulations/solvers to see if I can get the result I want.

In this case, today's practice was going to be a throwaway project. I didn't really
have a goal, it just needed to match the "grass" prompt, and grass is dead boring.
It should have been simple to just create a still of some random thing on a grassy
hill or something, but I had the idea to make a golf ball and put it on grass. So
I did.

Then I had the idea to put it in a mini golf pen (not sure of the term here,
haha). So I did.

And finally I had the brilliant idea to simulate the ball being hit and rolling into
the hole. Which, as you can imagine, was a nightmare to accomplish, because I don't
have any practice art-directing RBD/bullet solvers. I'm not even sure how you're
_supposed_ to do it, or if it's even possible, I ended up plugging in magic numbers
and adjusting them iteratively as the simulation got closer to what I wanted.

I also bit the bullet and started pulling textures from online resources that I
didn't create but own the rights to. Reading the rules carefully, this year that _is_
allowed, so long as Houdini is the primary tool used.

<!-- My entry post is [here][entry-post]. -->

### Animation Fiasco

Apparently, something in my scene causes both the Karma CPU and Karma XPU renderers to
crash. Eventually I did get every frame to render, so I have a video to show, but the
end result looks pretty awful because many of the frames in the last quarter of the
video have awful visual glitches (presumably due to displacement). I added the video
to this page, you have to click "next" past the first few render images. I'm
also considering submitting the project files to SideFX so they can look at it and
fix it in a future release, but it's too late for that to help in the Mardini
competition.

[mardini-2023]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2023/
<!-- [entry-post]: ... -->
