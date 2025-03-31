### Mardini 2025 - Rapture

Today is day 31 of [Mardini 2025][mardini-2025]. The prompt for today is "UNDERWATER",
in the LOPS category.

Today is the last day in Mardini 2025, and likely the last day I'll practice Houdini for
a long time. I like Houdini, but spending this much time on one hobby is too much. I have
many other things I want to do but couldn't because of this. That said, I don't regret
doing it at all. It's the third year in a row, and frankly I'm amazed at how far I've
come in those three years. I feel like this is the year I'm barely starting to pick up
steam, and the whole concept is finally coalescing in my head, instead of it being
thousands of disparate things that work independently of each other.

This project started as Rapture fanart (the underwater city from Bioshock) but eventually
I just started doing things to see what looks nice. In my opinion that hurt the overall
cohesion of the final render, but, uh, it's fine. It's really good for someone of my level,
even if I did cheat a bit and take most of the day Sunday to work on it (instead of the
4 hours I normally budget for Mardini projects. It's the last day, I might as well go out
with a bang.)

Even with all of the extra time I gave myself, I still had plenty of details I wanted to
add but didn't get around to.

  - Black border around each window pane with a rounded corner to inset the pane and frame
    it a bit better. The best I got right now is a grey refraction color, which was a
    little accidental, and honestly makes the window appear to be floating there unanchored.
    (It's still better than what it was before though, when there was nothing to frame it
    so it appeared to just be empty space.)
  - Reposition rivets next to glass so they don't appear so close.
  - Scattered plants and other terrain details, at least just outside the tunnel in the near
    field. It doesn't even need to be that detailed, the light scattering and dark environment
    should reduce it almost to a silhouette anyway.
  - Schools of fish, maybe some glowing jellyfish to add more light to the exterior. (Do
    jellyfish actually glow? I feel like they probably don't. But who cares?)
  - Better detail from outside the tunnel so I can have a distant camera displaying the
    tunnel from the outside - presumably focused on the flora and fauna with the tunnel
    being an interesting detail in the distance.
  - A big daddy/little sister duo walking through the tunnel towards the camera. No, this
    was definitely not planned to occur during Mardini; but it was planned to do eventually.
    That may not happen now that many of the details were just made randomly, instead of
    trying to fit it into Rapture. But in the future I could always fix those details, so
    maybe. I probably wouldn't model them myself though, I'd look for a model to purchase
    on SketchFab or somewhere else. The most I'd do would be to rig and pose them, and
    TBH that's a lot for me.

This render is _unbelievably_ expensive. Most of it isn't bad, but the tiles on the floor
have some very fine detail that you can't see because the render noise just completely
obliterates it. Reflection off the ground, + refraction through the windows, scattering
in the water... basically it only has indirect (and, in some cases, _very_ indirect)
lighting.

The window to the right is the same, but it feels even worse since you can see the distant
lights (scattered and indistinct, but clearly directly there) instead of just a reflection
like the closer lights are on the floor. I rendered this in 4k, at 2048 samples per
pixel; it went for 8.5 hours overnight before I decided to stop it myself because the
image quality was good enough. I have no idea how much longer it would have gone, when
rendering single images I don't get a percentage bar.

New stuff:

  - Many new uses for the Divide SOP, which I generally just use to triangulage meshes
    that have many-sided polygons. But the Sweep SOP does funky stuff if you use a mesh
    with inside faces as the cross section, so I had to find a way to
  - PolyCut SOP - to divide a long curve into many smaller ones, so that I can handle
    each section of the tunnel individually instead of treating it all like one curve.
  - PolyBridge SOP again. This is proving to be a very useful tool, particularly if you
    are a little creative or plan around using it. I wish I had found it earlier, it makes
    generating certain kinds of mesh much easier.
  - Resample SOP - fine, yeah, I use this all the time. But despite that, I still don't know
    it very well, because today I had a problem with dividing a large curve into segments
    of varying lengths and getting them to line up, and the "Even Last Segment Same Length"
    option was the solution.
  - Rendering fog with directional anisotropy. I didn't even know what that was before today.
    Used for the water volume to make the ocean water murky and scatter the light, but
    without completely ruining the ability to see distant objects.
  - Marble texture for the floor, along with some fancy masking logic to make macrodetail
    in the tiling pattern (stripes along the sides, different sized tiles.)
  - I used the "renderedlight" and "P" AOVs to add a noise texture to the lamp lights
    in postprocessing. I could have just rendered the lights with the texture to begin
    with, but lights are tricky because whatever emissive color I put down for the render,
    it affects the light color for the rest of the scene. So I did it in post, which
    is good practice for (eventually) attempting to make a triplanar mapping/painterly effect.

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[entry-post]: https://www.sidefx.com/forum/topic/100361/?page=1#post-442300
