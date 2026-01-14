import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AuctionFilters } from "@/components/auction-filters"
import { AuctionGrid } from "@/components/auction-grid"

export default function AuctionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-3 tracking-tight">Browse Auctions</h1>
            <p className="text-muted-foreground text-lg">Discover quality second-hand items and place your bids</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <AuctionFilters />
            </aside>

            <div className="lg:col-span-3">
              <AuctionGrid />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
