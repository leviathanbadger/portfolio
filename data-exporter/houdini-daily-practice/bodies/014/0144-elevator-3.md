### 'The Shining' Elevator (Day 3)

I started by improving the floor texture. This one is procedural, but it's done in Houdini
instead of Substance Painter. That's because I wanted to change the texture color around
the close pillars in a way that can't be driven by Substance Painter - or at least I don't
know how to do it. The floor still doesn't have enough macro detail or grunge, so I'll
probably revisit this later, but for now it's fine.

Next I got four generic nature pictures from textures.com and used Photoshop to crop them
to the correct aspect ratios for the picture frames hung on the walls. For a few of them
I used Photoshop's new generative AI functionality to generate a sky or remove details I
didn't want to include in the end result.

I used Substance Painter to create the texture I used for the blankets/curtains hung on
the walls. I didn't put a ton of effort into getting this to look exactly like the
reference image, since it's kinda blurry anyway.

Substance painter was also used to add grunge and water damage to the plaster in the
walls and wood in the wainscotting. I don't know how to do the peeled/chipped off paint,
which I absolutely want to do, but I don't want to spend all of my time on this right
now so I left it for later.

I created the models for the elevator position indicators (above the elevator doors)
and the models for the chandeliers. I don't have chains coming down to hold up the
chandeliers yet, in part because I'm not super happy how they turned out in the first
place.

The scene is now lit from point lights above the fake chandelier candles. The effect
gives the scene a much more diffuse look, with fewer hard shadows. The bloom effect
around the candle tips will have to be added in in post-processing, because apparently
that's not a realistic lighting effect and is usually the product of weird properties of
the cameras used to take pictures - or sometimes they're added in post-production. I'm
cheating a bit with the lights because I'm not letting the chandelier cast shadows.
This allows me to focus on how it looks without worrying as much about how it affects
how the scene is lit.

Before I can get to the blood simulation, I still have a few pieces of furniture to
place, as well as adding in the chandelier chains. The wall plaster peeling/chipping
off will just be a texture/material thing so that's not a blocker for the liquid sim.
However, even after I have those I'll still need to create lower-res versions of many
of these models so they can be used as the collision mesh for the sim. Altogether I'm
still at least a day or two out from being able to start work on that.
