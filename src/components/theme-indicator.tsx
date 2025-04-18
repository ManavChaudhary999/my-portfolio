"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeIndicator() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed bottom-4 left-4 bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-md opacity-70">
      {theme === "light" ? "Ghibli Theme" : "Dark Mode"}
    </div>
  )
}

