### Beverages (Day 4)

The bottle HDA includes a significant number of changes and improvements.
Probably more than I can actually remember. The new chocolate milk and
"coco-soda" bottles are created using the same HDA, and they're completely
different shapes. The root beer bottle is the last standalone bottle
that isn't using the HDA, but it's doing enough unique things I'll probably
just leave it rather than risk breaking it and everything else.

The HDA now has parameters for the bottle cap size, type, and position;
the label hight, radius, type, and texture index; and various other
improvements. There is even a button you can click to be informed of the
texture dimensions based on the label parameters you have configured in
order to ensure the texture proportions are correct for the label size.
The button was implemented using a python script embedded in the HDA.

The "coco-soda" bottle was the hardest, because the bottle shape is more
than just a simple revolution. To support this, the HDA now includes a
dive target so you can customize the shape of the bottle after the
revolution but before the liquid and bottle geometries are created. In
this case I actually used volumetrics to create the bottle profile,
rather than attempting to manipulate the polygon geometry directly.

Not sure what I'll do next. I have plenty of other bottles I still need
to model, but this is probably the last practice session I'll complete
before my vacation, so I'll just choose my next project when I get back.
