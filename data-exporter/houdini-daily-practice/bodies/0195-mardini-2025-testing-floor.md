### Mardini 2025 - Severance Testing Floor Elevator

Today is day 3 of [Mardini 2025][mardini-2025]. The prompt for today is "ARCHITECTURE",
in the SOPS category.

For this project, I recreated an iconic setting from the [Severance][severance-show]
TV Show. Specifically, the hallway and elevator leading down to the testing floor
below the severed floor. This scene is significant, especially in season 2, for...
reasons... that I won't get into because they're significant spoilers and Severance
is a show that absolutely can get ruined for you by spoilers.

It didn't turn out exactly like I wanted, but I am happy with how it did turn out.
Especially the distant view from down the hallway; historically I've had a lot of
trouble rendering dark scenes, especially when lit by geometry lights rather than
point lights/spot lights/distant lights. This makes sense because all of these
contribute to a huge amount of noise due to variances in how rays are calculated.
I was able to render both of these scenes without using a denoiser, which is great
because this scene is natrually noisy to begin with, due to some of the procedural
textures and a small amount of chromatic abberation added in a lens shader.

The one component that I wanted to add but couldn't due to lack of time is a bloom
effect to make the down arrow and hallway lights glow ominously without increasing
the actual light contribution to the scene.

New stuff:

  - I adjusted many camera settings I've never touched before, although I'm almost
    embarrassed to admit it at this point. Specifically, the focal length and
    horizontal aperture. Also, enabling a lens shader. Speaking of...
  - This is the first time I've used a Karma Physical Lens shader. I did it originally
    with the hope that it would have a built-in bloom feature so I would be able
    to get the effect I want without creating a slap comp or using some other
    mechanism to perform postprocessing on the rendered images. It didn't, but I
    still got some value from enabling a small amount of chromatic abberration and
    vignetting. Although both effects are subtle, I think they improve the result.
  - More work with copernicus, learning a few new nodes to make a procudural
    spatter-pattern marble for the hallway walls. For this month, I'll probably point
    out every use of copernicus as "new stuff", because it's an entire system I've
    never used before.
  - I did use the light linker node to add a hero light for a test geometry person
    standing in the elevator, but I realized before rendering that I wouldn't have
    time to make the test person fit the scene, so it mostly detracted from the scene
    as a whole. I disabled the hero light and scale reference person and rendered
    without it. But I still used the light linker, which is only the second time I've
    done so.

For an indication of time it took to render: I rendered both images at 4K before
scaling down to 1920x1080 for the submission, and I used 8192 samples per pixel
(which is honestly 2-4 times more samples than I needed, but I rendered it AFK
and I didn't want to have to rerender if I didn't choose enough samples to begin
with). The hallway shot took 1h 20m to render, and the closeup elevator shot took
1h 27m.

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[severance-show]: https://tv.apple.com/us/show/severance/umc.cmc.1srk2goyh2q2zdxcx605w8vtx
[entry-post]: https://www.sidefx.com/forum/topic/99966/?page=2#post-438538
