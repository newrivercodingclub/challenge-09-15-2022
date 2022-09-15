# Challenge-09-15-2022

**Buggy Code Bounty!**
This code is inconsistently executed, buggy, and breaking the laws of physics....THIS CAN NOT STAND!
Current known (certainly plenty unknown) issues with this code are

1. The bouncing ball can spawn in a manner where the radius edge is outside the canvas, causing it to "get stuck" in the wall, violating the principles of the Coulomb interaction.
2. The velocities x and y can be generated as zero due to how Math.random() works
3. The ball has a bunch of different ways that the bounce is being computed, it seems to be right if we aren't obeying the laws of physics, but this red sphere that doesn't adhere to electrostatic force laws in a vacuum is not doing math in a consistent manner.
4. The strange magic ball is odd... when it bounces off of the walls and floor it is supposed to slow down at least a bit shouldn't it?
5. Wait.... shouldn't this ball be feeling the effects of gravity? Can we impose the law of gravity on this ball?
6. We mentioned the Coulomb Interaction before... how is the ball falling through these black ramps? it should bounce off of them shouldn't it?
7. Hold on a minute... this ball is supposed to be blue?!?! (it may not seem as serious as some of the other issues, but the spectrums of energy the ball absorbs and reflects is a pretty big deal)

[^note]: main1.js has been left in the repo so that D.A.Marcyes' previous work in the field of physics, hitboxes, and canvas can be viewed by others to potentially save some googling time or to be inspired by solutions. That said there are no direct solutions to the issues in main.js in main1.js
