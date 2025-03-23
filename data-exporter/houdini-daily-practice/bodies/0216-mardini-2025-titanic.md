### Mardini 2025 - Titanic

Today is day 24 of [Mardini 2025][mardini-2025]. The prompt for today is "CRASH",
in the DOPS category.

I had the brilliant idea to model and render the RMS Titanic crashing into an iceberg.
The thought process was: I can prevent a huge amount of time spent waiting for an animation
to render. The still frame fits the theme perfectly even without running a simulation. I
remember thinking, 'it won't be that hard to model. I don't have to add most of the
details. Just the iceberg is more than enough to convey exactly what the image is about.'
And all of that is true. It _should_ have been easy. But I kept on increasing the scope,
over and over and over again.

I sculpted the boat hull, rather than making it entirely procedurally.

I added railings along the decks, which ended up taking up about 0.02% of the final picture.

I added wires, stretched taut but still drooping a tiny bit due to an entirely unnecessary
vellum simulation.

I added procedural textures to both the Titanic and the fricking _iceberg_, instead of
doing the smart thing and just using solid colors since I'm low on time. These textures
even have procedural emissive lights for lit rooms.

I added procedural smokestacks.

I added a slap comp to add a slight glow effect, as well as to darken most of the rest
of the scene and make the hull look more like a silhouette.

Three things that I _wanted_ to do but sensibly _didn't_ (but only because It's now 2:30
AM and I'm exhausted): use the Karma Procedural Ocean LOP to make physically accurate
water, with volumetrics; add a camera frustum fog to obscure the edges of the
iceberg; and use Copernicus to generate a backdrop of stars and composite the rest of
the scene onto them. I am proud of this project, even if I'm annoyed with myself;
so I'll probably come back and attempt at least some of these things in a sequel project
at a later date.

I'm doing this write-up while the frame is rendering. I'm not going to bother listing out
the "new stuff" I did. I feel like the aggregation of all of these techniques in a single
practice is more than enough.

My entry post is [here][entry-post].

[mardini-2025]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2025/
[entry-post]: https://www.sidefx.com/forum/topic/100263/?page=1#post-441487
