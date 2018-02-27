### Dungeon Crawler

This is one of the first projects that I (and one of my friends) created at Neumont
College of Computer Science. We decided to work on a personal project together
and ended up creating a networked massively-multiplayer, procedurally-generated,
3d dungeon crawler.

The game was written in C#, but what makes it impressive isn't how badly we
overscoped the project (because it was hilariously overscoped), it's the fact that
we built everything ourselves, from scratch. We didn't use Unity or another engine
to create the game, we created an engine and manually integrated OpenGL to get
the screen to render. The massively-multiplayer network side of things uses
raw Windows sockets to communicate back and forth. We created our own 3d rigidbody
physics system that worked at least half the time.

This engine was eventually deprecated by a C++ engine that we created later in our
time at Neumont that fixed many of the design flaws of this one.
