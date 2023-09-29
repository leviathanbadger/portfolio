### 'The Shining' Elevator (Day 6)

I'm starting to work on the blood fluid simulation. I don't have a lot of practice with FLIP fluids,
and all of my previous experiments with it have turned out... poor. To add to that, FLIP flud sims are
extremely slow and I don't get an accurate look at how it works until I actually render a few seconds
worth of frames out. I'm also still working full-time. All of this combines to mean that this is going
to be a very, very iterative process.

Today I'm not worried about having the blood flow out of the elevator so much as attempting to get a
good collider going for all of the objects in the scene, and getting a 10% effort 70% quality blood
material going.

Based on prior experience with FLIP fluids, I fully expect the actual fluid sim to be crap. Extremely
jittery, probably flaky, glitching through meshes, getting stuck on things... all of the problems I've
already dealt with in pretty much every water sim I've done before. But again, the idea is to solve
each of these problems iteratively. So today gets me the baseline, and then in the future I can work on
each problem and grind out the issues one at a time.

That said, my intention for tomorrow is actually to work on a procedural texture that will allow me
to "paint" the walls and furniture with blood so that parts of the scene that have collided with the
blood sim remain bloody, even after the particles themselves move elsewhere.
