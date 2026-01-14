import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, X, Eye } from "lucide-react"

export function PendingAuctions() {
  const pending = [
    {
      id: 1,
      title: "Vintage Rolex Watch",
      seller: "WatchCollector99",
      category: "Collectibles",
      startingPrice: 2500,
      submittedDate: "2024-01-18",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      title: "Antique Persian Rug",
      seller: "RugMaster",
      category: "Home & Garden",
      startingPrice: 1200,
      submittedDate: "2024-01-18",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      title: "Signed Baseball Collection",
      seller: "SportsFan23",
      category: "Sports",
      startingPrice: 450,
      submittedDate: "2024-01-17",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Pending Approvals</h2>
          <p className="text-sm text-muted-foreground mt-1">Review and approve new auction listings</p>
        </div>
        <Badge className="bg-secondary text-secondary-foreground">{pending.length} Pending</Badge>
      </div>

      <div className="space-y-4">
        {pending.map((auction) => (
          <div key={auction.id} className="flex items-center gap-4 p-4 rounded-lg bg-muted">
            <img
              src={auction.image || "/placeholder.svg"}
              alt={auction.title}
              className="w-20 h-20 object-cover rounded-lg"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">{auction.title}</h3>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>Seller: {auction.seller}</span>
                <span>•</span>
                <Badge variant="secondary" className="text-xs">
                  {auction.category}
                </Badge>
                <span>•</span>
                <span>${auction.startingPrice}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Submitted: {new Date(auction.submittedDate).toLocaleDateString()}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                <Eye className="h-4 w-4" />
                Review
              </Button>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <Check className="h-4 w-4" />
                Approve
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-destructive hover:bg-destructive hover:text-destructive-foreground gap-2 bg-transparent"
              >
                <X className="h-4 w-4" />
                Reject
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
