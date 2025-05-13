import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import path from 'path';
import fs from 'fs/promises';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from "~/components/mdx-components";

export default async function AboutPage() {
  const content = await fs.readFile(
    path.join(process.cwd(), `/src/data/about.mdx`),
    'utf8'
  );

  return (
    <>
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground flex items-center">
          <Home className="h-4 w-4" />
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">About</span>
      </nav>

      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote source={content} components={mdxComponents} />
        <Link href="/" className="inline-block mt-8 text-primary hover:underline">
          ← Back to Home
        </Link>
      </div>
    </>
  )
}