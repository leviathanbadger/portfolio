### Beverages (Day 2)

I added another type of drink to the display. This was a mango-flavored
juice. The bottle itself was simpler to render than the root beer bottle,
especially after the practice of rendering the root beer bottle, but the
technical difficulty came in attempting to reuse the same shaders for both
types of bottle.

I don't want to inundate the gas station project with tons of different
shaders for each individual type of beverage, so I reworked the shaders
that I made yesterday to accept various parameters so I can determine
the liquid and bottle color, transmission, subsurface, and other values
at the time the bottles are modeled.

A couple of small issues with today's work. First, the bottle cap isn't
translucent in the way I want it to be. I'm not sure how to get it to look
like the reference image. Also, there's artifacting on the juice bottle
surface that's facing directly at the camera. I'm not sure why or how to
fix it.

I spend a small bit of time improving the root beer label and bottle
texture as well. Additionally, I've started splitting out the bottle
generators into HDAs.
