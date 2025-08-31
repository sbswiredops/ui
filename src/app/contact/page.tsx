export default function Contact() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section with Contact Form */}
      <section className="contact-gradient py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 text-center">
            Get in Touch
          </h1>
          <p className="text-gray-800 text-lg text-center mb-12">
            Have a question or need support? Our team is here to help. Please fill out the form below and we will get back 
            to you within 24 business hours.
          </p>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-800 font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Ag"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Type your message here"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 resize-vertical"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>

      {/* Support Information */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              Support Email: <span className="text-yellow-400">support@streamify.com</span>
            </h3>
            <p className="text-gray-300">
              For general inquiries, please visit our <a href="/faq" className="text-yellow-400 hover:underline">FAQ</a> page first.
            </p>
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
