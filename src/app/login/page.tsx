export default function Login() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <section className="px-6 py-12 max-w-xl mx-auto">
        <a href="/signup" className="text-blue-300 hover:underline inline-flex items-center mb-6">← Back to Sign Up</a>
        <div className="text-center mb-8">
          <div className="text-3xl font-bold">Streamify</div>
        </div>
        <form className="space-y-5">
          <div>
            <label className="block mb-2 text-sm">Email</label>
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500" />
          </div>
          <div>
            <label className="block mb-2 text-sm">Password</label>
            <input type="password" placeholder="Your Password" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500" />
          </div>
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg">Log In</button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <button className="bg-gray-800 border border-gray-700 rounded-lg py-3">Continue with Google</button>
          <button className="bg-gray-800 border border-gray-700 rounded-lg py-3">Continue with Facebook</button>
        </div>
      </section>
    </div>
  );
}
