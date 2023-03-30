### Mardini 2023 - Fantasy

Today is day 30 of [Mardini 2023][mardini-2023]. The prompt for today is "fantasy".

The idea was to create an alien landscape that doesn't conform 100% with established
laws of physics. It isn't the render I originally planned to do for the fantasy
prompt, but I feel it is fitting for one of the last practices in Mardini. In many ways
it builds on what I learned from the rest of the month, combining the technical aspects
of many of them and pushing them further.

This practice was fairly difficult. It's likely the most technically intensive practice
of the month.  While I still feel it's amateur work, I'm proud of it because I would
_not_ have been able to do it at the beginning of the month. I'd have spent several
days' worth of effort in order to create a significantly worse result.

The seed of the idea was to create a landscape that wrapped around on itself, looping
in a way that suggests gravity itself is inverted on the "roof" of the cavern. Since
the heightfield tools don't have a looping noise (or not one that I could find) I had
to get creative with heightfield masks, noise, and distortion in order to ensure I could
bend the generated mesh around and have a clean seam. You can probably tell where the
seam is if you look closely enough, but at a casual glance I feel I've accomplished
the goal.

The "otherworldly" aspect would have been better if there were more obviously inverted
features visible (such as upside-down buildings) - the crystal and bulb tree structures
I created are too alien to cause the same reaction - but I know from experience how
difficult it is to model a realistic-looking procedural building. I will likely come
back to this project later and attempt to add buildings, ruins, people or creatures,
or other structures to further this goal.

The dog is there for scale. I purchased the model and animation, I didn't model and
texture him myself. I was going to cut him out of the final render, but after a while
I decided to leave him in because he can hint at a story that just the alien landscape
doesn't convey on its own.

While I didn't animate the dog sit/idle animation myself, I _did_ learn to use the
"MotionClip", and "MotionClip Evaluate" KineFX SOPs to repeat tail wag animation. It's
less than two seconds otherwise, and I wanted the animation to continue indefinitely
in case I decided to animate the scene. (I did end up doing that, more on that later.)

The next step was to create features and scatter them around the terrain - using the
scatter tool that I so magnificently failed at in the previous render. This one turned
out better, in part because I made sure to keep the scale visible while I was modeling
it, and in part because it's an alien landscape, so things are supposed to be a bit
wonky anyway.

The crystals were fun. Each crystal shard is completely unique, and each crystal
cluster is shaped uniquely as well. I probably _should_ just make 20-30 and instance
them in position, but it's more fun to know that they're all dynamically created.
Even if there's functionally no difference since most are too small to make out
details anyway.

I used a vellum sim to create the trees, so each one bends and sways as if in a wind.
But I also wanted to have variations and collision detection in the bulb trees, so the
simulation ended up being _gigantic_. As in, hundreds of thousands of bulb trees. Even
my computer isn't beefy enough to do that in less than a few days (or more), so I
compromised by rendering a "sample" tree that I instance at every point beyond a
certain distance from the camera, and all of the closer trees are unique and part of
the large-scale vellum sim. Took about 3 hours to simulate, and it's stored on disk in
about 120 GB of space. If I come back to this I'll probably just create 20-30
variations on the sim, then randomly choose between them, even if it means there might
be collisions.

The trees were meant to be the only source of light for the scene (since there's no
traditional "sky" and therefore no obvious way to illuminate the landscape). However,
although I was able to make the geometry emissive, I wasn't able to light the scene
to my satisfaction using just the trees. For the renders, I ended up randomly
scattering point lights (using a LOPs instancer node). It mostly gives good results,
although I regret the trees not appearing to be as emissive any more. Also it
creates some artifacts with the fog.

Speaking of fog - one issue I ran into was that although I had a scale guide (the
dog), the render still didn't appear to have any depth. Since everything is alien
anyway, variations in size of different structures (the trees and crystals) didn't
really translate to immediately understanding how far away something you're looking
at is. So I added fog to artificially increase the light attenuation. It looks...
fine. The main problem is that the point lights are visible in the fog, which
you could say makes it otherworldy, but really just makes it look like I scattered
point lights randomly. Which I did. But I did learn how to use camera frustum volumes
(which Karma XPU doesn't support yet) and the "Karma Volume" LOP (which Karma XPU
_does_ support, thankfully.)

High-quality renders, with the best settings and a high resolution (4k) took between
1.5 and 2 hours. 1.5 hours for a render without fog, and 2 hours to add in the fog.
That's with Karma XPU, by the way. Not a CPU render. There's also a short animation
I want to render, but although I'm doing it at a lower resolution and much worse
render settings, I anticipate it will take several days to render the whole thing.
Since I have one more Mardini practice to do in the next few days, and I don't know
how long that will take, I'm most likely going to submit one of the high-quality
still images for the competition.

Things that can be improved:

- More variation in terrain texture. The "mowed grass" look does work for this render,
  but I feel it's too much of the same thing.
- More types of scattered features - not just macro details like crystals and trees,
  but micro details like rocks, shrubs, and flowers.
- Birds, beasts, all manner of creatures. Fantasy-related, of course. Maybe a dragon.
- Maybe add horns to the dog? Because why not.
- At least one more type of macro detail - maybe buildings of some kind, or maybe
  crop-circle type magic shenanigans.
- Basically, the scene needs more variation.
- Maybe having a river or stream would help with the otherworldly feel.
- Add grooming/simulated fur to the dog. Because the default texture is fine, but
  falls apart in high-res renders or upon closer inspection.
- Revisit lighting the scene using just the bulb trees.
  - Alternatively, create some kind of visible suspended "celestial body" in the
    sky. Maybe not a sun itself, that seems like it'd just look ridiculous, but if
    I could figure out how to model and render a kind of "tear in reality" to a cosmic
    skyscape or something, that could look good. Maybe.
- Probably lots more that I though about while working but never jotted down.

Well, this one was long-winded. I guess they scale in conjunction with the technical
complexity of the practice? That's a hypothesis based on an anecdote, but it feels
like it's probably true. And I'm still rambling on. I guess I'm feeling talkative
right now.

Anyway... animation pending.

My entry post is [here][entry-post].

[mardini-2023]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2023/
[entry-post]: https://www.sidefx.com/forum/topic/89620/?page=1#post-388946
