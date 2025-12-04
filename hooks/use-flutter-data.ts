"use client"

import { useMemo } from "react"
import { flutterWidgets } from "@/lib/flutter-data"

export function useFlutterWidgets(searchTerm = "", selectedCategory = "all", language: "en" | "ar" = "en") {
  return useMemo(() => {
    return flutterWidgets.filter((widget) => {
      const matchesSearch =
        widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        widget.description.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
        widget.description.ar.includes(searchTerm)

      const matchesCategory = selectedCategory === "all" || widget.type === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory, language])
}

export function useWidgetCategories(language: "en" | "ar" = "en") {
  return useMemo(() => {
    const cats = Array.from(new Set(flutterWidgets.map((w) => w.type)))
    return [
      {
        id: "all",
        label: language === "en" ? "All Widgets" : "جميع الأدوات",
        count: flutterWidgets.length,
      },
      ...cats.map((cat) => ({
        id: cat,
        label: cat,
        count: flutterWidgets.filter((w) => w.type === cat).length,
      })),
    ]
  }, [language])
}
