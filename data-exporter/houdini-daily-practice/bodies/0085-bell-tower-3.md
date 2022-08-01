### Salmon Run Bell Tower (Day 3)

Doesn't look like I did much today, but that's because today I primarily
worked on the FLIP fluids water simulation for the water feature at the
base of the tower. Water simulations are stupidly expensive in terms of
CPU and processing time. After I set it up I had to wait five hours for
the simulation to complete.

What I did:

  - Add water feature, with water sim.
    - The material I created for the water looks... not great. But
      I'm not really sure how to make it better, and it doesn't look
      _bad_ per se.
  - Switched to using generic material for tower floor under the bells
    because nobody likes brick floors. It looks wrong.
  - New way to generate tower body model by deleting all but one side,
    then replicating it around the center four times.
    - Solves issue of having a different UV range for each side of the
      tower. Originally I was going to try to customize the shader to
      tint some of the bricks at the bottom a darker red to indicate
      they were wet. Didn't have time to do this today, but I'm not sure
      if I will.
    - This introduced a small issue with a small section at the base
      of the tower not lining up with the sides. Didn't notice until
      render time. Will fix tomorrow.
  - Fix texture mismatch for rock feature normal and roughness maps.

Still to do:

  - Lots more detail on the tower. _Sigh._
    - Brick framing of water feature and marble arch.
    - Add salmon decorative piece at the peak of the tower.
    - Maybe: clean up roof slates ending abruptly at the roof.
  - Fix issue with geometry alignment mismatch at bottom of tower.
  - Add trees, buildings, clouds, other misc decorations to fill out
    the scene.
  - Add more types of ground, make it uneven. Not just infinite tiles
    in every direction, heh.

That said, I might take a break from this project next to work on a water
fountain. I realized during today's practice that this isn't the best
example of fluid simulation. Although it tought me a lot, it just doesn't
look great because it hugs the rock wall so closely. I could honestly have
rendered something similar to this without _too_ much difficulty just by
adjusting the material used for the rock wall itself without simulating
the water.
