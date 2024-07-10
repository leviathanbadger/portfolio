### Stormveil Castle (Day 3)

Still greyboxing. Today I:

  - Added walls and arches under staircase. Visible in the fourth-, third-, and second-to-last renders.
  - Improved erosion cobblestone rock generation, added more detail, edge damage, and UVs.
  - Improved banister. Separate details for banister and baluster. Added UVs. Added placeholders for brazier
    bonfires.
  - Added stairs to the right-side platform slope.
  - Improved stairs. Used rectangle shape for steps, not square. Added UVs.
  - Created HDAs for stairs, erosion cobblestones, and banisters. Parameterized many parts in each.
  - Created HDA for world-space UV-projected platform, currently just used for ground on right-side
    platform.

Now that I'm starting to add a lot more detail and UVs, I disabled the random color picker for each primitive.
You can see the detail and depth better when it's all rendered with the same color. Soon I'll start adding
actual materials for each component, but I still have more greyboxing to do before I get into that.
