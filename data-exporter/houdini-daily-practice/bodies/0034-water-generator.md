### Water Generator

This is the second time attempting something using a flip simulation (used for
water simulations.) The first was attempting to create moving water for the
water bodies in the [candy cane forest][candy_cane_forest] practice, but I
aborted that effort due to time constraints.

This practice session was almost a complete flop. I can't figure out why,
but none of the interactive parts of the simulation are working with each other
correctly.

- The water particles don't even touch the static geometry, they just
  move right through, no matter what I do to try to fix it.
- The water simulation, which is already on an extremely small scale,
  takes an incredibly long time to simulate each frame, although I'm
  using a decently high value for particle separation.
- When I configure the spinny thing to collide with the water
  (one-directional) it jerks and bounces around, rather than spinning
  around the hinge constraint I've attached to it.
- When I configure the spinny thing and the water to both interact
  (mutual collisions) the simulation freezes when the water first touches
  it and never resolves. I have to cancel it to keep working.

I'm discouraged, I think I'll avoid creating my own water simulations except
to follow tutorials for a while.
