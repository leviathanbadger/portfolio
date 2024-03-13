### Mardini 2024 - RBD Material Fracture

Today is day 13 of [Mardini 2024][mardini-2024]. The prompt for today is the [RBD
Material Fracture SOP node][rbd-material-fracture-sop].

I like this node, but every time I try to use it it creates a lot of broken geometry.
Isolated points, nonmanifold topology, etc. It's also really slow, and seems to need
to recook even for many changes that don't seem like they should require a rebake.

That said, I again don't have much time this practice, so I wanted to avoid an
animation. Fortunately, this node can be used without actually performing an RBD
simulation, even if that's what usually follows it.

I used a the "glass" shatter mode to shatter a few spheres on the top, then
procedurally repositioned them to make what I was hoping would be a cool look,
with crystals pointing inwardfs to a single point in the center. It does look nice,
but it isn't exactly what I was going for, which makes me mildly upset even though
it probably shouldn't.

My entry post is [here][entry-post].

[mardini-2024]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2024/
[rbd-material-fracture-sop]: https://www.sidefx.com/docs/houdini/nodes/sop/rbdmaterialfracture.html
[entry-post]: https://www.sidefx.com/forum/topic/94939/?page=1#post-415995
