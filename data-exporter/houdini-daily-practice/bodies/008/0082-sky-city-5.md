### Sky City (Day 5)

Today's work:

* Miscellaneous fixes for the banister HDA:
  * Ensure banister handrails have UVs generated on the end caps.
  * Allow banister HDA to generate across disconnected polylines within the
    same geometry.
  * Clean input geometry using "sort" and "facet" SOPs to align point order
    to the vector winding order, and to remove inline points that are
    typically an artifact of using a bezier curve when you intend to create
    a polygon.
  * Inset banister using proper trigonometry (SOH CAT TOA for the win) to
    avoid issues with odd banister angles due to sharp corner angles.
  * Add option to configure output geometry quality (low, medium, high).
    High-poly balusters no longer have visible normal issues.
  * Ensure banister handrail is emitted as a packed primitive to ensure
    it can be assigned a material correctly.
  * Add second (optional) output to support generating the collision geometry
    for the handrails at the same time. Collision geometry height can be
    configured independently of the render geometry height.
  * Correct generator so that the handrail no longer generates _above_ the
    "height" parameter of the railing.
* Created an HDA to generate wooden plank floors so the banisters actually
  have somewhere to sit. Includes a large number of configuration options
  for generating the planks so you can customize the generation to fit the
  space. The UV coordinates are a bit weird here. Uses the PolySlice tool
  that was introduced in Houdini 19.0 under the hood.
* Switch output of all HDAs to be named packed primitives for ease of
  assigning materials.
* Add better lighting (including HDRI for environment light.)
* Create materials for all objects in the scene.

To do still:

Firstly, I'm starting to get burned out on this project. I want to spend
more time learning about the new Houdini 19.5 features. But once I get back
to it (if I do) then this is what I'm concerned about doing next:

* Add variation in banister railing and balusters.
* Create and assign materials for everything in the scene so far. This
  includes work to ensure the geometry is properly labeled so it can have
  materials assigned automatically; and ensuring the UVs are generated
  in a sane way so I can provide textures to map to the geometry.
* Create a low-effort version of the rope bridge that doesn't require
  a simulation so artists/level designers can see where the bridge
  would be placed in real-time without resetting the simulation.
* Begin work on generator tools for buildings, as well as lots of decorations.
* Better way to generate UVs for the banister handrail.
