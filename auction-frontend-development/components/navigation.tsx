"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <div className="bg-primary rounded-full p-1.5">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-foreground">ecoFinds</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/auctions" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Browse Auctions
            </Link>
            <Link
              href="/how-it-works"
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              How It Works
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/register">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/auctions"
              className="block text-foreground/80 hover:text-foreground transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse Auctions
            </Link>
            <Link
              href="/how-it-works"
              className="block text-foreground/80 hover:text-foreground transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/about"
              className="block text-foreground/80 hover:text-foreground transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" asChild className="w-full">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/register">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
