### Black Hole

Decided to make a black hole. Seems like a typical project that a lot
of people do to learn more about rendering systems. I had some difficulties
with this because of the default values in the standard materialx surface
shader. They work well in most renders, but they threw me off when I
attempted to get hard refractions going.

Each frame takes just under two minutes to render. It only renders on the
CPU, one or more of the materials cause the Karma XPU renderer to fail.
