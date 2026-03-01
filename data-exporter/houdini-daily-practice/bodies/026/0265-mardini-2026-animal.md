### Mardini 2026 - Animal

Today is day 2 of [Mardini 2026][mardini-2026]. The prompt for today is "Animal".

The idea I settled on for today was a ship, at sea, being rocked by waves and destroyed
by a kraken with tentacles wrapped up around it. At night, during a lightning storm.
With a RBD destruction sim for the ship, a Vellum sim for the masts, a FLIP sim for the
water, and probably a POP sim for secondary debris particles. I sat down to begin this
project, and I immediately scrapped it because it's orders of magnitude more than I can
do in a day.

That's not to say today's actual project isn't technically involved. I'm notoriously bad
at creating anything curvy or organic, and I have next to no experience rigging or posing
the few characters that I do create. So although I wasn't as excited by this project (and
it's definitely not a winner) I'm still very proud of it. It's a technical achievement for
me, and aesthetically it's... recognizable as a gecko. Probably. (I did use a reference
image so my aphantasia doesn't sabotage me too badly.)

Did it need to be an animation? No. No it didn't.

New stuff

- More practice with sculpting. I really am bad at this, and it doesn't help that these
  operations are always destructive so if I change an upstream node I have to redo the
  sculpt too.
- Skeleton creation
    - Skeleton SOP, Skeleton Mirror SOP, Rig Doctor SOP; Joint Capture Biharmonic SOP;
      Joint Capture Paint SOP; Bone Deform SOP.
- Procedural scale generation on arbitrary mesh.
    - Some SDF tools in COPs/Copernicus context.
    - This worked... ok-ish. The material generation on the UV seams isn't working
      correctly, but that was always going to be the hard part.

Note: the HDRI used in this project is from [GreyscaleGorilla](https://greyscalegorilla.com/).
While we're not allowed to use external assets for the Mardini submissions,
GreyscaleGorilla is specifically listed as an exception.

My entry post is [here][entry-post].

[mardini-2026]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2026/
[entry-post]: https://www.sidefx.com/forum/topic/103233/?page=1#post-454190
