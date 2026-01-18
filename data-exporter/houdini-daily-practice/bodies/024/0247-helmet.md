### Helmet

This is the seventeenth prompt of the [Nodevember 2025](https://www.nodevember-2025.com/),
"Helmet".

I'll return to the 2024 prompts later, but since I skipped nodevember this year in
favor of writing 30k words in November, I'm going to go to the 2025 prompts and do
the 2024 prompts later.

I've been having difficulty returning to practice lately, and I eventually realized
that in part it's because I'm getting paralyzed by how much work it is to do a single
daily practice. So I'm going to limit myself to 2 hours per practice to make it easier to
get started and finish each day. I don't necessarily expect this to work very well,
because I'm a perfectionist, but it's worth a try.

I returned to the [6. Riveted](https://brandonslade.me/houdini-practice/236) I started
almost two weeks ago. This time I focused on:

- Clean up of the nodes (deleting accidental leakage of groups/attributes used in
  construction but irrelevant or useless for anything after)
    - Last time I mostly had fun, and didn't bother to take care of this. But if I'm
      going to keep coming back to this I can't afford to let this build and build until
      it's no longer feasible to work on it at all.
- Creating space-accurate packed and deintersected UVs for the entire model. For this, I
  used the UV Flatten SOP (for placing UVs on a model with manually-placed island seams)
  and the UV Layout SOP (for taking a lot of geometry with intersecting UV islands and
  deintersecting them, as well as transforming them to be more consistent with each other
  when compared to world-space coordinates of the same vertices, and finally packing them
  tightly in UV space in preparation for texturing and other material work.)
    - Believe it or not, I've never used either of these SOPs before, so all of this work
      was entirely new. The reasons for that are
        1. the UV Flatten SOP is almost entirely manual, and I prefer more
           dynamic/automated solutions;
        2. the UV Layout SOP is already taken care of by most other methods of generating
           UVs, so it hasn't been a real issue before; and
        3. in almost all of my projects, even complex models can be cleanly broken into
           different materials before render, so I can create a separate material for the
           different parts, making this unnecessary.
    * In this project, it'll eventually be one character which may be animated or exported
      in various ways that makes it infeasible (and maybe even undesirable) to have
      separate materials for different parts; so there has to be a singular, unified UV
      space with no intersections.
* I reset the transformations for all of the model parts I'm working on and started
  building a rest pose instead (including temporary/work-in-progress skeleton). I have to
  do this before I start connecting the pieces because otherwise I won't be able to rig and
  animate it. And honestly it's probably easier to model this way anyway.

It took about 3.5 hours, which is sad considering how little *appears* to have changed. But
again, this project isn't an art piece and likely won't be until I have 4-5 more sessions
like this. There's too much more to model before I can even start to create materials for
it, let alone rig and pose/animate it.
