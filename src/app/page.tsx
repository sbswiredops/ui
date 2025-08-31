export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Distribute Your Music
            <br />
            Worldwide 🎵
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-100/90 max-w-3xl mx-auto">
            Get your music on Spotify, Apple Music, TikTok, and 150+ other
            platforms. Streamify uses AI to optimize your release date for
            maximum reach. Enjoy simple pricing, keep up to 95% of your revenue,
            and get unlimited releases.
          </p>
          <button className="group inline-flex items-center gap-3 bg-white text-purple-700 font-semibold px-8 py-3 rounded-full text-lg shadow-sm hover:bg-gray-100 transition-colors">
            <span>Start Distributing Now</span>
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-700 group-hover:bg-purple-200">
              →
            </span>
          </button>
          <p className="text-sm text-gray-200/80 mt-4">
            No credit card required to start.
          </p>

          {/* Inline logos row under hero */}
          <div className="mt-10 opacity-70">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-sm">
              <span className="text-green-300 font-semibold">Spotify</span>
              <span className="text-pink-200 font-semibold">Apple Music</span>
              <span className="text-red-300 font-semibold">YouTube</span>
              <span className="text-white/90 font-semibold">TikTok</span>
              <span className="text-purple-200 font-semibold">Deezer</span>
              <span className="text-blue-200 font-semibold">Tidal</span>
              <span className="text-gray-100 font-semibold">Amazon Music</span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider space after hero */}
      <div className="h-px w-full bg-black/40" />

      {/* Key Features Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sign Up Feature */}
            <div className="feature-card p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-400">
                Pay one low price per upload and release as much music as you
                want, whenever you want.
              </p>
            </div>

            {/* Upload Your Music Feature */}
            <div className="feature-card p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Your Music</h3>
              <p className="text-gray-400">
                With plans that let you keep up to 95% of your royalties, you
                earn more from your music.
              </p>
            </div>

            {/* Monetize Feature */}
            <div className="feature-card p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Monetize</h3>
              <p className="text-gray-400">
                Get your music live in stores within 2–5 business days after
                approval.
              </p>
            </div>

            {/* Revenue Feature */}
            <div className="feature-card p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Revenue</h3>
              <p className="text-gray-400">
                Get free ISRC/UPC codes, access to artist analytics, monthly
                reports, and powerful promotional tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to our newsletter for updates
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
