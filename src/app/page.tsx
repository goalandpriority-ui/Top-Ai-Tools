import Link from 'next/link'
import { aiTools, categories, getFeaturedTools } from '@/data/tools'
import { blogPosts } from '@/data/blogs'
import ToolCard from '@/components/ToolCard'

export default function HomePage() {
  const featured = getFeaturedTools()

  return (
    <div className="min-h-screen">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 px-4">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4F6EF7]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-[#4F6EF7]/10 border border-[#4F6EF7]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#4F6EF7] text-xs font-medium">✦ Updated June 2026</span>
            <span className="text-gray-500 text-xs">•</span>
            <span className="text-gray-400 text-xs">{aiTools.length}+ AI Tools Listed</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Find the{' '}
            <span className="gradient-text">Best AI Tools</span>
            <br />for Any Task
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            The most comprehensive AI tools directory. Compare, review, and discover
            the perfect AI for writing, images, video, coding, and more.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto mb-10">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">🔍</span>
              <input
                type="text"
                placeholder="Search AI tools (e.g. 'image generation', 'coding'...)"
                className="w-full bg-[#111827] border border-gray-700 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#4F6EF7] transition-colors"
                readOnly
              />
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tools"
              className="bg-[#4F6EF7] hover:bg-[#3B56E8] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Browse All Tools →
            </Link>
            <Link
              href="/compare"
              className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-xl transition-colors border border-gray-700"
            >
              Compare AI Tools
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────── */}
      <section className="py-8 border-y border-gray-800 bg-[#0D1220]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: `${aiTools.length}+`, label: 'AI Tools Listed' },
              { value: `${categories.length}`, label: 'Categories' },
              { value: '50+', label: 'In-depth Reviews' },
              { value: '100K+', label: 'Monthly Readers' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Browse by Category</h2>
            <p className="text-gray-500">Find AI tools for every use case</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.id}`}
                className="card-hover bg-[#111827] border border-gray-800 rounded-xl p-4 text-center flex flex-col items-center gap-2"
              >
                <span className="text-2xl">{cat.emoji}</span>
                <span className="text-gray-300 text-xs font-medium leading-tight">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED TOOLS ────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#0D1220]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Editor's Picks</h2>
              <p className="text-gray-500">Hand-picked best AI tools across categories</p>
            </div>
            <Link href="/tools" className="text-[#4F6EF7] text-sm hover:underline hidden md:block">
              View all {aiTools.length} tools →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON HIGHLIGHT ──────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#111827] to-[#0D1528] border border-[#4F6EF7]/20 rounded-2xl p-8 text-center">
            <span className="text-4xl mb-4 block">⚖️</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Not Sure Which AI to Choose?
            </h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Our side-by-side comparison tool lets you compare any two AI tools across pricing, features, pros and cons.
            </p>
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 bg-[#4F6EF7] hover:bg-[#3B56E8] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Compare AI Tools →
            </Link>
          </div>
        </div>
      </section>

      {/* ── LATEST BLOG ───────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#0D1220]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Latest Guides & Reviews</h2>
              <p className="text-gray-500">In-depth AI tool guides and comparisons</p>
            </div>
            <Link href="/blog" className="text-[#4F6EF7] text-sm hover:underline hidden md:block">
              View all articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.slice(0, 6).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className="card-hover bg-[#111827] border border-gray-800 rounded-xl p-5 h-full flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-[#4F6EF7]/10 text-[#4F6EF7] border border-[#4F6EF7]/20 px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-600 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-white text-sm leading-snug">{post.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mt-auto">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-800">
                    <span className="text-gray-600 text-xs">{post.date}</span>
                    <span className="text-[#4F6EF7] text-xs">Read more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Stay Updated on AI Tools</h2>
          <p className="text-gray-500 mb-6">Weekly roundup of new AI tools, reviews, and guides. No spam.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-[#111827] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#4F6EF7] transition-colors"
            />
            <button className="bg-[#4F6EF7] hover:bg-[#3B56E8] text-white font-medium px-5 py-3 rounded-xl transition-colors whitespace-nowrap text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
                      }

