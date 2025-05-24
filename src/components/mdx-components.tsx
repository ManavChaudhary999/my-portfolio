import React from 'react'
import Link  from 'next/link'
import { type MDXComponents } from 'mdx/types'
import { sociallinks } from '~/data'

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
      {
        sociallinks.map(({ id, link, icon }) => (
          <Link href={link} aria-label={id} key={id} target="_blank">
            {React.createElement(icon, { className: "h-5 w-5" })}
          </Link>
        ))
      }
    </div>
  ),
}