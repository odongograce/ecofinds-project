"use client"

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, SlidersHorizontal } from "lucide-react"
import { useState } from "react"

export function AuctionFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000])

  const categories = [
    "Electronics",
    "Fashion",
    "Furniture",
    "Books",
    "Sports",
    "Collectibles",
    "Home & Garden",
    "Toys & Games",
  ]

  const conditions = ["New", "Like New", "Good", "Fair", "For Parts"]

  return (
    <div className="space-y-6">
      {/* Search */}
      <Card className="p-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Label className="text-sm font-semibold">Search Auctions</Label>
          </div>
          <Input placeholder="Search by title or description..." className="w-full" />
        </div>
      </Card>

      {/* Category Filter */}
      <Card className="p-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            <Label className="text-sm font-semibold">Category</Label>
          </div>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center gap-2">
                <Checkbox id={category} />
                <label
                  htmlFor={category}
                  className="text-sm text-foreground cursor-pointer hover:text-primary transition-colors"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Price Range */}
      <Card className="p-4">
        <div className="space-y-4">
          <Label className="text-sm font-semibold">Price Range</Label>
          <div className="px-2">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={1000}
              step={10}
              className="w-full"
              minStepsBetweenThumbs={1}
            />
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </Card>

      {/* Condition Filter */}
      <Card className="p-4">
        <div className="space-y-3">
          <Label className="text-sm font-semibold">Condition</Label>
          <div className="space-y-2">
            {conditions.map((condition) => (
              <div key={condition} className="flex items-center gap-2">
                <Checkbox id={condition} />
                <label
                  htmlFor={condition}
                  className="text-sm text-foreground cursor-pointer hover:text-primary transition-colors"
                >
                  {condition}
                </label>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Auction Status */}
      <Card className="p-4">
        <div className="space-y-3">
          <Label className="text-sm font-semibold">Status</Label>
          <div className="space-y-2">
            {["Active", "Ending Soon", "New Today"].map((status) => (
              <div key={status} className="flex items-center gap-2">
                <Checkbox id={status} />
                <label
                  htmlFor={status}
                  className="text-sm text-foreground cursor-pointer hover:text-primary transition-colors"
                >
                  {status}
                </label>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Button variant="outline" className="w-full bg-transparent">
        Reset Filters
      </Button>
    </div>
  )
}
