### Sky City (Day 3)

Only worked on the rope today. I went _waaay_ overboard with the polycount here.
At one point the entire scene was more than 20,000,000 polys. Right now it's only
500,000, excluding the human test geometry for scale.

So... yeah. I'm going to have to look at a way to drastically reduce the polycount.
In a game the rope would almost certainly just be a tube, with a texture to give it
this bumpy look. But this is for a render, so I want it higher-poly than I'd
normally shoot for.

That said, I can definitely still at least cut it in half, because for most of the
ropes half the polys I'm rendering are actually never visible, no matter where you
look at it from.

Another issue I need to fix is the knots joining the ropes together. It was
incredibly difficult to come up with a procedure to make that. I have 10 varieties
randomly generated, and it doesn't always make a believable knot still. Additionally,
I had to reduce the polys by converting the resultant mesh to a volume and then back;
but that caused the mesh to drop its UVs, which means I won't be able to use the
same shader to render the knots as the rope, unless I come up with a better way to
generate it.

Didn't get time to work on the walkway planks today. The rope seemed like a more
interesting project for the time being.
