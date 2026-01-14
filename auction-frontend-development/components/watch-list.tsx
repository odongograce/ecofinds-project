import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, X } from "lucide-react"
import Link from "next/link"

export function WatchList() {
  const watchedItems = [
    {
      id: 2,
      title: "Designer Leather Handbag",
      image: "/designer-leather-bag.jpg",
      currentBid: 180,
      timeLeft: "5h 12m",
      category: "Fashion",
    },
    {
      id: 5,
      title: "Vintage Vinyl Record Collection",
      image: "/vintage-vinyl-collection.png",
      currentBid: 320,
      timeLeft: "3h 20m",
      category: "Collectibles",
    },
    {
      id: 7,
      title: "Antique Wooden Desk",
      image: "/antique-wooden-writing-desk.jpg",
      currentBid: 280,
      timeLeft: "2d 5h",
      category: "Furniture",
    },
  ]

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Watch List</h2>
          <p className="text-sm text-muted-foreground mt-1">Items you're interested in</p>
        </div>
        <Link href="/dashboard/watchlist">
          <Button variant="outline">View All</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {watchedItems.map((item) => (
          <div key={item.id} className="relative group">
            <Card className="overflow-hidden hover:border-primary transition-all">
              <Link href={`/auctions/${item.id}`}>
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                  <h3 className="font-semibold text-foreground line-clamp-1">{item.title}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <p className="text-xs text-muted-foreground">Current Bid</p>
                      <p className="font-bold text-primary">${item.currentBid}</p>
                    </div>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {item.timeLeft}
                    </span>
                  </div>
                </div>
              </Link>
            </Card>
            <Button
              size="icon"
              variant="outline"
              className="absolute top-2 right-2 h-8 w-8 bg-background/90 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  )
}
