### Mardini 2025 - Grunge Wall

Today is day 12 of [Mardini 2025][mardini-2025]. The prompt for today is "GRUNGE",
in the SOPS category.

I started by generating a few reference images using chat GPT + DALL-E. I think I like
this workflow, because it takes a lot of the creative work out of ideas that I have and
allows me to focus on the technical aspects instead.

The downside to that is that the reference images can take what would otherwise be a
relatively simple prompt, and complicates the end result a huge amount because of detail
that I would otherwise not think to add, but that I really want to do because it looks
so nice in the reference image. You can see in the end result that I took a lot of the
elements from the reference assets and dumbed them down significantly; and yet I still
had to put a _ton_ of time and effort into this practice.

New stuff:

  - Probably the biggest time-waster was the water simulation I ran to make the pooling
    water. I wasn't going to do this for any of the Mardini practices, because FLIP fluid
    simulations are extremely time-intensive and expensive in terms of compute as well.
    I could have gone with a heuristic, but my avarice got the better of me. So... I ran
    a FLIP simulation overnight, although I had to stay up until 1-2 hours after midnight
    to fine-tune the simulation settings in the hope that I wouldn't waste the simulation
    time running overnight. The simulation took about 10 hours to complete, and the end
    result is fine, although I won't know for sure how realistic it looks until I can
    render all of the 2100 frames (which will take quite some time.)
  - I also put a lot of effort into the COPS-composited materials for the pipe, brick walls,
    and trash/mud heaps on the ground. I tried a lot of new things here, and some worked
    better than others. I'm not going to enumerate it all because I don't feel like it and
    that's getting overly specific anyway.
  - The scene is lit by an environment (dome) light, which is typically an expensive and
    noisy way to render an indoor scene because most of the light rays would come back
    false and a large portion of the ray casts would be wasted because of that; but I've
    recently discovered that in this kind of situation you can configure the light to
    be checked through so-called "portal" geometry, which allows the render to only attempt
    to raytrace that light through those portals. This is my first attempt at doing that,
    and I'm happy with it. (It doesn't really change the render, just reduces noise, which
    allows me to reduce the number of samples per pixel and speed up renders.)
  - Finally... I played around with the Karma Physical Lens shader that I used before on a
    few of these projects. I've only really used the chromatic abberration setting before,
    but this project I found reason to use the tint setting to turn the scene greenish, as
    in an archetypical sewer. I could maybe have gotten the same look by fiddling with the
    light and material properties, but this was quick and easy, and if I want to switch it
    back or adjust it later I only need to change it in one place.

I'm rendering the simulation itself right now whenever my computer is not being used for
other purposes (other practices for example). I'll update this page with the video when
it's complete.

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[entry-post]: https://www.sidefx.com/forum/topic/100106/?page=1#post-439982
