### Mardini 2023 - Flow

Today is day 17 of [Mardini 2023][mardini-2023]. The prompt for today is "flow".

This one was fun. Most of the time I worked on this was using a custom solver, to simulate
the timelines branching off of the sacred timeline (the wavy white one in the middle.)
I spent little effort on modeling the screen or background, because I spent so much
time on the simulation itself.

I believe this is the first time I've used an animated texture in a render, rather than
animating properties on the rendered geometry itself. It was surprisingly easy. In fact,
Houdini's custom file picker seems to treat the entire range of images as a single image
when you're picking the file.

I don't knoe exactly why, but there were some issues I ran into while working in the
COPnet to render out the timeline screen images. About half of the time, instead of
rendering based on the geometry in the current trame, it would render based on the
geometry in the first frame. It didn't end up being an issue when I exported the flipbook,
but it was annoying that the composite image viewer was so inconsistent.

Animation pending.

<!-- My entry post is [here][entry-post]. -->

[mardini-2023]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2023/
<!-- [entry-post]: ... -->
