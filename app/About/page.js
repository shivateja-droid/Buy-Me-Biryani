import React from 'react'
import Footer from '@/Components/Footer'

const About = () => {
  return (<>
    <div className='p-10 flex flex-col items-center justify-center'>
      <div className='text-3xl mb-10 font-bold text-yellow-400 drop-shadow-[0_0_10px_#facc15]'>About Us</div>
      <div className="about space-y-4 text-lg mb-10">
        <p>Buy Me Biryani is not just a platform – it’s a 🍲 <em>revolution for creators!</em></p>
        <p>
          ✨ We empower creators to connect with their fans ❤️ on a deeper level.<br />
          💸 Through simple crowd-funding, fans can directly support the people they admire.<br />
          🎯 This means creators can do what they do best – <strong>create amazing content 🚀</strong>
        </p>

        <h3 class="text-xl font-semibold">🤝 Our Mission</h3>
        <ul class="list-none space-y-1">
          <li>🌍 Build a thriving ecosystem</li>
          <li>🙌 Enable fans to play an active role</li>
          <li>💡 Create a sustainable future for content creation</li>
        </ul>

        <p>
          Together, we’re redefining how fans & creators interact 💻💛.<br />
          One plate of biryani at a time 🥳🥘🔥
        </p>
      </div>


    </div>
    <Footer />
  </>
  )
}

export default About