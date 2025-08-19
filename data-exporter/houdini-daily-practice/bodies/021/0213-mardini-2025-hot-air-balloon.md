### Mardini 2025 - Hot Air Balloon

Today is day 21 of [Mardini 2025][mardini-2025]. The prompt for today is "FLY",
in the KineFX category.

I was going to do a Vellum sim of a person falling through the sky with a parachute,
but 1. I'm not actually sure if Vellum handles drag from air resistance like that, so
it may not even be technically possible; and 2. I wasn't feeling up to animating a person,
even a little bit; I could have done a ragdoll but that still requires rigging the person,
and defining the degrees of movement, and in my experience it doesn't work well unless you
have everything configured perfectly.

Instead, I made a hot air balloon. Then many. Then I made a terrain for them to fly over.
Then I made clouds so the balloons aren't the only thing in the sky. Then I played around with
the Karma Physical Sky LOP to see if I could get a nice looking sunrise behind the hill on the
right. The answer was no, I couldn't; at least not in the time I had for the project. But in
the process I created a slap comp in order to apply a glow effect, which had helped but was
no longer needed; but I wanted to do something with the slap comp, so I then went overboard
playing around with render vars, AOVs, etc. Ultimately I desaturated everything but the
balloons in order to emphasize them; added a bit of chromatic abberration in post-processing
(not quite as good as the lens shader variety because it can't "see" behind rendered objects
to always give the correct color) and played around with selectively blurring parts of the
image based on depth, whether or not the pixels show balloons, etc.

Basically the project went down several tangents. I don't necessarily think the result is
any better for it all, but again, the point was practice, not perfection. Getting the failures
out of the way now at least lets me learn to do things that might not work here, but may work
in the future, and at that point I'll already know how to do it.

New stuff:

  - Karma Sky Atmosphere LOP again. This is technically in the render, but again, I didn't
    end up using any of the more extreme features, just the physically-based light source and
    volumetric atmosphere. So... half-dipping into this for the second time. I'll have to plan
    out a project that actually focuses on this at some point, I'm barely scratching the surface.
    Maybe something in space.
  - I finally got around to playing with the Cloud Shape Generate SOP + related notes that were
    added in Houdini 20, almost two years ago. I used it for one day during Houdini 2024, then
    never touched them again. They're interesting to use, but problematic because what you see in
    the SOPs context doesn't necessarily have any bearing on what you see in the final render.
    Also, it takes a lot of creative engery to fiddle with shapes in such an abstract way to
    attempt to get a specific look. Finally... they make the render take a _horrifically_ long
    time to complete. (As in... 6-8 hours for a 4K image in this project.) So... great tools,
    but I'll probably stay away in the future unless my project specifically requires clouds.
  - Slap Comp, take 2; including glow, chromatic aberration, HSV adjust to artificially increase
    the saturation of everything, selective blur, etc. More details above.

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[entry-post]: https://www.sidefx.com/forum/topic/100231/?page=1#post-441162
