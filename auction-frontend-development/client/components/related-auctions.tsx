import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Hammer } from "lucide-react"
import Link from "next/link"

const relatedAuctions = [
  {
    id: 2,
    title: "Vintage Polaroid Camera",
    category: "Electronics",
    currentBid: 125,
    bids: 18,
    timeLeft: "1d 5h",
    condition: "Good",
    image: "/polaroid-camera.jpg",
  },
  {
    id: 3,
    title: "Canon AE-1 Film Camera",
    category: "Electronics",
    currentBid: 180,
    bids: 24,
    timeLeft: "8h 30m",
    condition: "Very Good",
    image: "/canon-camera.jpg",
  },
  {
    id: 4,
    title: "Nikon F3 Professional Camera",
    category: "Electronics",
    currentBid: 320,
    bids: 15,
    timeLeft: "2d 12h",
    condition: "Excellent",
    image: "/nikon-camera.jpg",
  },
]

export function RelatedAuctions() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground tracking-tight">Similar Auctions</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedAuctions.map((auction) => (
          <Card key={auction.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
            <Link href={`/auctions/${auction.id}`}>
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={auction.image || "/placeholder.svg"}
                  alt={auction.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {auction.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {auction.condition}
                  </Badge>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1 text-balance">{auction.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{auction.timeLeft} left</span>
                    <span>•</span>
                    <span>{auction.bids} bids</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Current Bid</p>
                    <p className="text-2xl font-bold text-primary">${auction.currentBid}</p>
                  </div>
                  <Button size="sm" className="group-hover:shadow-md transition-shadow">
                    <Hammer className="mr-2 h-4 w-4" />
                    Place Bid
                  </Button>
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
