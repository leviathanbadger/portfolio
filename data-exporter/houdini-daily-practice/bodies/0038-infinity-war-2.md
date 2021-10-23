### Infinity War Dissolve Effect (Day 2)

This is part two of an attempt at recreating the dissolve effect shown in the
end title screen in the Marvel movie "Avengers: Infinity War".

Today I added in the solid text, with the dissolved portion subtracted from it.
Additionally the pyro solver uses a similar geometry converted to VDB to avoid
letting the smoke flow into the still-solid portions of the text. The effects
of this are minimal, because the camera is directly in the front so it's hard
to see that the text is 3d in the first place, let alone if the smoke actually
intersects it.

This isn't the effect I was going for completely; my intention was to use the
velocity from the smoke from the simulated pyro effect to drive a particle
simulation so the "dissolve" would look more like bits of dust flaking away,
rather than smoke directly. Still, it's not a bad effect. I'm just out of time
today to complete it to my satisfaction.
