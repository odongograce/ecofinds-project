import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, X, Clock } from "lucide-react"

export function UserBidHistory() {
  const history = [
    {
      id: 1,
      title: "Vintage Polaroid Camera",
      finalBid: 180,
      status: "won",
      date: "2024-01-15",
      category: "Electronics",
    },
    {
      id: 2,
      title: "Leather Office Chair",
      finalBid: 220,
      status: "won",
      date: "2024-01-12",
      category: "Furniture",
    },
    {
      id: 3,
      title: "Gaming Headset",
      finalBid: 95,
      status: "lost",
      date: "2024-01-10",
      category: "Electronics",
    },
    {
      id: 4,
      title: "Vintage Typewriter",
      finalBid: 150,
      status: "active",
      date: "2024-01-18",
      category: "Collectibles",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "won":
        return <Award className="h-4 w-4 text-green-500" />
      case "lost":
        return <X className="h-4 w-4 text-destructive" />
      default:
        return <Clock className="h-4 w-4 text-primary" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "won":
        return <Badge className="bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20">Won</Badge>
      case "lost":
        return (
          <Badge className="bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20">
            Outbid
          </Badge>
        )
      default:
        return <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">Active</Badge>
    }
  }

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">Recent Activity</h2>
        <p className="text-sm text-muted-foreground mt-1">Your bidding history</p>
      </div>

      <div className="space-y-3">
        {history.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
          >
            <div className="flex items-center gap-3 flex-1">
              {getStatusIcon(item.status)}
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{new Date(item.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">
                  {item.status === "active" ? "Current Bid" : "Final Bid"}
                </p>
                <p className="text-lg font-bold text-foreground">${item.finalBid}</p>
              </div>
              {getStatusBadge(item.status)}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
