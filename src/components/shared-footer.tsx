import React from "react";
import { debugRendering } from "~/lib/utils";

debugRendering('SharedFooterComponent');

export function SharedFooter() {
  return (
    <div className="border-t py-6 md:py-8">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Manav Chaudhary. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}