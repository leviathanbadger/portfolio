### Mardini 2026 - Motion Blur

Today is day 30 of [Mardini 2026][mardini-2026]. The prompt for today is "Motion Blur".

I (once again) was mostly out of time to actually create something from scratch -- my
own fault, I only did one practice over the weekend which means I've been riding the
deadline -- _but_ I remembered something which saved me for this one. Although you aren't
allowed to use assets or projects from elsewhere during Mardini, you _are_ allowed to
reuse assets or projects you create earlier in the month. So I shamelessly stole the
terrain, road, shrubs, etc. from day one, [[1. Plant]], and retrofitted my idea onto it
instead of making it all from scratch.

New stuff:

- Backface culling. Yes, I know, it should be standard; but it's not enabled by default
  and I'm always careful to model things with only the frontface visible, so it's never
  been a factor really. Besides, on rare cases it's actually intentional to have a
  backface because you can render something different there without duplicating and
  reversing geometry. (Say, a sheet of paper with something different on the front and
  back.)
- Velocity-based motion blur with slow shutter.
    - Although this project is meant to look like a long-exposure shot, I'm actually
      using a few cheats to get the effect without rendering minutes or hours worth of
      images. The shutter is four frames wide (+- 2), as opposed to the half-frame
      default (+- .25), but that just causes the generated velocity blur to extend
      further, rather than actually sampling the geometry at different times. Since the
      'car' headlights are moving quickly, it causes them to appear as streaks/lines
      instead of the half-spheres that they actually are.

Stars/space HDRI is from https://www.spacespheremaps.com/hdr-spheremaps/.

My entry post is [here][entry-post].

[mardini-2026]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2026/
[entry-post]: https://www.sidefx.com/forum/topic/103477/?page=2#post-457428
