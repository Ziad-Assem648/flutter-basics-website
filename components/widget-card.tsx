"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import CodeBlock from "./code-block"
import { BookOpen, Lightbulb } from "lucide-react"
import type { Widget } from "@/lib/flutter-data"

interface WidgetCardProps {
  widget: Widget
  language: "en" | "ar"
}

const translations = {
  en: {
    description: "Description",
    properties: "Properties",
    example: "Example Code",
    usage: "Usage Tips",
    type: "Type",
    copyCode: "Copy Code",
    copied: "Copied!",
  },
  ar: {
    description: "الوصف",
    properties: "الخصائص",
    example: "مثال الكود",
    usage: "نصائح الاستخدام",
    type: "النوع",
    copyCode: "انسخ الكود",
    copied: "تم النسخ!",
  },
}

export default function WidgetCard({ widget, language }: WidgetCardProps) {
  const [mounted, setMounted] = useState(false)
  const t = translations[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      className="max-w-6xl mx-auto p-4 sm:p-8 space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="space-y-4" variants={itemVariants}>
        <div className="flex items-start gap-4 md:gap-6">
          <motion.div
            className="p-4 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl shadow-lg shadow-cyan-500/30 flex-shrink-0"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <span className="text-4xl md:text-5xl block">{widget.icon}</span>
          </motion.div>
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
              {widget.name}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-medium">
                {widget.type}
              </span>
            </div>
            <p className="text-foreground/60 mt-3 text-sm">
              {language === "en" ? "Flutter Widget Documentation" : "توثيق أداة فلاتر"}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="relative bg-gradient-to-br from-background to-background/50 rounded-2xl border border-cyan-500/20 p-6 md:p-8 overflow-hidden group"
        variants={itemVariants}
        whileHover={{ borderColor: "rgb(34, 211, 238)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative space-y-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-500" />
            <h2 className="text-2xl font-bold text-cyan-500">{t.description}</h2>
          </div>
          <p className="text-base leading-relaxed text-foreground/80">{widget.description[language]}</p>
        </div>
      </motion.div>

      <motion.div className="space-y-4" variants={itemVariants}>
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full" />
          <h2 className="text-2xl font-bold text-teal-500">{t.properties}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {widget.properties.map((prop, idx) => (
            <motion.div
              key={idx}
              className="group p-4 bg-gradient-to-br from-background to-background/50 rounded-xl border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 cursor-default"
              whileHover={{ translateY: -4, boxShadow: "0 0 20px rgba(20, 184, 166, 0.2)" }}
            >
              <div className="font-bold text-teal-500 text-sm mb-1">{prop.name}</div>
              <div className="text-xs text-foreground/40 mb-2 font-mono bg-background/50 px-2 py-1 rounded w-fit">
                {prop.type}
              </div>
              <div className="text-sm text-foreground/70">{prop.description[language]}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className="space-y-4" variants={itemVariants}>
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-cyan-500 rounded-full" />
          <h2 className="text-2xl font-bold text-emerald-500">{t.example}</h2>
        </div>
        <CodeBlock code={widget.code} language="dart" />
      </motion.div>

      <motion.div
        className="relative bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5 rounded-2xl border border-emerald-500/30 p-6 md:p-8 overflow-hidden"
        variants={itemVariants}
        whileHover={{ borderColor: "rgb(16, 185, 129)" }}
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl -z-0" />
        <div className="relative space-y-4">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-emerald-500" />
            <h2 className="text-2xl font-bold text-emerald-500">{t.usage}</h2>
          </div>
          <ul className="space-y-3">
            {widget.tips[language].map((tip, idx) => (
              <motion.li
                key={idx}
                className="flex gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors"
                whileHover={{ paddingLeft: "1.5rem" }}
              >
                <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                <span className="text-foreground/80">{tip}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}
