import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, AlertCircle } from "lucide-react"

export function ActiveAuctionsManagement() {
  const activeAuctions = [
    {
      id: 1,
      title: "Vintage Canon AE-1 Camera",
      currentBid: 250,
      bids: 12,
      timeLeft: "2h 45m",
      status: "healthy",
      category: "Electronics",
    },
    {
      id: 4,
      title: "Apple MacBook Pro 2020",
      currentBid: 850,
      bids: 24,
      timeLeft: "45m",
      status: "ending-soon",
      category: "Electronics",
    },
    {
      id: 5,
      title: "Vintage Vinyl Record Collection",
      currentBid: 320,
      bids: 19,
      timeLeft: "3h 20m",
      status: "healthy",
      category: "Collectibles",
    },
    {
      id: 9,
      title: "Gaming Console Bundle",
      currentBid: 380,
      bids: 22,
      timeLeft: "1h 10m",
      status: "flagged",
      category: "Electronics",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "healthy":
        return <Badge className="bg-green-500/10 text-green-500 border-green-500/20">Active</Badge>
      case "ending-soon":
        return <Badge className="bg-secondary/10 text-secondary border-secondary/20">Ending Soon</Badge>
      case "flagged":
        return (
          <Badge className="bg-destructive/10 text-destructive border-destructive/20 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            Flagged
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Active Auctions</h2>
          <p className="text-sm text-muted-foreground mt-1">Monitor ongoing auctions</p>
        </div>
        <Button variant="outline">View All Auctions</Button>
      </div>

      <div className="space-y-3">
        {activeAuctions.map((auction) => (
          <div
            key={auction.id}
            className={`flex items-center justify-between p-4 rounded-lg ${
              auction.status === "flagged" ? "bg-destructive/5 border border-destructive/20" : "bg-muted"
            }`}
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-semibold text-foreground">{auction.title}</h3>
                {getStatusBadge(auction.status)}
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <Badge variant="secondary" className="text-xs">
                  {auction.category}
                </Badge>
                <span className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  {auction.bids} bids
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {auction.timeLeft}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Current Bid</p>
                <p className="text-xl font-bold text-primary">${auction.currentBid}</p>
              </div>
              <Button size="sm" variant="outline">
                Manage
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
