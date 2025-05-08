"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "~/lib/utils"
import { Home } from "lucide-react"

export function Navigation() {
  const [activeTab, setActiveTab] = useState("/")

  const tabs = [
    { id: "/", label: "Home", icon: Home },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="border-b border-border pb-1 mb-8">
      <div className="flex space-x-6">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.id}
            className={cn(
              "py-2 text-sm font-medium transition-colors",
              activeTab === tab.id ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground",
            )}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon ? (<tab.icon className="h-4 w-4" />) : tab.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

