export default function Signup() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="px-6 py-8 max-w-md mx-auto">
        <a href="/" className="text-blue-400 hover:underline inline-flex items-center mb-8">
          ← Back to Home
        </a>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
              <span className="text-black font-bold text-xl">♪</span>
            </div>
            <span className="text-white font-bold text-3xl">Streamify</span>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-white">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">Password</label>
            <input
              type="password"
              placeholder="Your Password"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Your Password"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
          </div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors">
            Sign Up
          </button>
        </form>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <button className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-lg py-3 px-4 flex items-center justify-center gap-2 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <button className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-lg py-3 px-4 flex items-center justify-center gap-2 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Continue with Facebook
          </button>
        </div>

        <div className="mt-8">
          <a
            className="block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition-colors"
            href="/login"
          >
            Or, Log In
          </a>
        </div>
      </section>
    </div>
  );
}
