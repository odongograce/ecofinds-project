"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Crown } from "lucide-react"

interface BidHistoryProps {
  auctionId: string
}

export function BidHistory({ auctionId }: BidHistoryProps) {
  // Mock data
  const bids = [
    { id: 1, user: "JohnD", amount: 250, time: "2 minutes ago", isLeading: true },
    { id: 2, user: "SarahM", amount: 240, time: "15 minutes ago", isLeading: false },
    { id: 3, user: "MikeR", amount: 230, time: "28 minutes ago", isLeading: false },
    { id: 4, user: "EmilyW", amount: 220, time: "1 hour ago", isLeading: false },
    { id: 5, user: "JohnD", amount: 210, time: "1 hour ago", isLeading: false },
    { id: 6, user: "AlexB", amount: 200, time: "2 hours ago", isLeading: false },
    { id: 7, user: "SarahM", amount: 190, time: "3 hours ago", isLeading: false },
    { id: 8, user: "MikeR", amount: 180, time: "4 hours ago", isLeading: false },
  ]

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Bid History</h2>
        <Badge variant="secondary">{bids.length} Total Bids</Badge>
      </div>

      <div className="space-y-3">
        {bids.map((bid, index) => (
          <div
            key={bid.id}
            className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
              bid.isLeading ? "bg-primary/10 border border-primary/20" : "bg-muted hover:bg-muted/80"
            }`}
          >
            <div className="flex items-center gap-3">
              <Avatar className={bid.isLeading ? "ring-2 ring-primary" : ""}>
                <AvatarFallback className={bid.isLeading ? "bg-primary text-primary-foreground" : ""}>
                  {bid.user.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-foreground">{bid.user}</p>
                  {bid.isLeading && (
                    <Badge className="bg-primary text-primary-foreground flex items-center gap-1">
                      <Crown className="h-3 w-3" />
                      Leading
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{bid.time}</p>
              </div>
            </div>

            <div className="text-right">
              <p className={`text-xl font-bold ${bid.isLeading ? "text-primary" : "text-foreground"}`}>${bid.amount}</p>
              {index > 0 && (
                <p className="text-xs text-green-500 flex items-center gap-1 justify-end">
                  <TrendingUp className="h-3 w-3" />
                  +${bid.amount - bids[index + 1]?.amount || 0}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
