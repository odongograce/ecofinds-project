import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"

const bids = [
  { id: 1, user: "Sarah M.", avatar: "/user1.jpg", amount: 450, time: "2 minutes ago", isLeading: true },
  { id: 2, user: "John D.", avatar: "/user2.jpg", amount: 440, time: "15 minutes ago", isLeading: false },
  { id: 3, user: "Sarah M.", avatar: "/user1.jpg", amount: 430, time: "32 minutes ago", isLeading: false },
  { id: 4, user: "Mike R.", avatar: "/user3.jpg", amount: 420, time: "1 hour ago", isLeading: false },
  { id: 5, user: "Emily P.", avatar: "/user4.jpg", amount: 410, time: "2 hours ago", isLeading: false },
]

export function BidHistory() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-primary" />
        <h2 className="font-semibold text-lg text-foreground">Bid History</h2>
        <Badge variant="secondary" className="ml-auto">
          {bids.length} bids
        </Badge>
      </div>

      <div className="space-y-3">
        {bids.map((bid) => (
          <div
            key={bid.id}
            className={`flex items-center justify-between p-3 rounded-md transition-colors ${
              bid.isLeading ? "bg-primary/10 border border-primary/20" : "hover:bg-muted/50"
            }`}
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={bid.avatar || "/placeholder.svg"} />
                <AvatarFallback>{bid.user.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium text-sm text-foreground">{bid.user}</p>
                  {bid.isLeading && (
                    <Badge variant="default" className="text-xs h-5">
                      Leading
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{bid.time}</p>
              </div>
            </div>
            <p className="font-bold text-lg text-primary">${bid.amount}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}
