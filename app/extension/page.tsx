"use client"

import { ChevronLeft, Lightbulb, Check, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ExtensionPage() {
  const [reflectActive, setReflectActive] = useState(true)
  const [templateActive, setTemplateActive] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Think-First Extension UI</h1>
            <p className="text-sm text-slate-400">Browser extension with reflect prompts and model behavior tweaks</p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Query Input Area */}
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur p-6">
              <label className="block text-sm font-semibold mb-3 text-slate-200">User Query</label>
              <textarea
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 resize-none"
                rows={3}
                placeholder="What is photosynthesis? How does it work?"
                defaultValue="What is photosynthesis? How does it work?"
              />
            </div>

            {/* Think-First Reflect Prompt */}
            <div className="rounded-xl border-2 border-blue-500/30 bg-blue-500/10 backdrop-blur p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-200 mb-1">Reflect Prompt (Think-First Mode)</h3>
                  <p className="text-sm text-blue-300/70">
                    Before we dive in, take a moment to think about what you already know...
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-lg p-4 mb-4 space-y-3">
                <label className="flex items-center gap-3 cursor-pointer hover:bg-slate-800/50 p-2 rounded transition-colors">
                  <input
                    type="checkbox"
                    checked={reflectActive}
                    onChange={(e) => setReflectActive(e.target.checked)}
                    className="w-5 h-5 rounded border-slate-600 bg-slate-800 accent-blue-500"
                  />
                  <span className="text-sm text-slate-300">I've thought about what I know about this topic</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer hover:bg-slate-800/50 p-2 rounded transition-colors">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-600 bg-slate-800 accent-blue-500" />
                  <span className="text-sm text-slate-300">I can identify gaps in my understanding</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer hover:bg-slate-800/50 p-2 rounded transition-colors">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-600 bg-slate-800 accent-blue-500" />
                  <span className="text-sm text-slate-300">I'm ready for guided discovery</span>
                </label>
              </div>

              <button
                disabled={!reflectActive}
                className={`w-full py-2 rounded-lg font-medium transition-colors ${
                  reflectActive
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-slate-700 text-slate-400 cursor-not-allowed"
                }`}
              >
                Proceed to Response
              </button>
            </div>

            {/* Model Behavior Tweaks */}
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur p-6">
              <h3 className="font-semibold mb-4 text-slate-200">Model Behavior Settings</h3>

              <div className="space-y-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-slate-300">Response Type</label>
                    <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">Limited-Response</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Model provides hints and source links instead of full answers
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-slate-300">Suggested Sources Pipeline</label>
                    <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">Active</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Automatically suggest relevant learning resources and citations
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-slate-300">Reflection Depth</label>
                    <select className="text-xs bg-slate-800 border border-slate-600 text-slate-300 px-2 py-1 rounded">
                      <option>Medium</option>
                      <option>Light</option>
                      <option>Deep</option>
                    </select>
                  </div>
                  <p className="text-xs text-slate-400">Adjust the level of reflective prompting</p>
                </div>
              </div>
            </div>

            {/* Sample Response */}
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur p-6">
              <h3 className="font-semibold mb-4 text-slate-200">Limited-Response Output</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-slate-900/50 rounded-lg p-4 border-l-2 border-cyan-500">
                  <p className="text-slate-300 mb-2">
                    💡 <span className="font-medium">Hint:</span> Consider what happens at the cellular level when
                    plants are exposed to sunlight...
                  </p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border-l-2 border-cyan-500">
                  <p className="text-slate-300 mb-2">
                    🔗 <span className="font-medium">Learning Resources:</span>
                  </p>
                  <ul className="text-slate-400 space-y-1 ml-4">
                    <li>• Khan Academy: Photosynthesis Overview</li>
                    <li>• Nature Reviews: Photosynthetic Pathways</li>
                    <li>• NIST Educational Resources on Chlorophyll</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Side Panel - Settings */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-4">
              <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur p-6">
                <h3 className="font-semibold mb-4 text-slate-200">Extension Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-slate-300">Extension Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-slate-300">Think-First Mode ON</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-slate-300">Template Pipeline Ready</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-yellow-700/30 bg-yellow-500/10 backdrop-blur p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-yellow-700 mb-1">Pro Tip</p>
                    <p className="text-xs text-yellow-700/80">
                      Users who complete reflect prompts show 34% better retention of learned concepts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
