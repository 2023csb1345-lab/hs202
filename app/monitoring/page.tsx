"use client"

import { ChevronLeft, AlertTriangle, TrendingUp, Clock, Zap } from "lucide-react"
import Link from "next/link"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export default function MonitoringPage() {
  const usageData = [
    { day: "Mon", usage: 45, avgScore: 78 },
    { day: "Tue", usage: 52, avgScore: 82 },
    { day: "Wed", usage: 48, avgScore: 75 },
    { day: "Thu", usage: 61, avgScore: 85 },
    { day: "Fri", usage: 55, avgScore: 80 },
    { day: "Sat", usage: 38, avgScore: 72 },
    { day: "Sun", usage: 42, avgScore: 76 },
  ]

  const sleepRiskData = [
    { time: "10pm", risk: 15, students: 2 },
    { time: "11pm", risk: 35, students: 8 },
    { time: "12am", risk: 68, students: 18 },
    { time: "1am", risk: 85, students: 22 },
    { time: "2am", risk: 92, students: 24 },
    { time: "3am", risk: 88, students: 19 },
  ]

  const alerts = [
    {
      type: "sleep-risk",
      message: "Student Alex Chen has been active for 4+ hours past 11pm",
      severity: "high",
      time: "2:15 AM",
    },
    {
      type: "usage-spike",
      message: "Unusual usage spike detected in Period 2 class",
      severity: "medium",
      time: "1:45 AM",
    },
    {
      type: "engagement",
      message: "Sarah Martinez showing 3 failed attempts on Study Mode",
      severity: "medium",
      time: "1:30 AM",
    },
    {
      type: "query-quality",
      message: "Repeated similar queries suggest concept confusion",
      severity: "low",
      time: "12:45 AM",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <header className="border-b border-slate-700/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Monitoring & Alert Dashboard</h1>
            <p className="text-sm text-slate-400">Usage analytics, sleep-risk monitoring, and smart alerts</p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Active Sessions", value: "34", change: "+12%", icon: Zap },
            { label: "Total Usage Hours", value: "284h", change: "+8.5%", icon: Clock },
            { label: "At-Risk Students", value: "8", change: "High", icon: AlertTriangle },
            { label: "Avg. Performance", value: "79.4%", change: "+2.1%", icon: TrendingUp },
          ].map((metric, idx) => {
            const Icon = metric.icon
            return (
              <div key={idx} className="rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur p-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-slate-400 uppercase tracking-wider">{metric.label}</p>
                  <Icon className="w-4 h-4 text-slate-500" />
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <span
                    className={`text-xs font-medium ${metric.change === "High" ? "text-red-400" : "text-green-400"}`}
                  >
                    {metric.change}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Usage Over Time */}
          <div className="lg:col-span-2 rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur p-6">
            <h3 className="font-semibold mb-4 text-slate-200">Weekly Usage & Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.1)" />
                <XAxis dataKey="day" stroke="rgba(148, 163, 184, 0.5)" />
                <YAxis stroke="rgba(148, 163, 184, 0.5)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(15, 23, 42, 0.9)",
                    border: "1px solid rgba(71, 85, 105, 0.5)",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="usage" stroke="#3b82f6" strokeWidth={2} name="Usage (min)" />
                <Line type="monotone" dataKey="avgScore" stroke="#10b981" strokeWidth={2} name="Avg Score (%)" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Sleep Risk Timeline */}
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 backdrop-blur p-6">
            <h3 className="font-semibold mb-4 text-red-200 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Sleep-Risk Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sleepRiskData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.1)" />
                <XAxis dataKey="time" stroke="rgba(148, 163, 184, 0.5)" angle={-45} height={80} />
                <YAxis stroke="rgba(148, 163, 184, 0.5)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(15, 23, 42, 0.9)",
                    border: "1px solid rgba(239, 68, 68, 0.5)",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="risk" fill="#ef4444" name="Risk %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Smart Alerts */}
          <div className="lg:col-span-2 rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur p-6">
            <h3 className="font-semibold mb-4 text-slate-200">Smart Alert System</h3>
            <div className="space-y-3">
              {alerts.map((alert, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg p-4 border-l-4 ${
                    alert.severity === "high"
                      ? "bg-red-500/10 border-l-red-500"
                      : alert.severity === "medium"
                        ? "bg-yellow-500/10 border-l-yellow-500"
                        : "bg-blue-500/10 border-l-blue-500"
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <p
                      className={`text-sm font-medium ${
                        alert.severity === "high"
                          ? "text-red-200"
                          : alert.severity === "medium"
                            ? "text-yellow-200"
                            : "text-blue-200"
                      }`}
                    >
                      {alert.message}
                    </p>
                    <span className="text-xs text-slate-500">{alert.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        alert.severity === "high"
                          ? "bg-red-500/20 text-red-300"
                          : alert.severity === "medium"
                            ? "bg-yellow-500/20 text-yellow-300"
                            : "bg-blue-500/20 text-blue-300"
                      }`}
                    >
                      {alert.severity.toUpperCase()}
                    </span>
                    <button className="text-xs font-medium text-slate-400 hover:text-slate-300 transition-colors">
                      Take Action →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* At-Risk Students */}
          <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur p-6">
            <h3 className="font-semibold mb-4 text-slate-200">At-Risk Students</h3>
            <div className="space-y-3">
              {[
                { name: "Alex Chen", reason: "Late-night usage", risk: "High", time: "4h 22m" },
                { name: "Jordan Kim", reason: "Repeated queries", risk: "Medium", time: "2h 15m" },
                { name: "Sam Taylor", reason: "Low engagement", risk: "Medium", time: "45m" },
                { name: "Morgan Lee", reason: "Failed attempts", risk: "Low", time: "1h 30m" },
              ].map((student, idx) => (
                <div key={idx} className="rounded-lg border border-slate-700/50 bg-slate-900/50 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-slate-200">{student.name}</p>
                    <span
                      className={`text-xs px-2 py-0.5 rounded font-medium ${
                        student.risk === "High"
                          ? "bg-red-500/20 text-red-300"
                          : student.risk === "Medium"
                            ? "bg-yellow-500/20 text-yellow-300"
                            : "bg-blue-500/20 text-blue-300"
                      }`}
                    >
                      {student.risk}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-slate-400">{student.reason}</p>
                    <p className="text-xs font-medium text-slate-500">{student.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
