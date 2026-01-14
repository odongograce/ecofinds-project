import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, AlertCircle } from "lucide-react"

export function RecentTransactions() {
  const transactions = [
    {
      id: 1,
      auction: "Vintage Polaroid Camera",
      buyer: "JohnD",
      seller: "CameraPro",
      amount: 180,
      status: "completed",
      date: "2024-01-18",
    },
    {
      id: 2,
      auction: "Leather Office Chair",
      buyer: "SarahM",
      seller: "FurnitureKing",
      amount: 220,
      status: "completed",
      date: "2024-01-18",
    },
    {
      id: 3,
      auction: "Designer Sunglasses",
      buyer: "MikeR",
      seller: "FashionHub",
      amount: 95,
      status: "pending",
      date: "2024-01-17",
    },
    {
      id: 4,
      auction: "Wooden Coffee Table",
      buyer: "EmilyW",
      seller: "VintageHome",
      amount: 120,
      status: "disputed",
      date: "2024-01-17",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <Check className="h-4 w-4 text-green-500" />
      case "pending":
        return <Clock className="h-4 w-4 text-secondary" />
      case "disputed":
        return <AlertCircle className="h-4 w-4 text-destructive" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20">Completed</Badge>
        )
      case "pending":
        return (
          <Badge className="bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20">Pending</Badge>
        )
      case "disputed":
        return (
          <Badge className="bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20">
            Disputed
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Recent Transactions</h2>
          <p className="text-sm text-muted-foreground mt-1">Latest completed and pending sales</p>
        </div>
        <Button variant="outline">View All</Button>
      </div>

      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-4 rounded-lg bg-muted">
            <div className="flex items-center gap-3 flex-1">
              {getStatusIcon(transaction.status)}
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{transaction.auction}</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {transaction.buyer} → {transaction.seller} • {new Date(transaction.date).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-lg font-bold text-foreground">${transaction.amount}</p>
              </div>
              {getStatusBadge(transaction.status)}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
