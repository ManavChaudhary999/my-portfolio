import Link from "next/link"
import { Navigation } from "~/components/navigation"
import { ChevronRight, Home } from "lucide-react"
import { Experience } from "~/components/experience"
import { Projects } from "~/components/projects"

export default function HomePage() {
  return (
    <>
      {/* <nav className="flex items-center space-x-2 mb-8 text-sm text-muted-foreground">
        <span className="text-foreground">
              <Home className="h-4 w-4" />
        </span>
      </nav> */}

      <section id="about" className="mb-12">
        <p className="text-lg leading-relaxed">
          Hello! I'm Manav, a Lead Software Engineer & Designer. Passionate about crafting tools that empower developers
          and designers to express themselves seamlessly.
          <Link href="/about" className="block mt-4 text-primary hover:underline">
            Click Here to Understand Me 😊
          </Link>
        </p>
      </section>

      <Experience />

      <Projects />
    </>
  )
}

