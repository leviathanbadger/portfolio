### Decorative Rocks

This took about four days to render, running almost continuously except for the
times I was ising my personal computer for other things. (Such as other days' practice.)
It wouldn't take so long to render if I wasn't going for this kind of translucent marble look.
There were 3.5 more seconds that completed rendering, but I must have accidentally
moved the camera a bit at some point because they rendered wrong. Either way...
I'm not going to spend another few days running at max CPU workload just to correct it

Rocks are generated individually, then I use a DOP network to simulate them falling
and settling at the bottom of the bowl.

Each marble is sized at about 2 meters diameter (For the physics simulation anyway.)
I should have sized them more appropriately, but I didn't want to spend a ton more time on it.
The simulation looks more realistic if you look at it with that in mind. For actual-size
marbles it would take a second, maybe two to settle. For giant boulders (which probably have
a lower mass than they should for rocks, I didn't fiddle with most of the settings)
it makes sense that they would take a while. Also the only force I added was gravity,
no friction or drag.
