### Mardini 2025 - Core Memory

Today is day 18 of [Mardini 2025][mardini-2025]. The prompt for today is "ROLL",
in the KineFX category.

For this project I attempted to recreate a "dual-emotion core memory" rolling
through a marble run, taken pretty directly from one of my favorite Pixar movies,
[Inside Out][inside-out].

I think it turned out well, although I struggled to design materials to make it look
less photorealistic and more cartoony to match the original. Something to work on
in the future, I guess. Overall I'm still happy with the result.

New stuff:

  - _Animated_ textures in Copernicus. Sure, I've done this before technically
    when following the tutorial for the cymatics project, but that doesn't really
    count because I was following a tutorial. If you watch the rolling ball carefully,
    you can see the the blue and yellow colors trying to bleed together. It looks nice
    in the COPS context, but so far I have no idea if it'll even be visible in the
    final animation. Again, hard to tell without being able to see it in realtime.
  - Textured emissive color. Usually if I have geometry that I need to treat as a light,
    I just set the emissive color to white or whatever the single color I need it to be
    and be done with it. In this case, however, the emissive color needs to change based
    on the position the ray hits the marble. It's the same texture as the diffuse color,
    but it doesn't need to be. If I ever come back to this project, I'll probably create
    a separate diffuse texture to simulate a blurry "memory" playing inside of the orb.
    Out of scope for today though, since I've already spent 4.5 hours on this.
  - Animated camera movement. I've technically done this once before, but very loosely
    with 2-3 keyframe positions; and it was very obvious that not a lot of care went
    into it because the camera really doesn't follow the object of focus very well.
    Here I did a much better job, including keyframing translate and rotate properties
    independently, and manually adjusting the bezier handles on the keyframes.
  - Slap comp & glow effect. Because this project is heavily focused on a very bright
    light in an otherwise dark room, I really wanted a glow effect. However, because
    this is generally a postprocessing effect (it isn't a realistic lighting effect,
    so it has to be done after the fact) I had to do it in a COPS context. Houdini
    20.5 comes with Copernicus, which has a neat feature called a "slap comp" that
    directly supports this kind of compositing effect without having to set up extra
    render steps after the render emits the original EXR image.

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[inside-out]: https://www.disneyplus.com/movies/inside-out/uzQ2ycVDi2IE?v=control
[entry-post]: https://www.sidefx.com/forum/topic/100190/?page=1#post-440853
