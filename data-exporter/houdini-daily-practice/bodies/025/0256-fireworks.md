### Fireworks

This is the twenty-sixth prompt of the [Nodevember 2025](https://www.nodevember-2025.com/),
"Fireworks".

I'll return to the 2024 prompts later, but since I skipped nodevember this year in
favor of writing 30k words in November, I'm going to go to the 2025 prompts and do
the 2024 prompts later.

I've been having difficulty returning to practice lately, and I eventually realized
that in part it's because I'm getting paralyzed by how much work it is to do a single
daily practice. So I'm going to limit myself to 2 hours per practice to make it easier to
get started and finish each day. I don't necessarily expect this to work very well,
because I'm a perfectionist, but it's worth a try.

This prompt was pretty obvious. I've been looking for reasons to practice using a POP
network for a particle simulation, the prompt is literally named after one of the user
stories for a particle simulation... so here it is. The fireworks particle simulation
to end all particle simulations. (Not really, but it *is* only my third or fourth time
attempting to make a particle simulation in Houdini so I'm going to give myself the win
despite the somewhat derpy outcome.)

New things:

- POP network with particles spawned from other particles
    - POP Source - sourcing of the initial particles (the actual fireworks that shoot up
      into the sky in this case.)
    - POP Replicate - sourcing of the particle trails behind the initial particles, or
      the initial particles exploding into further particles.
    - POP Wind/POP Gravity - forces that affect each particle after they've been created.
      Wind is used with noise to create some local variation, rather than attempting to
      simulate actual wind.
    - POP Color - choosing a random color for the fireworks. Color is inherited, but this
      node takes effect each frame so it's necessary to limit this to just the originator
      particles.
    - POP Group/POP Wrangle - Group particles together by a property (such as 'about to
      die') so that other nodes can affect only a subset.
- Retime SOP again. I was attempting to make a good motion blur, but I didn't realize that
  at this scale the particles aren't actually moving fast enough to make a good blur. Ah
  well. Live and learn.
- Karma Physical Sky LOP - night time with custom sky tint. Mostly necessary because I
  wanted to have the mountain silhouette in the background, which I spent maybe 10 minutes
  on.
- Render gallery - since I don't have a good visual memory, I was having a hard time
  adjusting the particle properties and feeling like there was a difference in the render.
  So I finally bit the bullet and learned to use the render gallery to save snapshots of
  partial viewport renders.
