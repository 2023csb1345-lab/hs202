"use client"

import { ChevronLeft, Shield, Settings, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function TeacherModePage() {
  const [selectedStudent, setSelectedStudent] = useState("all")
  const [overrideActive, setOverrideActive] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <header className="border-b border-slate-700/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Teacher Mode Dashboard</h1>
            <p className="text-sm text-slate-400">Educator controls, overrides, and explainability features</p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Key Metrics */}
          {[
            { label: "Active Students", value: "28", icon: Users },
            { label: "Avg. Understanding", value: "76%", icon: TrendingUp },
            { label: "Teacher Overrides", value: "12", icon: Shield },
            { label: "Explainability Requests", value: "47", icon: Settings },
          ].map((metric, idx) => {
            const Icon = metric.icon
            return (
              <div key={idx} className="rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur p-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-slate-400">{metric.label}</p>
                  <Icon className="w-5 h-5 text-slate-500" />
                </div>
                <p className="text-3xl font-bold text-white">{metric.value}</p>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Student Query with Explainability */}
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur p-6">
              <div className="mb-6">
                <h3 className="font-semibold text-slate-200 mb-3">Student Query</h3>
                <p className="text-slate-300 bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  "What are the main causes of climate change?"
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-slate-200 mb-3">Model Response</h3>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30 space-y-2">
                  <p className="text-slate-300">
                    Climate change is primarily caused by greenhouse gas emissions from human activities, particularly:
                  </p>
                  <ul className="text-slate-400 space-y-1 ml-4 text-sm">
                    <li>• Burning fossil fuels for energy</li>
                    <li>• Industrial processes and manufacturing</li>
                    <li>• Agriculture and land use changes</li>
                  </ul>
                </div>
              </div>

              {/* Teacher Step-Reasoning Prompts */}
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-purple-200 mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Step-Reasoning Analysis (Teacher View)
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 text-white text-xs flex items-center justify-center">
                      1
                    </span>
                    <div>
                      <p className="font-medium text-purple-200">Fact Verification:</p>
                      <p className="text-purple-300/70">Sources cited: IPCC AR6, NASA Climate Data</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 text-white text-xs flex items-center justify-center">
                      2
                    </span>
                    <div>
                      <p className="font-medium text-purple-200">Reasoning Chain:</p>
                      <p className="text-purple-300/70">
                        Human emissions → Atmospheric composition change → Temperature increase
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 text-white text-xs flex items-center justify-center">
                      3
                    </span>
                    <div>
                      <p className="font-medium text-purple-200">Confidence Score:</p>
                      <p className="text-purple-300/70">94% confidence in factual accuracy</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Teacher Override */}
              <div className="border-2 border-amber-500/30 bg-amber-500/10 rounded-lg p-6">
                <h3 className="font-semibold text-amber-200 mb-4">Override Response (Teacher Discretion)</h3>
                <div className="space-y-4 mb-4">
                  <textarea
                    className="w-full bg-slate-900/50 border border-amber-500/30 rounded-lg p-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500/50 resize-none"
                    rows={3}
                    placeholder="Teacher can add context, additional explanations, or corrections here..."
                    defaultValue="Add context: This also connects to the Paris Agreement (2015) which aims to limit warming..."
                  />
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={overrideActive}
                      onChange={(e) => setOverrideActive(e.target.checked)}
                      className="w-4 h-4 rounded accent-amber-500"
                    />
                    <span className="text-sm text-amber-200">Replace model response with this override</span>
                  </label>
                </div>
                <button
                  disabled={!overrideActive}
                  className={`w-full py-2 rounded-lg font-medium transition-colors ${
                    overrideActive
                      ? "bg-amber-600 hover:bg-amber-700"
                      : "bg-slate-700 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  Apply Override
                </button>
              </div>
            </div>
          </div>

          {/* Teacher Controls Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-4">
              <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur p-6">
                <h3 className="font-semibold mb-4 text-slate-200 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Teacher Controls
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-purple-500" />
                    <span className="text-sm text-slate-300">Explainability</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-purple-500" />
                    <span className="text-sm text-slate-300">Step-Reasoning</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-purple-500" />
                    <span className="text-sm text-slate-300">Override Permissions</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-purple-500" />
                    <span className="text-sm text-slate-300">Response Moderation</span>
                  </label>
                </div>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur p-6">
                <h3 className="font-semibold mb-4 text-slate-200">Class Management</h3>
                <select className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500">
                  <option>All Students (28)</option>
                  <option>Period 1 (25)</option>
                  <option>Period 2 (24)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
