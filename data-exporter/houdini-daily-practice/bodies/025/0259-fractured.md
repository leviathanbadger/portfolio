### Fractured

This is the twenty-ninth prompt of the [Nodevember 2025](https://www.nodevember-2025.com/),
"Fractured".

I'll return to the 2024 prompts later, but since I skipped nodevember this year in
favor of writing 30k words in November, I'm going to go to the 2025 prompts and do
the 2024 prompts later.

I've been having difficulty returning to practice lately, and I eventually realized
that in part it's because I'm getting paralyzed by how much work it is to do a single
daily practice. So I'm going to limit myself to 2 hours per practice to make it easier to
get started and finish each day. I don't necessarily expect this to work very well,
because I'm a perfectionist, but it's worth a try.

It's going to be an idyllic scene of a quaint church combined with graveyard. Then an
earthquake strikes, and a huge rift opens up and destroys the church, swallowing most of
it. I did four hours today, and I'm at a stopping point.

Is it overscoped? Uh, yes. Obviously. But in my defense I knew that going into it today.
I had this great idea last-minute just as I was about to start on a different project, and
it just sounded fun. So today's practice doesn't result in an actual art piece; it's just
day one of... maybe five? Very optimistically.

- Gravestones are from the [March 30 practice](https://brandonslade.me/houdini-practice/222)
  from Mardini 2025. (This one won third place for that day.) I revisited the practice,
  cleaned it up a bit, and turned it into a reusable HDA.
- Camera screen shake will be from
  [Nodevember 2025 day 24 (warp)](https://brandonslade.me/houdini-practice/254)
- Using heightfield tools for the terrain/hill.
- Will use MPM for the main simulation, and POP for downstream particle simulation for
  finder debris detail.

Still to do:

* Adjust gravestone HDA
	* Generate tombstones so that it goes into the ground more so they don't fall over
      immediately when added to an MPM sim
	* Also add UVs
* Add more detail to the church.
	* Door, windows, etc.
	* Also add UVs.
	* Create low-poly version for sim and high-poly version for deformation after the sim.
	* Need to make sure it's broadly completed, in shape, at least enough that I won't
      need to rerun the MPM simulation if I want to make small changes to it.
* (Probably) Scatter grass and shrubs and rocks throughout the scene. Rocks at least should
  be part of the simulation. If I keep the grass and shrubs small, maybe I can get away with
  just remembering where they're 'planted' and transforming them to match the simulation
  output. They'll clip, but hopefully not egregiously.
* (Possibly) add a fence circling the church
* Run MPM simulation with bedrock + sediment + tombstones + rocks + fence. Use course
  resolution for MPM particles, and low-poly church.
* Use post-MPM-sim fracture workflow to retroactively fracture the high-poly church and
  deform it like the low-poly simulated version.
* Use MPM sim output to drive a debris source SOP as input to a POP particle sim for smaller
  chunks of dirt and smashed building pieces falling into the abyss.
* Create materials, with COPs for textures in many cases
	* Church walls
	* Church roof
	* Church floor (if visible in post-sim animation)
	* Church steeple/cross
	* Tombstones (with several variations, but probably no attempt to add text)
	* Rocks (if applicable)
	* Grass (if applicable)
	* Fence (if applicable)
	* Terrain
		* Use MTLX Mix node to procedurally mix a different material for the path and the
          normal ground.
		* Not sure how this will work with MPM sim output.
	* Debris
* Add sky/sunlight
	* Make sure sky light doesn't shine through chasm, either from the sides or bottom
* Configure camera
	* Add camera focus distance and depth of field (narrow aperture).
	* Slight chromatic aberration and tint.
	* Add and adjust screen shake
    - (Maybe) add film grain in slap comp
* Make sure per-object motion blur functions correctly for everything
* (Maybe) add heightfield for distant hills/mountains
	* Use slap-comp to drive desaturation based on distance
* (Maybe) add light fog to chasm and shine bright red light up from the depths. Chasm to hell?
* (Very maybe) add some trees to break up the horizon in the middle distance. Will this look
  weird if they don't bend and shake with the rest of the quake?
* (Very maybe) play around with Solaris component builder and render purposes to optimize large
  scene. Proxy for editing quickly, high-res with better settings for actual render
* (Very maybe) add clouds
* (Very maybe) use PDG/TOPs to create multiple MPM sims with different material parameters and
  choose the one with the best output.
* (Very maybe) try to add some manual macrodetail.
	* Flowers in front of a few of the gravestones
	* Litter on the ground
	* Birds flying overhead
	* Etc.
* (Very maybe) create alternate animation where the camera falls over during shake and 'films'
  the rest at an oblique angle.

For the next practice I'm going to do the last Nodevember 2025 prompt, before returning to work
on this again. However, I don't know if I'll be able to do another practice until this weekend
due to having family in town. Also, I've given up on my self-imposed two-hour limit. It didn't
work at all anyway.
