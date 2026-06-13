import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#080D1A] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl">⚡</span>
              <span className="font-bold text-white">
                Top<span className="text-[#4F6EF7]">AI</span>Tools
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              The most comprehensive directory of AI tools. Find, compare, and choose the best AI for your needs.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {['Writing & Text', 'Image Generation', 'Video Editing', 'Coding & Dev', 'Research'].map((cat) => (
                <li key={cat}>
                  <Link href="/categories" className="hover:text-[#4F6EF7] transition-colors">{cat}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {[
                { label: 'All AI Tools', href: '/tools' },
                { label: 'Compare Tools', href: '/compare' },
                { label: 'Blog & Guides', href: '/blog' },
                { label: 'Best Free AI', href: '/blog/best-free-ai-tools-2026' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[#4F6EF7] transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Top Comparisons</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {[
                { label: 'ChatGPT vs Claude', href: '/blog/chatgpt-vs-claude-vs-gemini-2026' },
                { label: 'Midjourney vs DALL-E', href: '/blog/midjourney-vs-dalle3-best-ai-image-generator' },
                { label: 'Perplexity vs ChatGPT', href: '/blog/perplexity-vs-chatgpt-research' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[#4F6EF7] transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2026 TopAITools.com — All rights reserved.</p>
          <p className="text-gray-600 text-sm">
            Built with ❤️ for AI enthusiasts worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}

