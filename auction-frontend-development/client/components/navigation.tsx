"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Star} from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg transition-transform group-hover:scale-105">
              <Star className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">ecoFinds</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/auctions"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Browse Auctions
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <Link
              href="/auctions"
              className="text-sm font-medium text-foreground/80 hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse Auctions
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-foreground/80 hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground/80 hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
