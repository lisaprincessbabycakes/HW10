
# HW10A

I wanted to play around with creating sound visualization using dynamic particles - i had this idea of having the particles move randomly and bounce off the canvas edges, with their movement being influenced by low-frequency energy of the sound. To make this visualization more visually-interesting, particles will vary in size and color. There will also be a trailing effect with the semi-transparent background to further empahsize that movement. 

I watched this youtube video as reference to understand the particles: 

https://www.youtube.com/watch?app=desktop&v=H-9jCNhLe-Q&t=1084s

https://www.youtube.com/watch?time_continue=608&v=yAyiQKNVtY8&embeds_referring_euri=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dp5js%2Bmoving%2Bparticles%26sca_esv%3Ddda36a92322d4771%26rlz%3D1C5CHFA_enUS1033US1033%26udm%3D7%26sxsrf%3DADLYWIKF5a&source_ve_path=MjM4NTE

the challenge is to create something abstract like sound waves and then translate them into a visual experience that felt immersive and dynamic... i tried to make the aprticles feel reactive without becoming too chaotic. The key aspects were the particles movement and using the class function to manage individual particles' positions, velocities and reactions to sound. The frequency analysis was acheived with the FFT spectrum that is user to drive the particle behavior. Then I dectect the low frequency energy by using function fft.getEnergy(20, 100) that calculates the energy of low-frequency bands, affecting particles.


