### Alchemy Lab (Day 5)

I'm getting back into Houdini practice using the [Nodevember 2024][nodevember-2024]
prompts. Although the prompts are meant to be completed in two days, I'm taking a more
leisurely approach and spending a week on each prompt to ensure I don't burn myself
out practicing while working full-time. This is the fifth day of the first prompt,
"Alchemy Lab".

I finally added lighting. I always underestimate how much better the scene will look
with lighting, but also how difficult it is to properly light the scene so it looks
good.

Although I'm not done with the alchemy lab, I _think_ I'm going to stop here for now
and move on to the next prompt. It's been a week, after all, even though I skipped
a few days. I have a timeline to keep - and the prompts are only meant to be two days
in the first place.

Today I:

  - Added a sun/"gold" alchemical symbol chalk drawing to the table using copernicus.
  - Added a metal crucible object placed on the table. I don't love it, but I can't
    afford to keep being as picky as I have been so far if I want to finish this project
    in a reasonable amount of time.
  - Added a magical burning flame directly on the table below the crucible. I considered
    making a burner instead of having the flame come directly from the table, but I
    actually like the magical effect of having the flame come directly from the table.
    The main problem for now is that it's now the only real, finalized source of light
    in the scene, and it's not very bright. So I scattered a bunch of bowls around in
    various places as placeholders for candles, then instanced point lights above them.
    I also had to add a few stronger point lights inside each room because the diffuse
    bounces from the fire and candles were not lighting the rooms enough. The _other_
    problem is that I actually don't have a lot of experience with simulating or rendering
    fire in Houdini, so it isn't as art-directed as I would like.

New stuff:

  - I used the "extrapolate boundaries" node for the first time. I learned about it by
    accident, and I've apparently been very lucky to have not needed it until now. For
    any of my projects.

[nodevember-2024]: https://nodevember.io/prompts/2024
