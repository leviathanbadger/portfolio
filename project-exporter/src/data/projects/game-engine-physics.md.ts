export default `### Game Engine Physics Demo

This is a demo project that was created while I was building out the physics
system for my HTML5 game engine. The app includes many demonstration scenes
that allow you do play with various features of the physics engine.

The engine supports simple spherical rigidbody collision.

- Colliders can be marked as "triggers," meaning that they still trigger collisions,
  but they don't use any corrective measures. (An object can occupy the same space
  as a trigger.)
- Colliders can be marked as "fixed," meaning that when there is a collision,
  the other object will be moved without changing the position or speed of the fixed
  object. This is useful for static objects such as walls or floors that should
  not move even when an object collides with it.

The engine also supports various types of forces, including:

- Gravity (Including multiple sources, and dynamic gravity that changes based on
  direction or distance)
- Friction
- Springs (Including one-direction springs that bind one object to another without
  affecting the movement or mechanics of the other object.)

These force generators can be added to individual objects, or to entire scenes.

To see an example game that I created using this physics engine,
go [here][physics_game].

[physics_game]: /project/boulder-physics-game`;
