import type React from "react"
import type { Metadata } from "next"
import { Inter, Nunito, PT_Sans } from "next/font/google"
import "~/styles/globals.css"
import { ThemeProvider } from "~/components/theme-provider"
import { SharedHeader } from "~/components/shared-header"
// import { Navigation } from "~/components/navigation"
import { SharedFooter } from "~/components/shared-footer"
import { debugRendering } from "~/lib/utils"
import MainAnimationWrapper from "~/components/animations/MainWrapper"
import BackgroundAnimation from "~/components/animations/BackgroundAnimation";

debugRendering('RootLayout');

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const ptSans = PT_Sans({ variable: "--font-pt-sans", subsets: ["latin"], weight: ["400", "700"] });


const metadata: Metadata = {
  title: "Manav Chaudhary | Full Stack Developer",
  description: "Personal portfolio of Manav Chaudhary, Full Stack Developer",
  icons: {
    icon: '/avatar.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} ${ptSans.variable} antialiased relative`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <div className="min-h-screen transition-colors duration-1000 relative">
            <MainAnimationWrapper className="container max-w-4xl mx-auto px-4 py-8">
              <BackgroundAnimation />
              <div className="relative z-10">
                  <SharedHeader />
                  {children}
                <footer>
                  <SharedFooter />
                </footer>
              </div>
            </MainAnimationWrapper>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}