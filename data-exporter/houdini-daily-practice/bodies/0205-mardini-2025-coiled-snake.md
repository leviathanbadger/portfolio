### Mardini 2025 - Coiled Snake

Today is day 13 of [Mardini 2025][mardini-2025]. The prompt for today is "SCALES",
in the SOPS category.

For this project, I created a coiled "snake". That's in air quotes because it's modeled
as a really long, skinny tube; there's no head, and I was careful to select camera
angles that don't display the ends so you can't really tell. So it really wasn't
difficult to model. The only complexity to that was using Vellum to run a softbody
simulation so that the coils of snake settle onto each other and compress just right
so they don't look like perfect tubes. It's a subtle effect that I think most people
won't really notice unless they look for it, but it really makes a difference in
the outcome of the render.

New stuff:

  - I actually had a very difficult time creating the scale pattern in COPS, because the
    way I wanted the scales to be shaped the Tile Pattern COP really didn't want to create
    a seamless texture, and for how long the snake is it really had to be or it'd be very,
    very obvious where the seams were. Eventually I found a pattern that looks right, but
    the IDs were still off on the seams, so I just created a colorless texture in COPS and
    colored the scales differently using some fancy math in the shader itself. The end
    result is fantastic in my opinion - better than I could have hoped, considering the
    amount of time I put into it. Everything on the rendering front worked out basically
    on the first try, which I guess means I'm getting better.
  - I'll shout out the vellum simulation again. I'm getting pretty good with vellum, but
    this simulation I used a pressure constraint to treat the snake like a "balloon" so
    that the shape stayed relatively rigid as it was moved around. This is only the
    second time I've used the "configure balloon" constraint combination, so it took
    some fiddling to get the effect I was going for.

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[entry-post]: https://www.sidefx.com/forum/topic/100122/?page=1#post-440120
