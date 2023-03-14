### Mardini 2023 - Bounce

Today is day 13 of [Mardini 2023][mardini-2023]. The prompt for today is "bounce".

This week will be challenging for me, because the prompts are all focused on motion.
That means that if I want to save time by rendering stills instead of animations,
I have to be clever about how I respond to the prompts. Modeling and rendering
a backyard trampoline was how I planned to do this today. Except... after I created
it, I just had to simulate something bouncing on it. And after I did that, I just
had to render an animation instead of picking just one frame to render.

Sue me.

I did a couple of things new/different this time. Nothing major, mostly just pushing
the limits of what I've done before. The biggest thing is that the Vellum sim I ran
to simulate the trampoline has three different types of object - hair for the spring,
cloth for the mesh itself, and balloon (softbody) for the random ball things that
fall onto it and bounce.

A few smaller things though: the grass is rendered using an actual mesh (or rather,
set of meshes) that are randomly picked and instanced very densely onto the ground.
I didn't make the grass mesh, I just bought it because I'm going to want it in a
lot of projects and honestly modeling grass is not my idea of a fun time.

Lastly, I learned how to use the "Scatter and Align" SOP (previously I've been using
the Scatter SOP). They give the same functionality, but the former also allows you
to orient the scattered points in various ways, which are challenging to do using
the Scatter SOP without writing lots of custom code in other SOPs that include
pointlessly complex math (linear algebra and trigonometry). Previously I've done that,
which is kinda sad. I blame myself, because I'd always search online for the
mathematical solution rather than searching my actual problem and finding a better
way to do it in Houdini. I think I just learned it the slow way because the "Scatter
and Align" SOP is only a few years old, and many of the tutorials I've seen are older
than that.

My entry post is [here][entry-post].

[mardini-2023]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2023/
[entry-post]: https://www.sidefx.com/forum/topic/89312/?page=2#post-386876
