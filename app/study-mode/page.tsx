"use client"

import { ChevronLeft, Zap, BookMarked, ExternalLink, Lightbulb } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function StudyModePage() {
  const [stepIndex, setStepIndex] = useState(0)

  const hints = [
    "Think about the basic definition first - what does 'metabolism' mean in biology?",
    "Consider two main types: anabolic (building up) and catabolic (breaking down)",
    "What role do enzymes play in these processes?",
  ]

  const sources = [
    { title: "What is Metabolism?", url: "Khan Academy", type: "Educational" },
    { title: "Metabolic Pathways Overview", url: "Nature Review", type: "Research" },
    { title: "Enzyme Kinetics in Metabolism", url: "OpenStax Biology", type: "Textbook" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <header className="border-b border-slate-700/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Study Mode Interface</h1>
            <p className="text-sm text-slate-400">
              Stepwise hints, reflective prompts, links-to-sources instead of full answers
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Study Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Student Query */}
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur p-6">
              <label className="block text-sm font-semibold mb-3 text-slate-200">Your Question</label>
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 text-slate-300">
                "Explain the role of metabolism in living organisms"
              </div>
            </div>

            {/* Stepwise Hints */}
            <div className="rounded-xl border border-green-500/30 bg-green-500/10 backdrop-blur p-6">
              <h3 className="font-semibold text-green-200 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Stepwise Hints (Guided Discovery)
              </h3>

              <div className="space-y-3">
                {hints.map((hint, idx) => (
                  <div
                    key={idx}
                    className={`rounded-lg p-4 border-l-4 transition-all ${
                      idx <= stepIndex
                        ? "bg-slate-900/50 border-l-green-500"
                        : "bg-slate-900/30 border-l-slate-700 opacity-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          idx <= stepIndex ? "bg-green-600 text-white" : "bg-slate-700 text-slate-400"
                        }`}
                      >
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-300">{hint}</p>
                        {idx === stepIndex && idx < hints.length - 1 && (
                          <button
                            onClick={() => setStepIndex(idx + 1)}
                            className="mt-2 text-xs font-medium text-green-400 hover:text-green-300 transition-colors"
                          >
                            Next Hint →
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                <div className="flex-1 h-1 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-600 transition-all"
                    style={{ width: `${((stepIndex + 1) / hints.length) * 100}%` }}
                  />
                </div>
                <span>
                  {stepIndex + 1}/{hints.length}
                </span>
              </div>
            </div>

            {/* Reflective Prompts */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 backdrop-blur p-6">
              <h3 className="font-semibold text-blue-200 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Reflective Prompts
              </h3>
              <div className="space-y-3">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-blue-500/20">
                  <p className="text-sm text-blue-200 font-medium mb-2">Question for reflection:</p>
                  <p className="text-sm text-slate-300">
                    How would an organism survive if it couldn't perform these metabolic processes?
                  </p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-blue-500/20">
                  <p className="text-sm text-blue-200 font-medium mb-2">Connection prompt:</p>
                  <p className="text-sm text-slate-300">
                    Can you relate metabolic processes to energy transformations you see in everyday life?
                  </p>
                </div>
              </div>
            </div>

            {/* Response Stub */}
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur p-6">
              <h3 className="font-semibold text-slate-200 mb-4">Your Answer (Space to Work)</h3>
              <textarea
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 resize-none"
                rows={4}
                placeholder="Write your answer here based on the hints you've received..."
              />
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors">
                Submit Answer
              </button>
            </div>
          </div>

          {/* Resources Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-4">
              <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur p-6">
                <h3 className="font-semibold mb-4 text-slate-200 flex items-center gap-2">
                  <BookMarked className="w-5 h-5" />
                  Learning Resources
                </h3>

                <div className="space-y-3">
                  {sources.map((source, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="group block rounded-lg border border-slate-700/50 bg-slate-900/50 hover:bg-slate-900 hover:border-slate-600 p-3 transition-colors"
                    >
                      <div className="flex items-start gap-2">
                        <ExternalLink className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-slate-300 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-200 group-hover:text-white line-clamp-2">
                            {source.title}
                          </p>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs text-slate-500">{source.url}</span>
                            <span className="text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded whitespace-nowrap">
                              {source.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                <button className="w-full mt-4 text-sm text-slate-400 hover:text-slate-300 py-2 transition-colors">
                  + View More Resources
                </button>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur p-6">
                <h3 className="font-semibold mb-3 text-slate-200">Study Progress</h3>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-slate-400">Questions Answered</span>
                      <span className="text-xs font-semibold text-slate-300">6/10</span>
                    </div>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-600" style={{ width: "60%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-slate-400">Hints Used</span>
                      <span className="text-xs font-semibold text-slate-300">3/4</span>
                    </div>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600" style={{ width: "75%" }} />
                    </div>
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
