'use client'
import { useState } from 'react'
import { aiTools, categories } from '@/data/tools'
import ToolCard from '@/components/ToolCard'

export default function ToolsPage() {
  const [selectedCat, setSelectedCat] = useState('all')
  const [freeOnly, setFreeOnly] = useState(false)
  const [search, setSearch] = useState('')

  const filtered = aiTools.filter((t) => {
    const matchCat = selectedCat === 'all' || t.category === selectedCat
    const matchFree = !freeOnly || t.pricing.free
    const matchSearch =
      !search ||
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase()) ||
      t.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
    return matchCat && matchFree && matchSearch
  })

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            All AI Tools Directory
          </h1>
          <p className="text-gray-500">
            {aiTools.length} AI tools reviewed and rated. Find your perfect AI tool.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-xl mx-auto mb-8">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tools by name, category, or feature..."
            className="w-full bg-[#111827] border border-gray-700 rounded-xl pl-11 pr-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#4F6EF7] transition-colors"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button
            onClick={() => setSelectedCat('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCat === 'all'
                ? 'bg-[#4F6EF7] text-white'
                : 'bg-[#111827] text-gray-400 border border-gray-700 hover:border-[#4F6EF7]'
            }`}
          >
            All ({aiTools.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCat === cat.id
                  ? 'bg-[#4F6EF7] text-white'
                  : 'bg-[#111827] text-gray-400 border border-gray-700 hover:border-[#4F6EF7]'
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Free toggle */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <button
            onClick={() => setFreeOnly(!freeOnly)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors ${
              freeOnly
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-[#111827] text-gray-400 border border-gray-700'
            }`}
          >
            {freeOnly ? '✅' : '○'} Free tier only
          </button>
          <span className="text-gray-600 text-sm">{filtered.length} tools found</span>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <span className="text-4xl block mb-4">🔍</span>
            <p>No tools found. Try a different search or filter.</p>
          </div>
        )}
      </div>
    </div>
  )
                                       }

