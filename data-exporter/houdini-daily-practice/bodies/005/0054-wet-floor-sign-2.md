### "Wet Floor" Sign (Day 2)

Today I created a low-poly version of the same model I created yesterday;
the primitive count went from 4436 to 106. Then I baked a normal map
from the high-poly model to the low-poly model. The intention was to
create a game-ready version that looks "close enough" to the original.

The main problem I had was that the way I generated the UVs on the
original model created a slightly different UV space when applied to
the low-poly model. I had to figure out how to mirror the texture
mapping logic from the original material in the new one. If the bake
texture node that I used to output the normal map was done in Karma,
I could have simply baked the base color again as a new texture;
but unfortunately that node still does not exist in Karma so I didn't
have to material to use in baking it out.
