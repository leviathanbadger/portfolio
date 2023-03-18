### Mardini 2023 - Shadow

Today is day 23 of [Mardini 2023][mardini-2023]. The prompt for today is "shadow".

No real plan for this one, except for the vague idea of having a man casting a giant
shadow that obviously doesn't fit his body profile. Originally I tried to do this
with just lighting, which is why I ended up with a bright spotlight close to the floor
shining up at the man. That didn't look right, and also I didn't think it was
technically innovative (for me) enough to really count as a practice, so I decided
to make the shadow completely different from the man. I didn't even know if that
was possible, so I had to make a proof of concept.

I used two test geometries at first, and after about 20 minutes figured out how
to accomplish it. But I figured if I used test geometries there's no chance I'll win
the competition for this day, so I purchased both character models. It's just as lazy,
but at a glance it looks more impressive. Heh. (I also need to work on building my
stock of assets to use for these projects, I can't build everything myself.)

Then I decided to render an idle animation. However, only the human model is rigged
and animated, so I used KineFX to rig the demon-looking thing in the shadow and
reflection, then used the "Rig Match Pose", "Map Points", and "Full Body IK" nodes to
transfer the animation from the business man to the demon-looking thing. I animated the
tail and wings myself (you can probably tell), because they obviously weren't in the
original animation.

The render was the main goal, despite spending lots of time working on KineFX. I had
to figure out how to get the demon to cast a shadow and reflection but not to render
in the first place. That actually wasn't too difficult to figure out, but unfortunately
it _did_ break the render for the man, who had weird shadows cast on him because he's
standing in the same place. Eventually I settled on rendering the frame twice - once
for the foreground, with _just_ the man, and once for the background, with everything
else; then I used a COPs composite node to overlay the two.

I rendered this twice, because the first animation appeared too small. So the second
video was basically the same thing, with the camera zoomed in a lot more. It still
wasn't visually distinct enough, so I repositioned the wall and turned it into a mirror,
added a lot more light and finally included the demon thing in the actual render, as
both a shadow _and_ a reflection. So I have three videos, but I'm only uploading the
third and final one because the other two are more of the same... just worse.

<!-- My entry post is [here][entry-post]. -->

[mardini-2023]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2023/
<!-- [entry-post]: ... -->
