### Roller Coaster (Day 2)

Continuing the roller coaster project I started yesterday.

Hoo boy, there are so many changes here. It was really fun to work on this.

* Fixed UVs and normals for all geometry
* Moved tool into HDA, and added options to control various parts of the generation,
  including controlling the output geometry quality (low, medium, high). For this
  example coaster, the low poly version has ~16,000 polys. The high-poly version has
  ~480,000.
* Added terrain and a rock feature to fill out the scene.
* Added support for using a custom mesh for additional collisions to prevent support
  pillar generation. (See the rock feature for an example).
* Added support for using a custom mesh for the ground collider. If you don't provide
  one, it still assumes the XZ-plane at Y=0. (See the grass landscape for an example.)
* Cleaned up support pillar generation by deleting pillars that are too close to each
  other physically, even if they don't actually intersect.
* Added MaterialX materials for the Karma renderer for all objects. Including materials
  with displacement (rock, grass, concrete support bases.)
* Add cameras and lighting (including HDRI) to the scene.
* Rig actor to follow the track, then rig the camera to follow the actor, so I can
  render out a full animation of the camera following the track. (Constant speed along
  all of the track, rather than simulating a car following the track as I originally
  wanted to.) This animation has 566 frames and took 3.5 hours to render because I was
  able to render it with the XPU render engine.

I'm done for now, but if I ever come back to it I'd like to:

* Add motion blur to the coaster simulation camera. (Not sure how to do this because
  it's the camera that's moving, not the track or anything else.)
* Simulate an actual cart on the track, including speeding up or slowing down due to
  gravity on track slopes. (I've never made my own simulator before, not sure how to
  do this either.)
* Add more decorations in the distance. Trees, rocks, other rides, roads and paths.
* Add a loading station where passengers embark/disembark.
* Model a roller coaster cart in the station, and another on the track.
* Create smarter way to position support pillars so that 1. there are fewer long
  sections of track without any support pillars, and 2. sections of track that
  can't have vertical support pillars (such as the top of loops) have other types of
  support (maybe a vertical pillar on the side with an arm reaching in to brace it).
* Add support for wooden coasters. (This one's harder, primarily because the support
  structure for wooden coasters would be hellishly difficult to create.)
* Add a water feature under the coaster.
* Correct small visual issue starting around frame 90 of the animation. It's a problem
  with the generation, not the animation, I'm just noting it here so it's easy to
  find in case I come back.
