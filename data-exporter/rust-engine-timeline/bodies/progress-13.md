### Initial ResourceLoader implementation

This is the first step in implementing multiple render materials. This is a harder challenge
than you might expect, because each new material requires an entirely new pipeline to be
created, including shaders. So far the pipelines created have been static, because that's
the way it's taught in the Rust-Vulkan tutorial.

Rather than continuing to create pipelines statically, I opted to work on the first iteration
of a ResourceLoader abstraction. Currently it only loads OBJ models and instance data buffers
dynamically (not textures, for example) but it's in a decent spot for a first attempt.

Textures aren't dynamically loaded here, because I want to research how to use bindless
rendering so I don't have to couple specific images to the pipelines. Also I want to create
a small set of image samplers, rather than creating a new one for every image. There's enough
that I don't know about the process that I left it static for the initial implementation so
that I can (hopefully) complete those two research projects without breaking things terribly
or wasting tons of time diagnosing issues with things I don't understand.

Also, it's still single-threaded, even though this is the part that I was originally going
to intentionally move into resource-loading threads.

By the way, it took four days to do this. None of it is even new, really, it's just combining
two things that previously I could only do one of. It also broke the window resize again,
since pipelines are dynamically created now and they're coupled to the render resolution
(which changes when you resize the window.)
