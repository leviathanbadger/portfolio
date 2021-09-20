### Html5 Game Engine

This is my latest iteration of game engines. It is built using web technologies,
which allows me to focus more on the design of the engine and less on the low-level
internals. It also is different from the other engines I have created in that it
is build entirely for 2D games.

This decision was mostly reached because the HTML5 canvas uses draw commands that
are more suited for 2D graphics than 3D; there are no vertex buffers or other
internal data structures. Instead of rendering triangles, you render shapes.

In addition, I focused on creating a 2D game engine instead of a 3D one because it
simplifies the game physics and AI. Despite the limited scope of this new engine,
the higher-level language and specialized approach to creating the engine has
allowed me to polish game projects to a much greater extent than any previous
game project I have started using one of my own engines.

Here are a few projects created using various iterations of this engine:

- [Collide (game)][collide]
- [Turbo Winner (game)][turbo_winner]
- [Game Engine Physics][engine_physics]
- [Boulder Physics Game][boulder_physics]
- [Artificial Intelligence Playground][ai_playground]

[collide]: /project/collide-game
[turbo_winner]: /project/turbo-winner-game
[engine_physics]: /project/game-engine-physics
[boulder_physics]: /project/boulder-physics-game
[ai_playground]: /project/artificial-intelligence-playground
