import { Card } from "@/components/ui/card"
import { Package, DollarSign, Users, TrendingUp } from "lucide-react"

export function AdminStats() {
  const stats = [
    {
      label: "Total Auctions",
      value: "156",
      change: "+12% from last month",
      icon: Package,
      trend: "up",
    },
    {
      label: "Total Revenue",
      value: "$48,294",
      change: "+18% from last month",
      icon: DollarSign,
      trend: "up",
    },
    {
      label: "Active Users",
      value: "2,834",
      change: "+245 new this week",
      icon: Users,
      trend: "up",
    },
    {
      label: "Completion Rate",
      value: "94.2%",
      change: "+2.1% from last month",
      icon: TrendingUp,
      trend: "up",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              {stat.trend === "up" && (
                <span className="text-xs font-medium text-green-500 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  Up
                </span>
              )}
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
