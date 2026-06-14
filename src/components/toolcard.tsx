import Link from 'next/link'
import type { AITool } from '@/data/tools'

const badgeColors: Record<string, string> = {
  'Best Overall': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  'Best Free': 'bg-green-500/10 text-green-400 border-green-500/30',
  'Editor Pick': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  'Most Popular': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  'Best Value': 'bg-orange-500/10 text-orange-400 border-orange-500/30',
}

export default function ToolCard({ tool }: { tool: AITool }) {
  return (
    <Link href={`/tools/${tool.id}`}>
      <div className="card-hover bg-[#111827] border border-gray-800 rounded-xl p-5 h-full flex flex-col gap-3 cursor-pointer">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{tool.logo}</span>
            <div>
              <h3 className="font-semibold text-white text-sm leading-tight">{tool.name}</h3>
              <p className="text-gray-500 text-xs mt-0.5">{tool.tagline}</p>
            </div>
          </div>
          {tool.badge && (
            <span className={`text-xs px-2 py-0.5 rounded-full border shrink-0 font-medium ${badgeColors[tool.badge]}`}>
              {tool.badge}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">{tool.description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {tool.features.slice(0, 3).map((f) => (
            <span key={f} className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full">{f}</span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-800">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-xs">{'⭐'.repeat(Math.floor(tool.rating))}</span>
            <span className="text-gray-500 text-xs">{tool.rating}</span>
          </div>
          <div className="flex items-center gap-2">
            {tool.pricing.free && (
              <span className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">Free tier</span>
            )}
            <span className="text-[#4F6EF7] text-xs font-medium">View →</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

