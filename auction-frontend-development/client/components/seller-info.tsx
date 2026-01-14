import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, MessageCircle, ShoppingBag } from "lucide-react"

export function SellerInfo() {
  return (
    <Card className="p-6 space-y-4">
      <h2 className="font-semibold text-lg text-foreground">Seller Information</h2>

      <div className="flex items-start gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/seller-avatar.jpg" />
          <AvatarFallback>MJ</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-foreground">Michael Johnson</h3>
            <Badge variant="secondary" className="text-xs">
              Verified
            </Badge>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="font-medium text-foreground">4.9</span>
            <span className="text-muted-foreground">(127 reviews)</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 py-3 border-y border-border">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Member Since</p>
          <p className="font-medium text-sm text-foreground">March 2023</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Items Sold</p>
          <p className="font-medium text-sm text-foreground">47 items</p>
        </div>
      </div>

      <div className="space-y-2">
        <Button variant="outline" className="w-full bg-transparent">
          <MessageCircle className="mr-2 h-4 w-4" />
          Contact Seller
        </Button>
        <Button variant="ghost" className="w-full">
          <ShoppingBag className="mr-2 h-4 w-4" />
          View Other Items
        </Button>
      </div>
    </Card>
  )
}
