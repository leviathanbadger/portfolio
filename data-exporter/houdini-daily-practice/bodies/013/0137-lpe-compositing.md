### LPE Compositing

Took a bot more than a week off of practice because I got a bit burned out due to Mardini,
but now I'm recovering so I wanted to try something that I've thought was possible for a
while, but didn't have the knowledge to do before now.

Specifically, I wanted to represent shadows using a screen-space pattern, rather than
using a realistic light falloff as all of my previous renders have used. This is a
challinging thing to do for a number of reasons.

First, casting "shadows" that aren't representable by materials and can't be modeled with
ray-tracing techniques means I first need to render the scene with a bright ambient light.
However, Solaris and the Karma renderer don't have a concept of ambient lighting. I
managed to get something close by using a dome light with shadows disabled. (That's an
option that I didn't know existed.) Additionally, because I don't want the ambient light
(which is actually a dome light) to create any specular reflections, I had to change the
light's "contributions" parameter to "diffuse".

Next, because the ambient light had to be subtracted from the other lights in order to
determine how much to shade the scene, I had to get the renderer to emit a separate image
for the ambient light, rather than only having it baked into the beauty pass. This was
easier than expected, I only had to create an LPE tag for the light and the renderer
automatically created an image layer that I could use as the base color, before applying
shadows and specular highlights.

Getting the renderer to emit more layers for the combined diffuse and specular combination
colors was pretty easy, there's a checkbox in the "Karma Render Settings" node that's
usable for this purpose. The same applies to the depth buffer, which has a setting in
the "ray level output" section in the same node.

Finally, I had to learn to use several new nodes in the COPnet in order to actually
composite all of the layers together. Apparently you can get the original beauty pass
by simply screening all of the LPEs together, but to do something more complex I had to
figure out what the images meant a little better. Specifically, I hadn't realized
that instead of getting a mask for shaded areas, I had a bunch of masks for lit areas.
They also weren't directly related to the ambient light I had output separately.
Eventually I ended up screening all of the lights together, then subtracting the result
from the ambient light layer, getting me a value I could use to subtract a generated
stripe onto the image.

One side effect of doing it this way is that I dropped most of the specular hightlight
information I had. Maybe I could have gotten the specular hightlights to look good with
the custom shading I was already doing, but honestly the flat look works well in the end
result, in my opinion.

I tried to make the stripes more or less pronounced based on the depth, but I don't think
I managed it. You can't tell I did it in a still image. We'll see if it shows up better
in the animated camera pan.
