export default function Features() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
            Features
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            All The Tools You Need to Succeed
          </h2>
          
          {/* Platform Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center opacity-80 mt-12">
            <div className="text-green-400 font-bold text-lg">Spotify</div>
            <div className="text-red-500 font-bold text-lg">YouTube</div>
            <div className="text-pink-500 font-bold text-lg">Apple Music</div>
            <div className="text-orange-400 font-bold text-lg">SoundCloud</div>
            <div className="text-purple-400 font-bold text-lg">Deezer</div>
            <div className="text-white font-bold text-lg">TikTok</div>
            <div className="text-blue-400 font-bold text-lg">Tidal</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Worldwide Music Distribution */}
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Worldwide Music Distribution</h3>
              <p className="text-gray-400 mb-4 font-semibold">Your Music, Everywhere.</p>
              <p className="text-gray-300">
                Get your music heard on 100+ digital streaming and downloading platforms 
                like Spotify, Apple Music, Amazon Music and many more. No lengthy approval times here!
              </p>
            </div>

            {/* Artist Verification & Profile Control */}
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Artist Verification & Profile Control</h3>
              <p className="text-gray-400 mb-4 font-semibold">Look Official, Be Official.</p>
              <p className="text-gray-300">
                Verify your artist profiles and get that blue checkmark on 
                major platforms. Take control of your artist profile, 
                manage your profile, audience and fans, and connect directly 
                with your audience. Be 100% authentic every time.
              </p>
            </div>

            {/* VEVO Video Distribution */}
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">VEVO Video Distribution</h3>
              <p className="text-gray-400 mb-4 font-semibold">Professional Music Videos.</p>
              <p className="text-gray-300">
                Upload videos for your Song right in Get your official music channel 
                on VEVO and millions of people worldwide. For 100% potential 
                reach on Video-on-demand platforms and massive additional income.
              </p>
            </div>

            {/* Free ISRC & UPC Codes */}
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7m15.91 4.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.41l8.99 9c.37.36.87.59 1.42.59s1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Free ISRC & UPC Codes</h3>
              <p className="text-gray-400 mb-4 font-semibold">We Handle the Technical Stuff.</p>
              <p className="text-gray-300">
                Get unlimited ISRC (track codes) to complete track data. Get quickly 
                one belonging to a specific track that gets tracked all over the place, 
                performance tracking and royalty tracking everywhere. 
                This ensures better tracking across different platforms.
              </p>
            </div>

            {/* Monthly Reports & Payouts */}
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Monthly Reports & Payouts</h3>
              <p className="text-gray-400 mb-4 font-semibold">Transparent Earnings. Easy Payouts.</p>
              <p className="text-gray-300">
                Track your royalty report in real time. Lifestyle tracking for monthly 
                pays and detailed payout breakdowns. Transparency on the daily 
                basis so you understand where earnings come from and get the full pay.
              </p>
            </div>

            {/* Cover Song Licensing */}
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Cover Song Licensing</h3>
              <p className="text-gray-400 mb-4 font-semibold">Legally Release Your Favorite Songs.</p>
              <p className="text-gray-300">
                Upload your cover version of hip-hop songs easily. We do the
                mechanical licensing for your cover versions so your music is 
                allowed and you be available to releases and sell worldwide 
                and the original songwriters get your offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter for updates</h2>
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
