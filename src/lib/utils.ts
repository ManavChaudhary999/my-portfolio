import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function debugRendering(filename: string) {
  // Check if running on client
  const isClient = typeof window !== 'undefined'

  // Check if running on server
  const isServer = typeof window === 'undefined'
  
  isServer && console.log(`Rendering on Server Side: ${filename}`)
  isClient && console.log(`Rendering on Client Side: ${filename}`)
}
