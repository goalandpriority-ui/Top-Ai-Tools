'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-[#0A0F1E]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="font-bold text-lg text-white">
              Top<span className="text-[#4F6EF7]">AI</span>Tools
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/tools" className="text-gray-400 hover:text-white text-sm transition-colors">
              All Tools
            </Link>
            <Link href="/compare" className="text-gray-400 hover:text-white text-sm transition-colors">
              Compare
            </Link>
            <Link href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">
              Blog
            </Link>
            <Link href="/categories" className="text-gray-400 hover:text-white text-sm transition-colors">
              Categories
            </Link>
            <Link
              href="/tools"
              className="bg-[#4F6EF7] hover:bg-[#3B56E8] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Explore Tools →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-400 hover:text-white p-2"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-800 py-4 space-y-3">
            {['Tools', 'Compare', 'Blog', 'Categories'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block text-gray-400 hover:text-white text-sm px-2 py-1 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
