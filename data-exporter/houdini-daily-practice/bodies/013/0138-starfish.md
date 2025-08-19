### Starfish

I haven't practiced in over a month because 1. I got burned out on Houdini after creating a
project every day for the month of March, then 2. I went on a business trip to Colorado Springs
for two weeks, then 3. I went to Hawaii for a vacation for 10 days. I needed the next week to
relax a bit, but I'm making a point to create this now because I don't want to keep using
all of this as an excuse not to practice.

The good news is that I got a lot of ideas for projects during my trip to Hawaii. This is one
of the projects I was most excited to work on. While I was in Hawaii, I bought a few glass
ornaments that I thought looked good. The main reason I did this was because the ornaments
have interesting 3D patterns inside them from different colors of glass mixing (or not).
This is something I've had some trouble with recently, because I only knew how to do this
by doing something crazy and ugly like using a boolean subtract to remove the "inside" from
the glass exterior, for example.

This is an attempt to model one of the ornaments using a new (to me) concept called nested
dielectrics to combine multiple transmissive models with different properties. It allows
me to model each component without overly considering the shape of the others. Unfortunately,
nested dielectrics only work with Karma CPU, not XPU.

I didn't create the beach background, that's an HDRI from PolyHaven I'm using for lighting so
that there's something nice to refract from the starfish. I'm using the "render light geometry"
setting to use it as a backplate.
