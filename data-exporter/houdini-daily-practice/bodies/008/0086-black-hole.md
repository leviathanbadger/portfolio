### Black Hole

Decided to make a black hole. Seems like a typical project that a lot
of people do to learn more about rendering systems. I had some difficulties
with this because of the default values in the standard materialx surface
shader. They work well in most renders, but they threw me off when I
attempted to get hard refractions going.

Each frame takes just under two minutes to render. It only renders on the
CPU, one or more of the materials cause the Karma XPU renderer to fail.

The black hole material is relatively simple, although it's hard to get it
right. I don't think I managed it myself. Basically, you just use the
"MtlX Facing Ratio" node. `in1` should be bound to a "Karma Ray Import"
node with `ray:direction` as the variable name; and `in2` should be the
surface normal. You pipe the output into the "specular IOR" input of a
standard MtlX Surface. I also had to throw a few math nodes in between in
order to adjust the value's ramp.

I've added the tutorial video (using C4D and Arnold, not Houdini) that I
used to figure this out. However, the values they picked don't work with
the Karma renderer. I don't know if Karma material standard shader values
are just in a different space, or if there's actually a bug here; either
way this was just a daily practice for me, so I didn't put in any effort
to find out once I got a good-enough result.
