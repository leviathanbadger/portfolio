### Alchemy Lab (Day 3)

I'm getting back into Houdini practice using the [Nodevember 2024][nodevember-2024]
prompts. Although the prompts are meant to be completed in two days, I'm taking a more
leisurely approach and spending a week on each prompt to ensure I don't burn myself
out practicing while working full-time. This is the first day of the first prompt,
"Alchemy Lab".

Today I:

  - Added UV generation and explicit normals to all of the scene. This would have been
    a lot harder if I hadn't done the heavy lifting yesterday. Even so, I didn't quite
    get around to creating materials that actually _use_ the UVs yet, with the exception
    of the floor.
  - Simplify and improve bookshelf and door generation by detriangulating coplanar faces
    into n-gons. This makes the resultant meshes simpler and cleaner when performing, for
    example, boolean operations on them.
  - Improve ceiling beam generation by using a custom curve for the beam profile, rather
    than a simple rectangle. It has beveled edges now and doesn't extrude as much from the
    ceiling, which makes it look a bit more better IMO.
  - Generated a complex tile pattern for the floor in copernicus. This was significantly
    more complex than I expected, and I had to do a lot of trial-and-error to get it to
    work. I'm not completely happy with it yet, but I do like the general look of it.
    I'll probably tweak it in subsequent days, but if I want the project to be finished
    I need to create materials for everything else and actually put stuff on the shelves
    and table. (Esp. lighting with candles.)

[nodevember-2024]: https://nodevember.io/prompts/2024
