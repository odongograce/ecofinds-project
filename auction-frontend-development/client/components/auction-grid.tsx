"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Clock, Hammer, Heart, Search } from "lucide-react"
import Link from "next/link"

const auctions = [
  {
    id: 1,
    title: "Vintage Leica M3 Camera",
    category: "Electronics",
    currentBid: 450,
    bids: 28,
    timeLeft: "2h 15m",
    condition: "Excellent",
    image: "/vintage-leica-camera.jpg",
  },
  {
    id: 2,
    title: "Mid-Century Walnut Desk",
    category: "Furniture",
    currentBid: 320,
    bids: 15,
    timeLeft: "1d 8h",
    condition: "Very Good",
    image: "/walnut-desk.png",
  },
  {
    id: 3,
    title: "Designer Leather Handbag",
    category: "Fashion",
    currentBid: 180,
    bids: 42,
    timeLeft: "5h 30m",
    condition: "Like New",
    image: "/designer-handbag.jpg",
  },
  {
    id: 4,
    title: "Vintage Vinyl Record Collection",
    category: "Music",
    currentBid: 275,
    bids: 19,
    timeLeft: "3h 45m",
    condition: "Good",
    image: "/vinyl-collection.png",
  },
  {
    id: 5,
    title: "Professional Road Bicycle",
    category: "Sports",
    currentBid: 540,
    bids: 31,
    timeLeft: "12h 20m",
    condition: "Excellent",
    image: "/road-bicycle.jpg",
  },
  {
    id: 6,
    title: "Antique Writing Desk",
    category: "Furniture",
    currentBid: 425,
    bids: 24,
    timeLeft: "1d 4h",
    condition: "Very Good",
    image: "/antique-desk.png",
  },
  {
    id: 7,
    title: "Designer Sunglasses",
    category: "Fashion",
    currentBid: 95,
    bids: 12,
    timeLeft: "6h 10m",
    condition: "Like New",
    image: "/designer-sunglasses.jpg",
  },
  {
    id: 8,
    title: "Gaming Console Bundle",
    category: "Electronics",
    currentBid: 220,
    bids: 37,
    timeLeft: "8h 55m",
    condition: "Good",
    image: "/gaming-console.png",
  },
  {
    id: 9,
    title: "Persian Area Rug",
    category: "Home Decor",
    currentBid: 380,
    bids: 16,
    timeLeft: "2d 3h",
    condition: "Excellent",
    image: "/persian-rug.jpg",
  },
]

export function AuctionGrid() {
  return (
    <div className="space-y-6">
      {/* Search and Sort Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search auctions..." className="pl-10" />
        </div>
        <Select defaultValue="ending-soon">
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ending-soon">Ending Soon</SelectItem>
            <SelectItem value="newly-listed">Newly Listed</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="most-bids">Most Bids</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{auctions.length}</span> active auctions
        </p>
      </div>

      {/* Auction Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {auctions.map((auction) => (
          <Card key={auction.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
            <Link href={`/auctions/${auction.id}`}>
              <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                <img
                  src={auction.image || "/placeholder.svg"}
                  alt={auction.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-3 right-3 h-8 w-8 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                >
                  <Heart className="h-4 w-4" />
                </Button>
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
                  <h3 className="font-semibold text-lg text-foreground mb-1 text-balance line-clamp-2">
                    {auction.title}
                  </h3>
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
