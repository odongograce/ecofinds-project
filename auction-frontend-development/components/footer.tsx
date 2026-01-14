import Link from "next/link"
import { Leaf } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <div className="bg-primary rounded-full p-1.5">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-foreground">ecoFinds</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sustainable shopping through competitive auctions on quality second-hand items.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Platform</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/auctions" className="text-muted-foreground hover:text-foreground transition-colors">
                  Browse Auctions
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-muted-foreground hover:text-foreground transition-colors">
                  Start Selling
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/guidelines" className="text-muted-foreground hover:text-foreground transition-colors">
                  Auction Guidelines
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ecoFinds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
