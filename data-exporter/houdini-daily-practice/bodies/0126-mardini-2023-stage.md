### Mardini 2023 - Stage

Today is day 21 of [Mardini 2023][mardini-2023]. The prompt for today is "stage".

I only had one idea for this prompt - build and render a literal theater stage. Which,
let's face it, is a really weak idea. Either I go incredibly basic, in which case it's
not creative at all, or I add tons of props and detail, in which case I don't have
time to model everything.

I decided to model an _empty_ stage, using Vellum to simulate opening the front
curtains. That still left a decision for what to put on the stage itself though.
Eventually I had the brilliant idea to have the curtains open to reveal... another
set of curtains. Which would open again to reveal a third set, and so on and so forth.

Now, I _could_ do something similar much more simply with a copy+transform node and
MOPs to offset the animation of the copies, but that's where the second technical
innovation comes in. I decided to render each recursive layer as a texture - not
because I think it will look better, but because it forces me to learn another aspect
of PDG/TOPs that I haven't had occasion to touch yet - a for-loop with feedback. There
are only 240 frames - that's 10 seconds at 24 frames per second - but since I have to
render the entire sequence recursively, that puts me at 2400 frames to render before I
have the completed video. Luckily each frame is really simple and only takes about 20
seconds to render, so I anticipate that another 15 hours of waiting will complete
the animation.

Unfortunately, until the last 240 frames, I won't even have a single image to use
in the portfolio site.

<!-- My entry post is [here][entry-post]. -->

[mardini-2023]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2023/
<!-- [entry-post]: ... -->
