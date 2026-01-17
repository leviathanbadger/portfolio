### Drone

This is the sixteenth prompt of the [Nodevember 2025](https://www.nodevember-2025.com/),
"Drone".

I'll return to the 2024 prompts later, but since I skipped nodevember this year in
favor of writing 30k words in November, I'm going to go to the 2025 prompts and do
the 2024 prompts later.

I've been having difficulty returning to practice lately, and I eventually realized
that in part it's because I'm getting paralyzed by how much work it is to do a single
daily practice. So I'm going to limit myself to 2 hours per practice to make it easier to
get started and finish each day. I don't necessarily expect this to work very well,
because I'm a perfectionist, but it's worth a try.

I was going for a "Mr Incredibles terminated" scene, with the drone scanning the area
in a full 360 before moving on. So that's a few new interesting ways of using the animation
editor, ray casting, motion blur on rendered points and curves, and emissive materials.
I'm four hours in right now and finally rendering my test frame to make sure it comes out
the way I expect on a full render (not just in the editor.) If that goes well then I'll
render out the full animation overnight. Hopefully it completes in time.

I didn't put almost any effort into the drone itself, because I knew the scan animation
and render would take the majority of the time and effort for this project. So you'll
have to forgive the ugliness there. Still, I did experiment with a few new properties of
the Twist SOP, so it's not a complete waste. I'm really beginning to think I should just
bite the bullet and start allowing myself to use purchased assets for parts of a scene
that I don't want to deal with myself on future projects.

One of the biggest issues with this render is that I didn't really consider how the scene
would be lit. I suppose I was assuming that the emissive materials on the drone would
provide enough illumination, but I know from experience that emissive materials don't light
scenes well on their own unless they're from a very large geometry. Even if you crank up
the emissive strength, the renderer doesn't send enough light rays to it. The few that do
magically make it there cause a huge amount of noise because you have individual samples
that are well lit, and the rest are not. So, at some point I just made the water in the
scene into an emissive toxic sludge material since nothing else I could think of doing
would be a believable light source without significant effort modeling additional geometry
for it to come from.

Finally, I add some striations on the cave wall material, and then threw in some fog for
the heck of it. What story am I trying to tell now? ...I don't know. But I'm sure it's a
good one!

The end result is... actually very nice looking, in my opinion. The colors are very one-note,
and I don't know how it'll look with the full animation, but individual frames look very nice
already because of the motion blur and the way the emissive materials in the scan lines
interact with the fog and the toxic sludge.
