"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Package, Users, Flag, Settings, BarChart3 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function AdminNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/admin", label: "Overview", icon: LayoutDashboard },
    { href: "/admin/auctions", label: "Manage Auctions", icon: Package },
    { href: "/admin/users", label: "User Management", icon: Users },
    { href: "/admin/reports", label: "Reports", icon: Flag },
    { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ]

  return (
    <Card className="p-6 space-y-2 sticky top-24">
      <h3 className="font-semibold text-foreground mb-4 px-3">Admin Panel</h3>
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
    </Card>
  )
}
