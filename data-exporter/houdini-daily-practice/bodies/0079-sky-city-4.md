### Sky City (Day 4)

Today's work:

* Generate bridge planks, instead of just sweeping the top. Includes planks
  with variable lengths.
* New generation algorithm for the rope bridge knots. Allows for use of UVs
  while using about half of the poly count.
* Improve generation of all HDAs to remove extraneous attributes and groups
* Ensure all primitives have UVs and normals assigned
* Optimize polygon count for rope bridge (slightly). Down from ~510,000 to
  just under 350,000. So still egregious, but not as awful.
* Start to import the scene into the solaris context so I can begin work
  adding materials, cameras, and lighting. This work is just beginning.
  I need to learn more about assigning materials to objects in a larger
  context (such as a big scene like this) as opposed to for simple scenes
  with one or two objects.

To do still:

Well... lots. But in particular what I'm concerned about doing in the next
few days of practice:

* Create HDA to generate floor so the banisters have somewhere to sit.
* Add variation in banister railing and balusters.
* Improve resolution of baluster geometry.
* Create and assign materials for everything in the scene so far. This
  includes work to ensure the geometry is properly labeled so it can have
  materials assigned automatically; and ensuring the UVs are generated
  in a sane way so I can provide textures to map to the geometry.
* Create a low-effort version of the rope bridge that doesn't require
  a simulation so artists/level designers can see where the bridge
  would be placed in real-time without resetting the simulation.
* Begin work on building generator tools, as well as lots of decorations.
