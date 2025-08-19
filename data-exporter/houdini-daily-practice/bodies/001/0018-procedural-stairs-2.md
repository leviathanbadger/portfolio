### _Better_ Procedural Stairs

Didn't have much time today, but I still got a few things in

- Optional backboard
- Stair has configurable scale to push it back so the backboard doesn't "float"
- Stair front has rounded bevel so it's more likely to pass a security inspection
  (although without a railing you'd still be hard-pressed to pass one with it).

That said, most of the other things I want to do with this are proving to be
impossible with the way I've structured this digital asset. That doesn't mean I'm
giving up, it just means that a large portion of tomorrow's practice will involve
a significant refactor.

Currently I'm creating a single "stair" asset and a single "backboard" asset,
then using copy-to-points to "instance" it (so-to-speak) - but that makes it
impossible to have per-stair changes, like dynamic width, sizing the stairs to
support a sideboard, making the top stair not extend into the floor, etc.)
