"use client"

import { motion } from "framer-motion"

interface Category {
  id: string
  label: string
  count: number
}

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  language: "en" | "ar"
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  language,
}: CategoryFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h3 className="text-sm font-semibold text-foreground/60 mb-4 flex items-center gap-2">
        <span className="w-1 h-4 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full" />
        {language === "en" ? "Filter by Category" : "التصفية حسب الفئة"}
      </h3>
      <div className="flex flex-wrap gap-3">
        {categories.map((category, idx) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/50"
                : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10 border border-foreground/10"
            }`}
          >
            <span>{category.label}</span>
            <span className="ml-2 text-xs opacity-70">({category.count})</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
