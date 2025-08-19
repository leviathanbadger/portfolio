### Mardini 2023 - Fog

Today is day 24 of [Mardini 2023][mardini-2023]. The prompt for today is "fog".

The idea was to create a strategy game-like hex-tile visual, with cartoony toy
tank visuals and a "fog of war" hiding the map a short distance away from the
tank. I made several mistakes, although I'm not sure how I could fix some of them.

I started with a hex grid. That was relatively easy to do. That's when it started
going downhill. I created a heightfield, raycast the center of each grid tile onto
the heightfield, then updated the heightfield to be a constant height for each tile.
I had to blur the heightfield to avoid jagged and abrupt changes in height,
which caused weird curvature when raycasting the grid back onto the heightfield.
I created "cliffs" by masking out parts of the heightfield with the sharpest slope.

The fog _should_ have been easy, because the hard part of creating fog is preventing
it from completely obscuring the scene. However, because of a dumb mistake that I
made... and then continued to make while I tried to diagnose why the render was
failing... it took over 30 minutes of trial and error just to get a working render
with fog. At that point I abandoned the idea of trying to fiddle with the volume
to create eddies or some kind of cartoony/strategy-game like fog of war effect
because it's late and I'm tired, and I need to move on to the next practice.

The tank took minimal effort, because I didn't focus on it at all. I just did
whatever came to mind first. I'm not unhappy how it turned out, although I do wish
I'd spent more time on it and less on the ugly terrain, grid, and fog. It's pretty
much the only saving grace for this project. Even so, this is definitely in the
bottom 25th percentile for my Mardini 2023 submissions, in terms of how much I like
the end result.

By the way, each of these four frames took over an hour to render, because I did them
on the CPU with extremely high settings to avoid having noisy fog volumes.

My entry post is [here][entry-post].

[mardini-2023]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2023/
[entry-post]: https://www.sidefx.com/forum/topic/89510/?page=1#post-388260
