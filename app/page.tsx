"use client"

import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import WidgetCard from "@/components/widget-card"
import SearchBar from "@/components/search-bar"
import CategoryFilter from "@/components/category-filter"
import { flutterWidgets } from "@/lib/flutter-data"
import type { Widget } from "@/lib/flutter-data"

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState<"en" | "ar">("en")
  const [mounted, setMounted] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedWidget, setSelectedWidget] = useState<Widget>(flutterWidgets[0])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"list" | "grid" | "detail">("grid")

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") || "light"
    const savedLang = localStorage.getItem("language") || "en"
    setIsDark(savedTheme === "dark")
    setLanguage(savedLang as "en" | "ar")
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
    document.documentElement.lang = savedLang
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr"
  }, [])

  const categories = useMemo(() => {
    const cats = Array.from(new Set(flutterWidgets.map((w) => w.type)))
    return [
      { id: "all", label: language === "en" ? "All Widgets" : "جميع الأدوات", count: flutterWidgets.length },
      ...cats.map((cat) => ({
        id: cat,
        label: cat,
        count: flutterWidgets.filter((w) => w.type === cat).length,
      })),
    ]
  }, [language])

  const filteredWidgets = useMemo(() => {
    return flutterWidgets.filter((widget) => {
      const matchesSearch =
        widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        widget.description.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
        widget.description.ar.includes(searchTerm)

      const matchesCategory = selectedCategory === "all" || widget.type === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle("dark", newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en"
    setLanguage(newLang)
    localStorage.setItem("language", newLang)
  }

  // Update selected widget if it's filtered out
  useEffect(() => {
    if (!filteredWidgets.find((w) => w.id === selectedWidget.id)) {
      setSelectedWidget(filteredWidgets[0] || flutterWidgets[0])
    }
  }, [filteredWidgets, selectedWidget.id])

  if (!mounted) return null

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? "dark" : ""}`}>
      <Header
        language={language}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onToggleLanguage={toggleLanguage}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Categories Slider on the Left */}
        <div className="hidden md:block w-64 bg-gradient-to-b from-card to-card/50 border-r border-cyan-500/20 overflow-hidden z-40 flex-shrink-0 flex flex-col mr-4">
          <div className="p-4 border-b border-cyan-500/20 sticky top-0 bg-card/80 backdrop-blur-sm z-10">
            <h2 className="font-bold text-lg bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500">
                <path d="M10 3H3v18h18v-7" />
                <path d="m21 3-9 9" />
                <path d="M21 3v7h-7" />
              </svg>
              {language === "en" ? "Categories" : "الفئات"}
            </h2>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar pb-4">
            <div className="space-y-1 p-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex justify-between items-center group ${selectedCategory === category.id ? "bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400" : "hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20"}`}
                >
                  <span className="text-sm font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-400">{category.label}</span>
                  <span className="text-xs bg-cyan-500/20 px-2 py-1 rounded-full text-cyan-600 dark:text-cyan-400 font-medium">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <main className="flex-1 overflow-auto">
          <div className="p-6 space-y-6 max-w-7xl mx-auto">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} language={language} />

            {/* Mobile Category Filter */}
            <div className="md:hidden">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                language={language}
              />
            </div>

            <div className="text-sm text-foreground/60 flex justify-between items-center">
              <div>
                {language === "en"
                  ? `Showing ${filteredWidgets.length} of ${flutterWidgets.length} widgets`
                  : `عرض ${filteredWidgets.length} من ${flutterWidgets.length} أداة`}
              </div>
              <div className="flex gap-2">
                {viewMode === "detail" ? (
                  <button 
                    onClick={() => setViewMode("grid")}
                    className="px-3 py-1 rounded bg-cyan-500 text-white"
                  >
                    {language === "en" ? "Back to Widgets" : "العودة إلى الأدوات"}
                  </button>
                ) : (
                  <>
                    <button 
                      onClick={() => setViewMode("grid")}
                      className={`px-3 py-1 rounded ${viewMode === "grid" ? "bg-cyan-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
                    >
                      Grid
                    </button>
                    <button 
                      onClick={() => setViewMode("list")}
                      className={`px-3 py-1 rounded ${viewMode === "list" ? "bg-cyan-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
                    >
                      List
                    </button>
                  </>
                )}
              </div>
            </div>

            {filteredWidgets.length > 0 ? (
              viewMode === "detail" ? (
                // Detail view for selected widget
                <WidgetCard widget={selectedWidget} language={language} />
              ) : viewMode === "grid" ? (
                // Grid view showing all widgets
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredWidgets.map((widget) => (
                    <div 
                      key={widget.id}
                      className={`rounded-2xl border p-5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${selectedWidget.id === widget.id ? "border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 shadow-lg" : "border-foreground/20 hover:border-cyan-500/50"}`}
                      onClick={() => {
                        setSelectedWidget(widget)
                        setViewMode("detail")
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex-shrink-0 shadow-md">
                          <span className="text-3xl">{widget.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-xl text-foreground mb-1">{widget.name}</h3>
                          <div className="text-xs text-foreground/50 mb-2">
                            {widget.type}
                          </div>
                          <p className="text-sm text-foreground/70 line-clamp-2">
                            {widget.description[language]}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <span className="text-xs bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 px-2 py-1 rounded-full">
                          {widget.properties.length} {language === "en" ? "properties" : "خصائص"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // List view showing all widgets
                <div className="space-y-4">
                  {filteredWidgets.map((widget) => (
                    <div 
                      key={widget.id}
                      className={`rounded-2xl border p-5 cursor-pointer transition-all duration-300 hover:shadow-lg ${selectedWidget.id === widget.id ? "border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 shadow-lg" : "border-foreground/20 hover:border-cyan-500/50"}`}
                      onClick={() => {
                        setSelectedWidget(widget)
                        setViewMode("detail")
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex-shrink-0 shadow-md">
                          <span className="text-3xl">{widget.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold text-xl text-foreground mb-1">{widget.name}</h3>
                              <div className="text-xs text-foreground/50 mb-2">
                                {widget.type}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-foreground/70 mb-3">
                            {widget.description[language]}
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="text-xs text-foreground/60">
                              {widget.properties.length} {language === "en" ? "properties" : "خصائص"}
                            </div>
                            <div className="text-xs bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 px-2 py-1 rounded-full">
                              {language === "en" ? "Click for details" : "انقر للتفاصيل"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : (
              <div className="flex flex-col items-center justify-center h-96 rounded-lg border-2 border-dashed border-foreground/20">
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-foreground/60 text-lg">
                  {language === "en" ? "No widgets found matching your search" : "لم يتم العثور على أدوات تطابق البحث"}
                </p>
                <p className="text-foreground/40 text-sm mt-2">
                  {language === "en"
                    ? "Try adjusting your search terms or filters"
                    : "حاول تعديل شروط البحث أو المرشحات"}
                </p>
              </div>
            )}
          </div>
        </main>

        {/* Sidebar on the Right */}
        <div className="ml-4 hidden md:block">
          <Sidebar
            language={language}
            isOpen={true}
            onClose={() => {}}
            widgets={filteredWidgets}
            selectedWidget={selectedWidget}
            onSelectWidget={(widget) => {
              setSelectedWidget(widget)
              setViewMode("detail")
            }}
          />
        </div>
      </div>
    </div>
  )
}
