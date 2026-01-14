import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AuctionFilters } from "@/components/auction-filters"
import { AuctionGrid } from "@/components/auction-grid"

export default function AuctionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Live Auctions</h1>
          <p className="text-muted-foreground text-lg">Browse and bid on quality second-hand items</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <AuctionFilters />
          </aside>

          <div className="flex-1">
            <AuctionGrid />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
