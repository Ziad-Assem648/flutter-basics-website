"use client"

import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"
import { motion } from "framer-motion"

interface SearchBarProps {
  searchTerm: string
  onSearchChange: (term: string) => void
  language: "en" | "ar"
}

export default function SearchBar({ searchTerm, onSearchChange, language }: SearchBarProps) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
      <div className="relative bg-gradient-to-r from-background to-background/50 border border-cyan-500/20 rounded-2xl p-4 backdrop-blur-sm hover:border-cyan-500/50 transition-colors duration-300">
        <div className="flex items-center gap-3">
          <Search className="w-5 h-5 text-cyan-500 flex-shrink-0" />
          <Input
            type="text"
            placeholder={language === "en" ? "Search Flutter widgets..." : "ابحث عن أدوات فلاتر..."}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="flex-1 bg-transparent border-0 placeholder:text-foreground/40 focus:outline-none focus:ring-0"
          />
          {searchTerm && (
            <motion.button
              onClick={() => onSearchChange("")}
              className="text-foreground/40 hover:text-foreground transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-5 h-5" />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
