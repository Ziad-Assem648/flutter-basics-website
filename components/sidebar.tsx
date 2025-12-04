"use client"

import { useState } from "react"
import { Search, X, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { Widget } from "@/lib/flutter-data"

interface SidebarProps {
  language: "en" | "ar"
  isOpen: boolean
  onClose: () => void
  widgets: Widget[]
  selectedWidget: Widget
  onSelectWidget: (widget: Widget) => void
}

const translations = {
  en: { search: "Search widgets...", all: "All Widgets", basic: "Basic", layout: "Layout", input: "Input" },
  ar: { search: "بحث عن الأدوات...", all: "جميع الأدوات", basic: "أساسي", layout: "تخطيط", input: "إدخال" },
}

export default function Sidebar({ language, isOpen, onClose, widgets, selectedWidget, onSelectWidget }: SidebarProps) {
  const [search, setSearch] = useState("")
  const t = translations[language]

  const filtered = widgets.filter(
    (w) =>
      w.name.toLowerCase().includes(search.toLowerCase()) ||
      w.description[language].toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <motion.aside
        className={`fixed md:relative md:flex ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 w-64 bg-gradient-to-b from-card to-card/50 border-r border-cyan-500/20 h-screen overflow-hidden z-40 md:z-0 flex flex-col`}
        initial={{ x: -256 }}
        animate={{ x: isOpen ? 0 : -256 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Header */}
        <div className="p-4 border-b border-cyan-500/20 flex items-center justify-between bg-background/50">
          <h2 className="font-bold text-lg bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
            {t.all}
          </h2>
          <button onClick={onClose} className="md:hidden p-1 hover:bg-cyan-500/20 rounded-lg transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-cyan-500/20">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-cyan-500/50" />
            <input
              type="text"
              placeholder={t.search}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-background border border-cyan-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-sm"
            />
          </div>
        </div>

        {/* Widget list */}
        <div className="flex-1 overflow-auto">
          <div className="p-2 space-y-1">
            {filtered.map((widget, idx) => (
              <motion.button
                key={widget.id}
                onClick={() => {
                  onSelectWidget(widget)
                  onClose()
                }}
                className={`w-full text-left px-3 py-3 rounded-lg transition-all duration-200 group relative ${
                  selectedWidget.id === widget.id
                    ? "bg-gradient-to-r from-cyan-500/30 to-teal-500/30 border border-cyan-500/50"
                    : "hover:bg-cyan-500/10 border border-transparent"
                }`}
                whileHover={{ paddingLeft: "1rem" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.02 }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-foreground">{widget.name}</div>
                    <div className="text-xs text-foreground/50 truncate mt-1">
                      {widget.description[language].substring(0, 40)}...
                    </div>
                  </div>
                  {selectedWidget.id === widget.id && (
                    <ChevronRight className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-1" />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.aside>
    </>
  )
}
