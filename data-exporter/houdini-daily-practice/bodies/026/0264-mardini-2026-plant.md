### Mardini 2026 - Plant

Today is day 1 of [Mardini 2026][mardini-2026]. The prompt for today is "Plant".

The practice is in reference to the Jerry Bruckheimer Films intro logo. I wasn't originally
going to do this, even though it's an exciting project idea, because it's too large in scope;
but eventually I decided to use it, but limit the scope significantly for the sake of Mardini.
After the month is over, I'll come back to it and add in a lot of the things that are missing
from this practice.

In the process of making this it turned into more of a harsh-lit desert than the source
material; partly because I know how difficult it is to light an overcast scene, and partly
because I know how hard it is to make clouds in the first place. I threw these ones together
in ~20 minutes, and they feel... too random. Clouds are usually more structured because they
form through natural processes with rules, even if the conditions are chaotic. Storm clouds
often have flat bottoms, for example. Even wispy clouds aren't uniformly wispy; they form
patterns in the air due to the convection currents.

New stuff:

- This is literally my first time touching the CHOPs context. It's probably not a great idea
  to learn an entirely new system in a time-constrained competition, but I thought the use case
  would be simple so I went ahead with it.
    - I'm just using the Lag CHOP to cheaply mimic a car suspension, and a Spring CHOP to dampen
      jitter on the look-at point. Altogether, I think this makes for a pretty smooth camera
      animation.
- Transform Edit LOP and Look-at Constraint LOP, again tied to the camera.
- Where does the plant come in? ...I scattered a bunch of hastily constructed bushes into the
  desert using the HeightField Scatter SOP.
- Point Instancer LOP to instantiate shrubbery
    - Originally, the scattered bush points were supposed to have variants; but I overscoped
      the project significantly (as usual) and had to cut this down. Besides, the way I modeled
      the 'bush' actually ended up making this largely unnecessary. The variation comes from bush
      scale and the randomized/relaxed spacing. Creating variations with the same method would most
      likely not even be detectable, unless I created significantly different versions. (Flowering
      plants, dried out plants, actual tumbleweeds, or a different type of plant entirely such as
      cactuses or some type of grass.)
- Harsh motion blur via camera movement, not geometry movement.
    - Had to use the Cache LOP. Not sure if there's a better way I could have done it that wouldn't
      require me to rebake the cache for the entire animation any time I changed _any_ camera
      setting.
- Mixing multiple materials in the Karma Material Builder (rather than creating extremely complex
  COPs networks to do it.)
- Clouds. No, it's not the first time, but I don't do it often enough for me to have an established
  way of doing it. More practice is always good.
- Once again using slap-comp to drive a desaturation on distant terrain; this time using an extra
  AOV (combinedvolume) to prevent it occurring on the clouds as well, which I want to be more
  vibrant.

My entry post is [here][entry-post].

[mardini-2026]: https://www.sidefx.com/community-main-menu/contests-jams/mardini-2026/
[entry-post]: https://www.sidefx.com/forum/topic/103225/?page=1#post-454037
