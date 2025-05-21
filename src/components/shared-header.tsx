import { Avatar } from "~/components/ui/avatar"
import { ThemeToggle } from "~/components/theme-toggle"
import { Download, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "~/components/ui/button"
import Image from "next/image"
import Link from "next/link"

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
          <Link href="https://twitter.com" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="https://github.com" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://linkedin.com" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="mailto:999manavchaudhary@gmail.com" aria-label="Email">
            <Mail className="h-5 w-5" />
          </Link>
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