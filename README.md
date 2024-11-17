
# HW10A

I wanted to play around with creating sound visualization using dynamic particles. I had this idea of having the particles move randomly and bounce off the canvas edges, with their movement being influenced by the low-frequency energy of the sound. To make this visualization more visually interesting, particles will vary in size and color. There will also be a trailing effect with the semi-transparent background to further emphasize that movement. 

I watched this YouTube video as a reference to understand the particles: 

https://www.youtube.com/watch?app=desktop&v=H-9jCNhLe-Q&t=1084s

https://www.youtube.com/watch?time_continue=608&v=yAyiQKNVtY8&embeds_referring_euri=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dp5js%2Bmoving%2Bparticles%26sca_esv%3Ddda36a92322d4771%26rlz%3D1C5CHFA_enUS1033US1033%26udm%3D7%26sxsrf%3DADLYWIKF5a&source_ve_path=MjM4NTE

The challenge is to create something abstract like sound waves and then translate them into a visual experience that feels immersive and dynamic... I tried to make the particles feel reactive without becoming too chaotic. The key aspects were the particle movement and using the class function to manage individual particles' positions, velocities, and reactions to sound. The frequency analysis was achieved using the FFT spectrum to drive the particle behavior. Then I detect the low-frequency energy by using the function fft. energy (20, 100) that calculates the energy of low-frequency bands affecting particles.

# HW10B

The song I picked for this visualization is Apple by Charli XCX because I thought it would be a nice song to work with due to its lively and dynamic track. 

I used getPeaks() to extract the song's amplitude samples and then scaled them to match the canvas. The peaks array represents the song's amplitude over time. This information is used to create an abstract waveform. 

I thought that visualization was kind of boring and looked like a normal graph, so I decided to use Apple emojis at each peak to make it more thematic to the song's concept. 

[![Screenshot-2024-11-17-at-3-11-42-PM.png](https://i.postimg.cc/kgw0Ynkg/Screenshot-2024-11-17-at-3-11-42-PM.png)](https://postimg.cc/3k4fdH8s)
