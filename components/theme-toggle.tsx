"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggle = () => {
    console.log("[v0] Current theme:", theme, "Resolved theme:", resolvedTheme)
    const newTheme = resolvedTheme === "light" ? "dark" : "light"
    console.log("[v0] Switching to theme:", newTheme)
    setTheme(newTheme)
  }

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10 glass-morphism hover:bg-primary/20 transition-all duration-300"
      >
        <Sun className="h-5 w-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className="h-10 w-10 glass-morphism hover:bg-primary/20 dark:hover:bg-primary/30 transition-all duration-300 group relative overflow-hidden"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-primary group-hover:text-accent" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-primary group-hover:text-accent" />

      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
