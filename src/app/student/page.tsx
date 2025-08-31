export default function Student() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero */}
      <section className="gold-gradient py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">For Students, By Artists</h1>
          <p className="text-gray-900/80 text-lg mt-4">Get all the power of our Artist Plan at a special discounted price, exclusively for students.</p>
        </div>
      </section>

      {/* Cards */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-xl p-8 text-center">
            <div className="text-4xl font-bold mb-2">$2.50</div>
            <div className="text-gray-400">/year (50% OFF)</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-8 text-center">
            <div className="text-xl font-semibold mb-2">Features</div>
            <p className="text-gray-400">All features included in the Basic Plan.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-8">
            <div className="text-xl font-semibold mb-2">Requirement</div>
            <p className="text-gray-400 mb-6">Verification with a valid Student ID is required during signup.</p>
            <button className="bg-gray-200 text-gray-900 px-6 py-3 rounded-full font-semibold">GET STARTED</button>
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
