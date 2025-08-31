export default function Pricing() {
  const features = [
    { name: "Number of Albums/EPs", basic: "5", premium: "50", advanced: "Unlimited" },
    { name: "Annual Prep", basic: "No", premium: "No", advanced: "No" },
    { name: "Exclusive Stores (What Streamify offers)", basic: "60%", premium: "70%", advanced: "85%" },
    { name: "Unlimited Upload", basic: "No", premium: "No", advanced: "Yes" },
    { name: "24/7 by phone & TDD option", basic: true, premium: true, advanced: true },
    { name: "Free Sell a UPC Codes", basic: true, premium: true, advanced: true },
    { name: "Smartly by Brace", basic: true, premium: true, advanced: true },
    { name: "Spotify for Artists Verification", basic: true, premium: true, advanced: true },
    { name: "Apple Music for Artists Verification", basic: true, premium: true, advanced: true },
    { name: "YouTube Content & Claim View", basic: false, premium: true, advanced: true },
    { name: "Cover Song Licensing Support", basic: false, premium: true, advanced: true },
    { name: "UPC/ISRC Distribution", basic: false, premium: false, advanced: true },
    { name: "Dedicated Record Label Views", basic: false, premium: false, advanced: true },
    { name: "Dedicated Support", basic: false, premium: false, advanced: true }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen py-12 px-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Simple, Transparent Pricing
          <br />
          <span className="text-gray-400">- No Hidden Fees</span>
        </h1>
        <p className="text-gray-300 text-lg">
          Choose the perfect plan for your music career and reach millions of listeners worldwide.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Basic Plan */}
          <div className="bg-purple-600 p-8 rounded-2xl text-center">
            <h3 className="text-xl font-semibold mb-2">BASIC</h3>
            <div className="text-4xl font-bold mb-6">
              $6.00
              <span className="text-lg font-normal">/mo</span>
            </div>
            <button className="w-full bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              GET STARTED
            </button>
          </div>

          {/* Premium Plan - Highlighted */}
          <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-8 rounded-2xl text-center relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              FEATURED
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">PREMIUM</h3>
            <div className="text-4xl font-bold mb-6 text-white">
              $18.00
              <span className="text-lg font-normal">/mo</span>
            </div>
            <button className="w-full bg-white text-orange-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              GET STARTED
            </button>
          </div>

          {/* Advanced Plan */}
          <div className="bg-purple-600 p-8 rounded-2xl text-center">
            <h3 className="text-xl font-semibold mb-2">ADVANCED</h3>
            <div className="text-4xl font-bold mb-6">
              $30.00
              <span className="text-lg font-normal">/mo</span>
            </div>
            <button className="w-full bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              GET STARTED
            </button>
          </div>
        </div>

        {/* Custom Plan */}
        <div className="bg-gray-800 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Custom Plan</h3>
            <p className="text-gray-400">
              Looking for a plan that fits your specific needs? Let's talk and build a 
              plan that works just right for you. Get premium features with custom pricing 
              based on your unique requirements. It's a personalized partnership that scales with you.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              GET STARTED
            </button>
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-800 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-6 font-semibold">Features</th>
                  <th className="text-center p-6">
                    <div className="font-semibold">Basic Plan</div>
                    <div className="text-gray-400 text-sm">$6.00/month</div>
                  </th>
                  <th className="text-center p-6">
                    <div className="font-semibold">Advanced Plan</div>
                    <div className="text-gray-400 text-sm">$18.00/month</div>
                  </th>
                  <th className="text-center p-6">
                    <div className="font-semibold">Premium Plan</div>
                    <div className="text-gray-400 text-sm">$30.00/month</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-700 last:border-b-0">
                    <td className="p-6 font-medium">{feature.name}</td>
                    <td className="p-6 text-center">
                      {typeof feature.basic === 'boolean' ? (
                        feature.basic ? (
                          <div className="w-6 h-6 bg-green-500 rounded-full mx-auto flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="text-gray-500">—</div>
                        )
                      ) : (
                        <span>{feature.basic}</span>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {typeof feature.premium === 'boolean' ? (
                        feature.premium ? (
                          <div className="w-6 h-6 bg-green-500 rounded-full mx-auto flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="text-gray-500">—</div>
                        )
                      ) : (
                        <span>{feature.premium}</span>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {typeof feature.advanced === 'boolean' ? (
                        feature.advanced ? (
                          <div className="w-6 h-6 bg-green-500 rounded-full mx-auto flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="text-gray-500">—</div>
                        )
                      ) : (
                        <span>{feature.advanced}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Plan Action Buttons */}
          <div className="p-6 bg-gray-750 border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                  Purchase
                </button>
              </div>
              <div className="text-center">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                  Start now
                </button>
              </div>
              <div className="text-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-gray-800 rounded-2xl max-w-6xl mx-auto">
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
