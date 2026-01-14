import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AuctionDetails } from "@/components/auction-details"
import { BiddingPanel } from "@/components/bidding-panel"
import { BidHistory } from "@/components/bid-history"
import { SellerInfo } from "@/components/seller-info"
import { RelatedAuctions } from "@/components/related-auctions"

export default function AuctionDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 bg-muted/20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <AuctionDetails />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <BiddingPanel />
              <BidHistory />
              <SellerInfo />
            </div>
          </div>

          {/* Related Auctions */}
          <div className="mt-16">
            <RelatedAuctions />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
