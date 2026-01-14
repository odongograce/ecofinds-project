"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { LayoutDashboard, Gavel, Heart, Package, Settings, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function DashboardNav() {
  const pathname = usePathname()

  const user = {
    name: "John Doe",
    email: "john@example.com",
  }

  const navItems = [
    { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { href: "/dashboard/bids", label: "My Bids", icon: Gavel },
    { href: "/dashboard/watchlist", label: "Watch List", icon: Heart },
    { href: "/dashboard/listings", label: "My Listings", icon: Package },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ]

  return (
    <Card className="p-6 space-y-6 sticky top-24">
      <div className="flex items-center gap-3 pb-6 border-b border-border">
        <Avatar className="h-12 w-12">
          <AvatarFallback className="bg-primary text-primary-foreground text-lg">
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-foreground truncate">{user.name}</p>
          <p className="text-sm text-muted-foreground truncate">{user.email}</p>
        </div>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={`w-full justify-start gap-3 ${
                  isActive ? "bg-primary/10 text-primary hover:bg-primary/20" : "hover:bg-muted"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          )
        })}
      </nav>

      <div className="pt-6 border-t border-border">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </Card>
  )
}
