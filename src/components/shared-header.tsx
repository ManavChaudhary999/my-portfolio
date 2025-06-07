import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Download } from "lucide-react"
import { Avatar } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import { ThemeToggle } from "~/components/theme-toggle"
import { sociallinks } from "~/data"
import { debugRendering } from "~/lib/utils"

debugRendering('SharedHeaderComponent');

export function SharedHeader() {
  return (
      <div className="flex flex-col items-center mb-12">
        <Avatar className="w-24 h-24 mb-4">
          <Image
            src="/avatar.png?height=96&width=96"
            alt="Ansub Khan"
            width={96}
            height={96}
            className="rounded-full"
          />
        </Avatar>
        <h1 className="text-2xl font-semibold mb-1">Manav Chaudhary</h1>
        <p className="text-muted-foreground mb-4">Full Stack Developer</p>

        <div className="flex space-x-4 mb-6">
        {
          sociallinks.map(({ id, link, icon }) => (
            <Link href={link} aria-label={id} key={id} target="_blank">
              {React.createElement(icon, { className: "h-5 w-5" })}
            </Link>
          ))
        }
        </div>

        <Button
          variant="outline"
          size="sm"
          className="mb-6"
          asChild
        >
          <Link href="/ManavResume_v4.pdf" download>
            <Download className="h-4 w-4 mr-2" />
            Resume
          </Link>
        </Button>

        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
      </div>
  )
}