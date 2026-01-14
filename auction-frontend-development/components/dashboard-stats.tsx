import { Card } from "@/components/ui/card"
import { Gavel, TrendingUp, Package, Award } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      label: "Active Bids",
      value: "8",
      change: "+2 from last week",
      icon: Gavel,
      color: "text-primary",
    },
    {
      label: "Items Won",
      value: "12",
      change: "+3 this month",
      icon: Award,
      color: "text-secondary",
    },
    {
      label: "Total Spent",
      value: "$2,450",
      change: "+$380 this month",
      icon: TrendingUp,
      color: "text-green-500",
    },
    {
      label: "Watching",
      value: "15",
      change: "5 ending soon",
      icon: Package,
      color: "text-muted-foreground",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
