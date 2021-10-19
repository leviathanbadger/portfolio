### _Even Better_ Procedural Murals

Normals are adjusted by a small random amount.

Also I improved the normal generation algorithm so that tile face normals are fixed,
so you shouldn't be able to see the seams on the source geometry any more.

Also, mural tile normals have a small random element which gives the illusion
that they're individual tiles with individual imperfections in how they're inlaid.
This allows some tiles to reflect specular light even if it's not directly in line,
making the mural seem more "shiny".

I also animated the camera panning around and exported a video to demonstrate this better.

More importantly, in today's practice I parameterized and exported the mural
subnet. The "Mural" SOP is now external to the project, so I can import it and use
it in other projects:

![Mural SOP](/assets/images/houdini-daily-practice/15/mural-sop.png)
