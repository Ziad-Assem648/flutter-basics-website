"use client"

import { Moon, Sun, Globe2, Menu } from "lucide-react"
import { motion } from "framer-motion"

interface HeaderProps {
  language: "en" | "ar"
  isDark: boolean
  onToggleTheme: () => void
  onToggleLanguage: () => void
  onToggleSidebar: () => void
}

const translations = {
  en: {
    title: "Flutter Basics",
    subtitle: "Complete Guide to Flutter Widgets",
  },
  ar: {
    title: "أساسيات فلاتر",
    subtitle: "دليل شامل لأدوات فلاتر",
  },
}

export default function Header({ language, isDark, onToggleTheme, onToggleLanguage, onToggleSidebar }: HeaderProps) {
  const t = translations[language]

  return (
    <motion.header
      className="sticky top-0 z-50 bg-gradient-to-r from-background via-background to-background border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <motion.button
              onClick={onToggleSidebar}
              className="md:hidden p-2 hover:bg-cyan-500/20 rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="w-5 h-5 text-cyan-500" />
            </motion.button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                {t.title}
              </h1>
              <p className="text-xs sm:text-sm text-foreground/60">{t.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              onClick={onToggleLanguage}
              className="p-2 hover:bg-teal-500/20 rounded-lg transition-colors"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              title={language === "en" ? "Switch to Arabic" : "Switch to English"}
            >
              <Globe2 className="w-5 h-5 text-teal-500" />
            </motion.button>
            <motion.button
              onClick={onToggleTheme}
              className="p-2 hover:bg-emerald-500/20 rounded-lg transition-colors"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
