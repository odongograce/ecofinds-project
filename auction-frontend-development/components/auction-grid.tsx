"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

export function AuctionGrid() {
  // Mock data - in production this would come from your API
  const auctions = [
    {
      id: 1,
      title: "Vintage Canon AE-1 Camera",
      category: "Electronics",
      condition: "Good",
      currentBid: 250,
      startingPrice: 150,
      bids: 12,
      timeLeft: "2h 45m",
      endDate: "2024-01-20",
      image: "/vintage-camera.png",
      status: "active",
    },
    {
      id: 2,
      title: "Designer Leather Handbag",
      category: "Fashion",
      condition: "Like New",
      currentBid: 180,
      startingPrice: 100,
      bids: 8,
      timeLeft: "5h 12m",
      endDate: "2024-01-20",
      image: "/designer-leather-bag.jpg",
      status: "active",
    },
    {
      id: 3,
      title: "Mid-Century Wooden Coffee Table",
      category: "Furniture",
      condition: "Good",
      currentBid: 120,
      startingPrice: 80,
      bids: 15,
      timeLeft: "1d 3h",
      endDate: "2024-01-21",
      image: "/wooden-coffee-table.png",
      status: "active",
    },
    {
      id: 4,
      title: "Apple MacBook Pro 2020",
      category: "Electronics",
      condition: "Good",
      currentBid: 850,
      startingPrice: 600,
      bids: 24,
      timeLeft: "45m",
      endDate: "2024-01-19",
      image: "/macbook-pro-laptop.png",
      status: "ending-soon",
    },
    {
      id: 5,
      title: "Vintage Vinyl Record Collection",
      category: "Collectibles",
      condition: "Good",
      currentBid: 320,
      startingPrice: 200,
      bids: 19,
      timeLeft: "3h 20m",
      endDate: "2024-01-20",
      image: "/vintage-vinyl-collection.png",
      status: "active",
    },
    {
      id: 6,
      title: "Professional Road Bike",
      category: "Sports",
      condition: "Like New",
      currentBid: 450,
      startingPrice: 300,
      bids: 11,
      timeLeft: "6h 30m",
      endDate: "2024-01-20",
      image: "/professional-road-bicycle.jpg",
      status: "active",
    },
    {
      id: 7,
      title: "Antique Wooden Desk",
      category: "Furniture",
      condition: "Good",
      currentBid: 280,
      startingPrice: 150,
      bids: 14,
      timeLeft: "2d 5h",
      endDate: "2024-01-22",
      image: "/antique-wooden-writing-desk.jpg",
      status: "active",
    },
    {
      id: 8,
      title: "Designer Sunglasses",
      category: "Fashion",
      condition: "New",
      currentBid: 95,
      startingPrice: 50,
      bids: 7,
      timeLeft: "4h 15m",
      endDate: "2024-01-20",
      image: "/luxury-designer-sunglasses.jpg",
      status: "active",
    },
    {
      id: 9,
      title: "Gaming Console Bundle",
      category: "Electronics",
      condition: "Good",
      currentBid: 380,
      startingPrice: 250,
      bids: 22,
      timeLeft: "1h 10m",
      endDate: "2024-01-19",
      image: "/gaming-console-with-controllers.jpg",
      status: "ending-soon",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Sort and View Options */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{auctions.length}</span> auctions
        </p>
        <div className="flex items-center gap-3">
          <label className="text-sm text-muted-foreground">Sort by:</label>
          <Select defaultValue="ending-soon">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ending-soon">Ending Soon</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="most-bids">Most Bids</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Auction Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {auctions.map((auction) => (
          <Card key={auction.id} className="overflow-hidden hover:border-primary transition-all group">
            <Link href={`/auctions/${auction.id}`}>
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={auction.image || "/placeholder.svg"}
                  alt={auction.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {auction.status === "ending-soon" && (
                  <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
                    Ending Soon
                  </Badge>
                )}
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                    {auction.category}
                  </Badge>
                  <Badge variant="outline" className="bg-background/90 backdrop-blur">
                    {auction.condition}
                  </Badge>
                </div>
              </div>

              <div className="p-5 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-1">{auction.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {auction.timeLeft}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {auction.bids} bids
                    </span>
                  </div>
                </div>

                <div className="flex items-end justify-between pt-2 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Current Bid</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-2xl font-bold text-primary">${auction.currentBid}</p>
                      <span className="flex items-center gap-1 text-xs text-green-500">
                        <TrendingUp className="h-3 w-3" />
                        {Math.round(((auction.currentBid - auction.startingPrice) / auction.startingPrice) * 100)}%
                      </span>
                    </div>
                  </div>
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Place Bid
                  </Button>
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 pt-8">
        <Button variant="outline" disabled>
          Previous
        </Button>
        <Button variant="outline" className="bg-primary text-primary-foreground">
          1
        </Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">Next</Button>
      </div>
    </div>
  )
}
