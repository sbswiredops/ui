export default function Pricing() {
  // Updated features to match the reference UI copy/order and yearly pricing
  const features = [
    { name: "Number of Artists", basic: "1", advanced: "3", premium: "5" },
    { name: "Annual Price", basic: "$6", advanced: "$18", premium: "$30" },
    {
      name: "Revenue Share (What Streamify keeps)",
      basic: "10%",
      advanced: "10%",
      premium: "5%",
    },
    { name: "Unlimited Uploads", basic: true, advanced: true, premium: true },
    {
      name: "Distribution to 150+ Stores",
      basic: true,
      advanced: true,
      premium: true,
    },
    {
      name: "Free ISRC & UPC Codes",
      basic: true,
      advanced: true,
      premium: true,
    },
    {
      name: "Monthly Reports & Payouts",
      basic: true,
      advanced: true,
      premium: true,
    },
    {
      name: "Spotify for Artists Verification",
      basic: true,
      advanced: true,
      premium: true,
    },
    {
      name: "Apple Music for Artists Verification",
      basic: true,
      advanced: true,
      premium: true,
    },
    {
      name: "YouTube Official Artist Channel (OAC)",
      basic: false,
      advanced: false,
      premium: false,
    },
    {
      name: "Cover Song Licensing Support",
      basic: false,
      advanced: false,
      premium: false,
    },
    {
      name: "VEVO Video Distribution",
      basic: false,
      advanced: false,
      premium: false,
    },
    {
      name: "Custom Record Label Name",
      basic: false,
      advanced: false,
      premium: true,
    },
    { name: "Dedicated Support", basic: false, advanced: false, premium: true },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Header */}
      <section className="hero-gradient px-6 pt-12 pb-16">
        <div className="max-w-5xl mx-auto text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="underline decoration-white/90 decoration-4 underline-offset-4">
              Simple, Transparent Pricing
            </span>
            <br />
            <span className="text-white/90">- No Hidden Fees.</span>
          </h1>
          <p className="mt-4 text-gray-100/90 md:text-lg max-w-3xl">
            Choose the perfect plan for your music career. All plans are billed
            annually.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Basic Plan */}
          <div className="bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] p-6 md:p-8 rounded-2xl text-white shadow-lg border border-white/10">
            <h3 className="text-sm tracking-widest font-semibold opacity-90">
              BASIC
            </h3>
            <div className="mt-2 text-4xl font-extrabold">
              $6.00
              <span className="text-lg font-normal align-super">/year</span>
            </div>
            <p className="mt-2 text-white/80">1 Artist, Unlimited Releases</p>
            <button className="mt-6 w-full bg-white text-purple-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors">
              GET STARTED
            </button>
          </div>

          {/* Advance (Middle – highlighted) */}
          <div className="relative bg-gradient-to-br from-[#f59e0b] to-[#f97316] p-6 md:p-8 rounded-2xl text-white shadow-lg border border-white/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-semibold tracking-wider">
              MIDDLE TIER
            </div>
            <h3 className="text-sm tracking-widest font-semibold opacity-90">
              ADVANCE
            </h3>
            <div className="mt-2 text-4xl font-extrabold">
              $18.00
              <span className="text-lg font-normal align-super">/year</span>
            </div>
            <p className="mt-2 text-white/90">3 Artists, Unlimited Releases</p>
            <button className="mt-6 w-full bg-white text-orange-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors">
              GET STARTED
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] p-6 md:p-8 rounded-2xl text-white shadow-lg border border-white/10">
            <h3 className="text-sm tracking-widest font-semibold opacity-90">
              PREMIUM
            </h3>
            <div className="mt-2 text-4xl font-extrabold">
              $30.00
              <span className="text-lg font-normal align-super">/year</span>
            </div>
            <p className="mt-2 text-white/80">5 Artists, Unlimited Releases</p>
            <button className="mt-6 w-full bg-white text-purple-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors">
              GET STARTED
            </button>
          </div>
        </div>

        {/* Custom Plan */}
        <div className="mt-8 bg-[#c7d8e8] text-gray-900 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 md:gap-10 shadow-inner">
          <div className="flex-1">
            <h3 className="text-2xl font-extrabold mb-2">Custom Plan</h3>
            <p className="text-gray-800/90">
              Unlock your path to success with a premium, custom-tailored plan
              designed to match the unique goals and demands of your artistry.
              No limits, no caps—just a seamless flow to distribute and scale,
              fully on your terms.
            </p>
            <button className="mt-4 bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
              GET STARTED
            </button>
          </div>
          <div className="shrink-0 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/60 backdrop-blur flex items-center justify-center text-purple-800 font-bold">
              ♪
            </div>
            <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="bg-gray-800 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-6 font-semibold">Features</th>
                  <th className="text-center p-6">
                    <div className="font-semibold">Basic Plan</div>
                    <div className="text-gray-400 text-sm">$6.00/year</div>
                  </th>
                  <th className="text-center p-6">
                    <div className="font-semibold">Advance Plan</div>
                    <div className="text-gray-400 text-sm">$18.00/year</div>
                  </th>
                  <th className="text-center p-6">
                    <div className="font-semibold">Premium Plan</div>
                    <div className="text-gray-400 text-sm">$30.00/year</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-700 last:border-b-0"
                  >
                    <td className="p-6 font-medium">{feature.name}</td>
                    {/* Basic */}
                    <td className="p-6 text-center">
                      {typeof feature.basic === "boolean" ? (
                        feature.basic ? (
                          <div className="w-6 h-6 bg-green-500 rounded-full mx-auto flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                        ) : (
                          <div className="text-gray-500">—</div>
                        )
                      ) : (
                        <span>{feature.basic}</span>
                      )}
                    </td>
                    {/* Advance */}
                    <td className="p-6 text-center">
                      {typeof feature.advanced === "boolean" ? (
                        feature.advanced ? (
                          <div className="w-6 h-6 bg-green-500 rounded-full mx-auto flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                        ) : (
                          <div className="text-gray-500">—</div>
                        )
                      ) : (
                        <span>{feature.advanced}</span>
                      )}
                    </td>
                    {/* Premium */}
                    <td className="p-6 text-center">
                      {typeof feature.premium === "boolean" ? (
                        feature.premium ? (
                          <div className="w-6 h-6 bg-green-500 rounded-full mx-auto flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                        ) : (
                          <div className="text-gray-500">—</div>
                        )
                      ) : (
                        <span>{feature.premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Plan Action Buttons */}
          <div className="p-6 bg-gray-800 border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition-colors">
                  Purchase
                </button>
              </div>
              <div className="text-center">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-6 rounded-full transition-colors">
                  Purchase
                </button>
              </div>
              <div className="text-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition-colors">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
