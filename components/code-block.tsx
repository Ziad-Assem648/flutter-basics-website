"use client"

import { useState } from "react"
import { Copy, Check, Code2 } from "lucide-react"
import { motion } from "framer-motion"

interface CodeBlockProps {
  code: string
  language: string
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl"
      whileHover={{ borderColor: "rgb(100, 116, 139)" }}
    >
      <div className="flex items-center justify-between p-4 border-b border-slate-700/50 bg-slate-900/50">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{language}</span>
        </div>
        <motion.button
          onClick={copyToClipboard}
          className="p-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </motion.button>
      </div>

      <pre className="p-6 overflow-x-auto max-h-96 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
        <code className="text-sm font-mono text-slate-100 leading-relaxed">
          {code.split("\n").map((line, idx) => (
            <div key={idx} className="flex gap-4">
              <span className="text-slate-600 select-none w-8 text-right">{idx + 1}</span>
              <span className="flex-1">{line || "\n"}</span>
            </div>
          ))}
        </code>
      </pre>
    </motion.div>
  )
}
