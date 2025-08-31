export default function Testimonials() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero */}
      <section className="hero-gradient py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-yellow-400 font-semibold mb-2">Testimonials</h1>
          <h2 className="text-4xl md:text-5xl font-bold">Trusted by Artists Around the World</h2>
        </div>
      </section>

      {/* Cards */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-gray-800 rounded-xl p-6 shadow">
              <p className="text-gray-300">Streamify is incredibly straightforward, and it has my singles live on Spotify and Apple Music in less than 3 days. The monthly revenue reports are clear and transparent. I couldn't ask for more.</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-400">- Alisha Khan, Pop Artist</div>
                <span className="text-xs bg-gray-700 px-3 py-1 rounded-full">Spotify</span>
              </div>
            </article>
            <article className="bg-gray-800 rounded-xl p-6 shadow">
              <p className="text-gray-300">Getting my Official Artist Channel on YouTube was huge, and Streamify's support team made it happen. Being able to manage my releases in one place has been a game-changer.</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-400">- Marco Ricci, Producer</div>
                <span className="text-xs bg-gray-700 px-3 py-1 rounded-full">Apple Music</span>
              </div>
            </article>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-gray-800 rounded-xl p-6 shadow flex items-center">
              <div className="flex-1">
                <p className="text-gray-300">As a small label, the Label Plan is perfect. The 5% revenue share is unbeatable and the ability to distribute to VEVO gives our artists a massive professional boost. Highly recommended.</p>
                <div className="mt-4 text-sm text-gray-400">- David Chen, Founder of Echo Records</div>
              </div>
              <span className="ml-6 text-xs bg-gray-700 px-3 py-1 rounded-full whitespace-nowrap">echorecords.com</span>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter for updates</h2>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500" />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
