import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-7xl mb-6">🤖</div>
        <h1 className="text-4xl font-bold text-white mb-3">404 — Not Found</h1>
        <p className="text-gray-500 mb-8">This page doesn't exist. Maybe the AI ate it.</p>
        <Link
          href="/"
          className="bg-[#4F6EF7] hover:bg-[#3B56E8] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

