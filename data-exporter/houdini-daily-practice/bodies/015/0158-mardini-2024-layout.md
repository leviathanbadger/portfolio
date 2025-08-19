### Mardini 2024 - Layout

Today is day 4 of [Mardini 2024][mardini-2024]. The prompt for today is the [Layout LOP
node][layout-lop].

I was going to try to recreate a scene from [Yumi and the Nightmare Painter][yumi-book],
but I had quite a bit of difficulty learning to use the Layout LOP node. I don't have
as much practice using the LOP network as I would like, or I thought I had, in retrospect.
The truth is I generally use almost all of the same nodes in all of my projects, and
didn't branch out much because most of my lookdev is simple enough that I can do it without
complicated setups.

However, to use the Layout LOP, I first had to learn to use the Component Builder nodes (a
set of four nodes, three of which I've never used before) and the layout asset gallery
pane. I had a lot of difficulty getting the Component Builder nodes to do what I wanted,
because I was following several tutorials that made use of versions of the nodes that
existed in prior versions of Houdini, but the functionality I was trying to use was changed
in Houdini 20, and I couldn't find documentation explaining why what I was trying to do
no longer worked.

I finally got it working and created ten or so varieties of rocks, then used the Layout LOP
to stack and rotate them procedurally. The stacks look nice enough, but since I wasted so
much time on them, I didn't have time to make any kind of background or stage. I just used
the HDRI map to provide some context, added a camera depth of field to make the blurry,
low-res background seem intentional, and clicked "Render".

This deserves to be given more time, but I don't have more time to give. Maybe I'll come back
after Mardini is over and improve it. As it stands, it's just slightly better than
yesterday's, and only really then because I learned several new things in doing it, which I
can't really say about yesterday's art.

Oh, I used the "Labs Edge Damage SOP" for the first time on this project. There's a day
coming up that needs to use it, but after learning about it it just made sense to start using
it on other projects as well. It's a very useful node, even if the results aren't as configurable
or art-directable as I'd have liked.

My entry post is [here][entry-post].

[mardini-2024]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2024/
[layout-lop]: https://www.sidefx.com/docs/houdini/nodes/lop/layout.html
[yumi-book]: https://www.dragonsteelbooks.com/products/yumi-and-the-nightmare-painter-premium-hardcover-book
[entry-post]: https://www.sidefx.com/forum/topic/94765/?page=2#post-414649
