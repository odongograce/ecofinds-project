"use client"

import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Filter, X } from "lucide-react"
import { useState } from "react"

export function AuctionFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000])

  return (
    <Card className="p-6 sticky top-20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="font-semibold text-lg">Filters</h2>
        </div>
        <Button variant="ghost" size="sm">
          <X className="h-4 w-4 mr-1" />
          Clear
        </Button>
      </div>

      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h3 className="font-medium mb-3 text-foreground">Categories</h3>
          <div className="space-y-3">
            {["Electronics", "Furniture", "Fashion", "Books", "Sports", "Art & Collectibles"].map((category) => (
              <div key={category} className="flex items-center gap-2">
                <Checkbox id={category} />
                <label
                  htmlFor={category}
                  className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Price Range */}
        <div>
          <h3 className="font-medium mb-3 text-foreground">Price Range</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Input type="number" placeholder="Min" value={priceRange[0]} className="h-9" />
              <span className="text-muted-foreground">-</span>
              <Input type="number" placeholder="Max" value={priceRange[1]} className="h-9" />
            </div>
          </div>
        </div>

        <Separator />

        {/* Condition */}
        <div>
          <h3 className="font-medium mb-3 text-foreground">Condition</h3>
          <div className="space-y-3">
            {["Like New", "Excellent", "Very Good", "Good", "Fair"].map((condition) => (
              <div key={condition} className="flex items-center gap-2">
                <Checkbox id={condition} />
                <label
                  htmlFor={condition}
                  className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                >
                  {condition}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Auction Status */}
        <div>
          <h3 className="font-medium mb-3 text-foreground">Status</h3>
          <div className="space-y-3">
            {["Active", "Ending Soon", "New Today"].map((status) => (
              <div key={status} className="flex items-center gap-2">
                <Checkbox id={status} />
                <label
                  htmlFor={status}
                  className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                >
                  {status}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
