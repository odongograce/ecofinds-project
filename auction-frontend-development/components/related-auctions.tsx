import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import Link from "next/link"

export function RelatedAuctions() {
  const related = [
    {
      id: 2,
      title: "Nikon FM2 Film Camera",
      category: "Electronics",
      currentBid: 180,
      timeLeft: "5h 12m",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "Pentax K1000 with Lens",
      category: "Electronics",
      currentBid: 120,
      timeLeft: "1d 3h",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "Olympus OM-1 Black",
      category: "Electronics",
      currentBid: 200,
      timeLeft: "2d 8h",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Related Auctions</h2>
        <Button variant="ghost" asChild>
          <Link href="/auctions">View All</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((auction) => (
          <Card key={auction.id} className="overflow-hidden hover:border-primary transition-all group">
            <Link href={`/auctions/${auction.id}`}>
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={auction.image || "/placeholder.svg"}
                  alt={auction.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 space-y-3">
                <Badge variant="secondary">{auction.category}</Badge>
                <h3 className="font-semibold text-foreground">{auction.title}</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Current Bid</p>
                    <p className="text-xl font-bold text-primary">${auction.currentBid}</p>
                  </div>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {auction.timeLeft}
                  </span>
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
