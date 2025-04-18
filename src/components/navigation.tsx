"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "~/lib/utils"

export function Navigation() {
  const [activeTab, setActiveTab] = useState("about")

  const tabs = [
    { id: "about", label: "About" },
    { id: "blogs", label: "Blogs" },
    { id: "newsletter", label: "Newsletter" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="border-b border-border pb-1">
      <div className="flex space-x-6">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={`#${tab.id}`}
            className={cn(
              "py-2 text-sm font-medium transition-colors",
              activeTab === tab.id ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground",
            )}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

