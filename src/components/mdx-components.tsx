import { type MDXComponents } from 'mdx/types'
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link  from 'next/link'

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mb-6 text-primary">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold mt-8 mb-4">{children}</h2>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-relaxed">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
  ),
  li: ({ children }) => (
    <li className="text-muted-foreground">{children}</li>
  ),
  TechGrid: ({ children }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">{children}</div>
  ),
  TechItem: ({ icon, name }) => (
    <div className="flex items-center space-x-2 p-2 border rounded-md">
      <span>{icon}</span>
      <span>{name}</span>
    </div>
  ),
  SocialLinks: () => (
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
  ),
}