import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Crown } from "lucide-react"
import Link from "next/link"

export function ActiveBids() {
  const activeBids = [
    {
      id: 1,
      title: "Vintage Canon AE-1 Camera",
      image: "/vintage-camera.png",
      yourBid: 250,
      currentBid: 250,
      isLeading: true,
      timeLeft: "2h 45m",
      category: "Electronics",
    },
    {
      id: 4,
      title: "Apple MacBook Pro 2020",
      image: "/macbook-pro-laptop.png",
      yourBid: 820,
      currentBid: 850,
      isLeading: false,
      timeLeft: "45m",
      category: "Electronics",
    },
    {
      id: 6,
      title: "Professional Road Bike",
      image: "/professional-road-bicycle.jpg",
      yourBid: 450,
      currentBid: 450,
      isLeading: true,
      timeLeft: "6h 30m",
      category: "Sports",
    },
  ]

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Active Bids</h2>
          <p className="text-sm text-muted-foreground mt-1">Auctions you're currently bidding on</p>
        </div>
        <Link href="/dashboard/bids">
          <Button variant="outline">View All</Button>
        </Link>
      </div>

      <div className="space-y-4">
        {activeBids.map((bid) => (
          <div
            key={bid.id}
            className={`flex flex-col sm:flex-row gap-4 p-4 rounded-lg transition-all ${
              bid.isLeading ? "bg-primary/10 border border-primary/20" : "bg-muted hover:bg-muted/80"
            }`}
          >
            <Link href={`/auctions/${bid.id}`} className="flex-shrink-0">
              <img
                src={bid.image || "/placeholder.svg"}
                alt={bid.title}
                className="w-full sm:w-24 h-24 object-cover rounded-lg"
              />
            </Link>

            <div className="flex-1 space-y-2">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <Link href={`/auctions/${bid.id}`}>
                    <h3 className="font-semibold text-foreground hover:text-primary transition-colors">{bid.title}</h3>
                  </Link>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs">
                      {bid.category}
                    </Badge>
                    {bid.isLeading && (
                      <Badge className="bg-primary text-primary-foreground flex items-center gap-1 text-xs">
                        <Crown className="h-3 w-3" />
                        Leading
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {bid.timeLeft}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex gap-6 text-sm">
                  <div>
                    <p className="text-muted-foreground">Your Bid</p>
                    <p className="font-semibold text-foreground">${bid.yourBid}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Current Bid</p>
                    <p className={`font-semibold ${bid.isLeading ? "text-primary" : "text-foreground"}`}>
                      ${bid.currentBid}
                    </p>
                  </div>
                </div>

                <Button size="sm" variant={bid.isLeading ? "outline" : "default"} asChild>
                  <Link href={`/auctions/${bid.id}`}>{bid.isLeading ? "View" : "Increase Bid"}</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
