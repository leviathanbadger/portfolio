### Monument

This is the twelfth prompt of the [Nodevember 2025](https://www.nodevember-2025.com/),
"Monument".

I'll return to the 2024 prompts later, but since I skipped nodevember this year in
favor of writing 30k words in November, I'm going to go to the 2025 prompts and do
the 2024 prompts later.

I've been having difficulty returning to practice lately, and I eventually realized
that in part it's because I'm getting paralyzed by how much work it is to do a single
daily practice. So I'm going to limit myself to 2 hours per practice to make it easier to
get started and finish each day. I don't necessarily expect this to work very well,
because I'm a perfectionist, but it's worth a try.

Four hours! And I promised myself today would be different... oh well, there's always
tomorrow.

It's the [Oldest House](https://control.fandom.com/wiki/Oldest_House) from
[Control](https://www.remedygames.com/games/control) (the video game by Remedy). Just
the front entrance, of course. I'm not sure it classifies as a monument, per se, but
the austere construction definitely makes it seem like one. I was specifically going for
a shot of the front seen in the
[trailer for the sequel](https://youtu.be/WhQm-ExRz60?si=03L3LzZUHlcAWBPh&t=61), Control
Resonant. But I had to reduce scope drastically.

The effort was split roughly 30-70. 30% modeling the building and environs, 70% setting
up the materials/camera/lighting/lookdev/etc. for the render. The materials are very
complex compared to what I normally go with, but in part that's because I cut out the
texture baking in COPs and just went with entirely procedural materials. I'm going to
have to walk that back if (when?) I come back to this because there are plenty of
texture details that can't be made procedurally at runtime very easily (if at all) --
particularly grunge maps, blood stains, and other decals.

From a technical perspective there isn't much _new_ in this practice, which I generally
try to avoid, but that's largely the nature of this type of scene. It's very blocky. Not
a lot of places to experiment with. There are a lot of smaller details that I had to cut
due to time constraints that will require more experimentation. Scattered debris,
shattered glass, fire hydrant, fences and abandoned trash bags, dead bodies and blood
stains... ah, yes, I've got my work cut out for me still.

Aside from that... there's one lighting issue that I haven't figured out yet. For some
reason, the top right corner of the overhang is getting lit from the right. And, uh, it
shouldn't be. Because the only light in the scene is the sun, which is casting shadows
from the left. And I don't know where the light from the right is coming from.

I also have a few issues related to displacement of sidewalk cracks/building concrete
slabs. They're too pronounced because I played around with them with lower quality
settings and when I rendered with higher quality it diced the geometry better, which
made the shadows much harsher and caused a few small holes in the render between the
stairs and the sidewalk.
