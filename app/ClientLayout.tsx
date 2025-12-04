"use client"

import type React from "react"

import { useState, useEffect } from "react"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // added dark mode and language state management
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState<"en" | "ar">("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") || "light"
    const savedLang = localStorage.getItem("language") || "en"
    setIsDark(savedTheme === "dark")
    setLanguage(savedLang as "en" | "ar")
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", isDark ? "dark" : "light")
      localStorage.setItem("language", language)
      document.documentElement.lang = language
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    }
  }, [isDark, language, mounted])

  if (!mounted) return null

  return (
    <>
      <div className={`font-sans antialiased min-h-screen bg-background text-foreground transition-colors duration-300 ${isDark ? "dark" : ""}`}>
        {children}
      </div>
      <script async src="https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/highlight.min.js"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/atom-one-dark.min.css" />
    </>
  )
}
