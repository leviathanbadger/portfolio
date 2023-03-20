### Mardini 2023 - Bulb

Today is day 20 of [Mardini 2023][mardini-2023]. The prompt for today is "bulb".

This one was fun, because the geometry is relatively simple but I got to play around
with 1. emissive materials (again; I'm preparing for a project two days from now), and 2.
PDG/TOPs wedges. I selected five variables to create 2-4 variations on the render settings,
then I used TOPs to output a still frame for all of them. The end result is 384 "frames"
to be rendered, although it's not an animation. They're all the same frame with different
render properties.

I'll select the best 5 or 6 to put on the portfolio site initially, but eventually I
will update my site to allow you to select the variations and see them side-by-side.

If there's one thing I don't like about this project, it's that I couldn't get the emissive
behavior to render as I would have liked. No matter how much I increased the emission value
for the filament in the light bulb, the scene doesn't really get blown out. Ray tracing
doesn't give you a bloom effect as I was hoping to achieve, because the air around the
filament isn't represented. The filament turns completely white, with hard, distinct lines
instead of having the light bloom around it. Increasing the specular roughness on the glass
helps produce the desired effect on the light, but it blurs the other components in the
light bulb, which I don't want. The previous project worked out a little better in this
regard because most of the lights were off-screen so no light bloom is needed.

My entry post is [here][entry-post].

[mardini-2023]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2023/
[entry-post]: https://www.sidefx.com/forum/topic/89435/?page=1#post-387690
