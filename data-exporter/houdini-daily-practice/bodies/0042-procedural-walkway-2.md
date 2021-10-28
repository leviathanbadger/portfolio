### Procedural Walkway (Day 2)

Attempted to optimize the method of producing the walkway grate. Instead of generating
all of the geometry for it, I procedurally generated an alpha map and a displacement
map using COP networks.

The alpha map is working fine; however, the displacement map is giving me a lot of
trouble. I don't know what I'm doing wrong; maybe it's not tesselating the geometry
finely enough to produce a smooth result. It looks like I'm getting significant
floating-point errors in displacing the geometry anyway, and for some reason some
of the tesselated geometry is not being displaced by fully-white pixels. (The flat
part not directly around the holes is not being displaced, even when I take the
complement of the displacement amount.)

I have no idea what's wrong. But this is a really small part of the scene I'm trying
to create, and it'll only be visible at an oblique angle and at a distance, so in
this case I think I'll abandon the displacement and use it as a bump map instead.
(Use normals to simulate lighting rather than tesselate the geometry into actually
displaced geometry at render-time.)
