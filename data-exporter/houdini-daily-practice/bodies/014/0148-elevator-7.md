### 'The Shining' Elevator (Day 7)

I've removed most of the fancy rendering to try to figure out how to get the blood material
"painting" across the scene as the blood simulation splashes across it. This was the first
attempt. The blood material was changed to be translucent, so any red in the scene is actually
from the material I used to represent where the blood paint map will be when I combine it
with the actual materials are reintroduced.

It took about 24 hours to resimulate the blood splash with a smaller particle separation and
slower (20%) time scale, then to re-render it. It's 420 frames, which is up by about 250% from
yesterday's practice. Because of that today's practice only attempts to paint the blood map
using the current frame's blood particle positions, without persisting the blood splatters
from previous frames.

The animation was rendered using a very low ray sample count. The only reason it doesn't look
noisy as heck is because I used a desnoiser on it; but the low ray count is definitely visible
in the output animation, where the splash looks very blurry like plastic rather than a
translucent material like water. Also, for some reason, the lighting changed about 2 seconds
in to the render. Since the rendering wasn't interrupted or restarted, I have no idea what
caused it.

The still frame was rendered using a much larger ray count, and I also enabled caustics to
see what it would look like.
