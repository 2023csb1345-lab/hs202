import Link from "next/link"
import { ArrowRight, Zap, Users, BookOpen, BarChart3 } from "lucide-react"

export default function Home() {
  const prototypes = [
    {
      title: "Think-First Extension UI",
      description:
        'Browser extension implementing reflect prompts with "think-first" checkboxes and model behavior tweaks',
      href: "/extension",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Teacher Mode Dashboard",
      description: "Teacher overrides, explainability features, and step-reasoning prompts for educators",
      href: "/teacher-mode",
      icon: Users,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Study Mode Interface",
      description: "Stepwise hints, reflective prompts, and links-to-sources instead of full answers",
      href: "/study-mode",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Monitoring & Alert Dashboard",
      description: "Usage analytics, sleep-risk monitoring, and smart alert system for administrators",
      href: "/monitoring",
      icon: BarChart3,
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-lg">
              DR
            </div>
            <h1 className="text-2xl font-bold">DarkRai o1</h1>
          </div>
          <p className="text-sm text-slate-400">AI Learning System - Targeted Features</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            DarkRai o1
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              Targeted Feature Prototypes
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Interactive mockups showcasing four key components of our intelligent learning platform with educator
            control, student learning optimization, and comprehensive monitoring capabilities.
          </p>
        </div>

        {/* Prototypes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {prototypes.map((proto, idx) => {
            const IconComponent = proto.icon
            return (
              <Link href={proto.href} key={idx}>
                <div className="group h-full rounded-xl border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/60 backdrop-blur p-8 transition-all duration-300 hover:border-slate-600 hover:shadow-xl hover:shadow-slate-900/50 cursor-pointer">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${proto.color} flex items-center justify-center`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-slate-300 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{proto.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{proto.description}</p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: "Think-First", value: "UI Nudges" },
            { label: "Teacher Control", value: "Overrides & Explainability" },
            { label: "Student Learning", value: "Guided Discovery" },
            { label: "Monitoring", value: "Real-time Analytics" },
          ].map((item, idx) => (
            <div key={idx} className="rounded-lg border border-slate-700/50 bg-slate-800/20 p-4 text-center">
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-white font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur mt-24">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-slate-400 text-sm">
          <p>DarkRai o1 - Interactive prototypes for AI Learning System research and evaluation</p>
        </div>
      </footer>
    </main>
  )
}
