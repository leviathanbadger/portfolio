### Mardini 2026 - Explode

Today is day 8 of [Mardini 2026][mardini-2026]. The prompt for today is "Explode".

I need practice using MPM for several of the larger projects I plan to make, and
the 'explode' prompt seemed perfect to experiment. Unfortunately, time constraints
made it very hard for me to iterate on this and fine-tune the simulation and
everything. So the end result is probably going to be pretty ugly.

New things:

- MPM simulation with custom forces via POP Wrangle, rather than just intersecting
  animated geometry. I've restarted the simulation about two dozen times already,
  and it's getting late. I'll have to spend a bunch of time on it after the sim
  completes as well, so eventually I'll have to cut my losses and use whatever my
  latest simulation produces.
- MPM Post Fracture SOP and MPM Deform Pieces SOP, another method of converting MPM
  simulation results into geometry. This method *should* produce more stable (less
  jittery) animated results since the output topology isn't as dependent on exact
  particle position as the MPM Surface SOP (or the old Particle Surface SOP.)
- MPM Debris Source to drive the input of a secondary debris POP simulation. This
  part I may end up canceling due to time constraints.
- More practice with the Drop & Render cloud renderer. I chose to because it took
  so long to simulate, and I have to free up my computer today to work on later
  Mardini projects. It cost about $72 to render it remotely. It rendered within
  about ten minutes, but then it took about ten hours to download. For some reason.

HDRI is from GreyscaleGorilla.

My entry post is [here][entry-post].

[mardini-2026]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2026/
[entry-post]: https://www.sidefx.com/forum/topic/103299/?page=1#post-455038
