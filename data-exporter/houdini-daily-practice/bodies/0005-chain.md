### Chain

I'm not going to bother adding a material or rendering it,
that's not the point of today's practice

Today I wanted to experiment with creating reusable subnets; so I created a
digital asset that can be imported into other projects which procedurally
generates a chain along a specified curve.

Each chain link is rigid (took some time to figure out how to do that).
Of course that means when the curve is too tight it'll occasionally mess up:

![Rigid chain artifacts](/assets/images/houdini-daily-practice/5/rigid-chain-artifacts.png)

But I think overall it's better than distorting the chain links themselves to make sure the loops are correct. That creates some odd effects which are even more dissonant (IMO):

![Distorted chain artifacts](/assets/images/houdini-daily-practice/5/distorted-chain-artifacts.png)
