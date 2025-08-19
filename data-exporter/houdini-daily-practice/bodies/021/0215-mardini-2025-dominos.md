### Mardini 2025 - Dominos

Today is day 23 of [Mardini 2025][mardini-2025]. The prompt for today is "COLLAPSE",
in the DOPS category.

I really thought this practice would be easier than it ended up being. Although I've
used the RBD simulation tools in the past, I haven't really dug into them or performed
a large-scale or more complex simulation before. Dominos falling _should_ have been an
easy project, _theoretically_. It didn't end up working out that way, and I spent
3-4 hours just on getting the simulation right, even ignoring the dynamic pips via
Copernicus/MaterialX. Still, I'm happy I persevered, because the end result actually
looks pretty satisfying (although at the time of writing this I haven't seen the final
rendered product as a video.)

I actually modeled the dominos at a much larger scale than they actually are, because
in the past I've run into issues with really small geometry and I was hoping to forestall
that. To counter that, I also increased the time scale and frame substeps commensurately
so the dominos (theoretically) don't appear to be toppling in slow-motion. Again though,
haven't seen it in real-time as a video yet.

The one regret (other than taking too much time for this project) is that I couldn't
figure out how to get the dominos to "sleep" after they fell over. Increasing the
simulation's global friction caused the domino train to take 2-4 times longer to fall,
which seems counterintuitive since theoretically friction plays a very small role in
that. Eventually I gave up.

In the future, I plan to come back to this project and export the collision data,
with the intention of using a separate tool to dynamically generate clacking sounds
as the train topples over. I definitely don't have time today, and I'm not allowed
to use external tools for Mardini anyway.

New stuff:

  - RBD Configure SOP to initialize an RBD simulation. Previously I've just used the
    RBD Material Fracture SOP or let the solver itself implicitly convert the geometry
    into RBD packed geometry. I'm not sure to what extent I even understood what was
    going on under the hood, it's been a long time so I had to relearn a lot for this
    practice in general. This node helped me understand the underpinnings and what is
    possible with the solver in the first place.
  - RBD SOP Solver to precisely control when to activate each domino.
    One of the issues I had in setting up this simulation is that the proxy geometry used
    for the dominos didn't precisely start on the ground, or wasn't precisely flat enough
    so they caused spontaneous jitter and toppling over despite no collisions or forces
    applied to them (other than gravity). I attempted fiddling with many settings to get
    this working, but ultimately the best solution was to deactivate them at the start
    of the simulation, then programmatically activate them each frame if they are within
    a certain distance of an active domino. I learned a _lot_ setting this up, and future
    projects in this vein should be much easier.
  - The domino pips are randomly selected, but they aren't modeled into the geometry.
    Instead, the number of pips on the top and bottom are stored as an attribute on the
    geometry, then I use the MaterialX Primvar and Switch nodes to select between several
    textures generated in COPS for both the base color and the displacement height.
    This was a little tricky, and I'm glad I did it, but in retrospect it probably would
    have been better to just bake all seven into a single texture and switch between them
    by transforming the UVs.
  - Animated camera focal length + F-stop. This counts, right? I mean, it's basically
    just keyframing the start and end with a linear interpolation. But yeah, I've never
    done it before, and it's worth noting if only because somehow I've never considered
    doing it before.

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[entry-post]: https://www.sidefx.com/forum/topic/100256/?page=1#post-441420
