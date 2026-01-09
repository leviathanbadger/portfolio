### Bejeweled

This is the eighth prompt of the [Nodevember 2025](https://www.nodevember-2025.com/),
"Bejeweled".

I'll return to the 2024 prompts later, but since I skipped nodevember this year in
favor of writing 30k words in November, I'm going to go to the 2025 prompts and do
the 2024 prompts later.

I've been having difficulty returning to practice lately, and I eventually realized
that in part it's because I'm getting paralyzed by how much work it is to do a single
daily practice. So I'm going to limit myself to 2 hours per practice to make it easier to
get started and finish each day. I don't necessarily expect this to work very well,
because I'm a perfectionist, but it's worth a try.

It's an enormous pile of lucre. A swimming pool of gold you should *absolutely not* dive
into. A veritable hoard of shinies.

I ran an RBD simulation to create a flat 2 meter by 2 meter area with tons of gold and
gems lying in a reasonably believable way. Then I copied and rotated it several times
to expand the size. Then I rasterized the pile in COPS so I could try to tile it (mixed
results) and create textures for the base color, metalness, roughness, normal, and
height maps. Then I threw together a heightfield to pretend to have giant piles of
gold, and threw the material on. The result is this.

This one was painful. I didn't have much time because I had a dentist appointment in
the morning and I still had a full day of work, but I put in the effort; and believe
it or not, I mostly got a render within the two hour deadline. Then... disaster struck.
repeatedly.

Some of it was my fault. I played around with colors and lighting and other material
properties, and somehow I got into a state where the lighting was mostly green but the
gold in the scene was mostly red, and they combined poorly to make the entire scene
almost exclusively yellow with almost exclusively dark green gems. I kept making
adjustments wondering why they weren't having an effect, and I lost a lot of time
due to this.

Even after I fixed that, Houdini kept freezing and crashing due to the huge texture
maps I was creating in increasingly complex ways in copernicus (COPs), and the enormous
displacement maps it kept having to generate when I moved the camera around in solaris
(LOPs).

Altogether it was a frustrating experience, because I was already tired to begin with
and now it's four hours later and after midnight and I'm finally getting a render that
I'm not completely happy with but it's *about time* and I'm done for the day. With
everything. So very done. Good night.
