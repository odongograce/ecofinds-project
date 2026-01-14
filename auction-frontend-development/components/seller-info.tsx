import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, MessageCircle, Package } from "lucide-react"

export function SellerInfo() {
  const seller = {
    name: "Michael Chen",
    rating: 4.8,
    totalRatings: 127,
    itemsSold: 45,
    memberSince: "2022",
    responseTime: "< 2 hours",
  }

  return (
    <Card className="p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Seller Information</h3>

        <div className="flex items-start gap-4 mb-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="bg-primary text-primary-foreground text-lg">
              {seller.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="font-semibold text-foreground text-lg">{seller.name}</p>
            <div className="flex items-center gap-1 mt-1">
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <span className="font-semibold text-foreground">{seller.rating}</span>
              <span className="text-sm text-muted-foreground">({seller.totalRatings})</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between py-2 border-b border-border">
            <span className="text-muted-foreground">Items Sold</span>
            <span className="font-semibold text-foreground">{seller.itemsSold}</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-border">
            <span className="text-muted-foreground">Member Since</span>
            <span className="font-semibold text-foreground">{seller.memberSince}</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-muted-foreground">Response Time</span>
            <Badge variant="secondary">{seller.responseTime}</Badge>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
          <MessageCircle className="h-4 w-4" />
          Contact Seller
        </Button>
        <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
          <Package className="h-4 w-4" />
          View Other Items
        </Button>
      </div>
    </Card>
  )
}
