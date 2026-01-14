import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DashboardNav } from "@/components/dashboard-nav"
import { DashboardStats } from "@/components/dashboard-stats"
import { ActiveBids } from "@/components/active-bids"
import { WatchList } from "@/components/watch-list"
import { UserBidHistory } from "@/components/user-bid-history"

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">My Dashboard</h1>
          <p className="text-muted-foreground">Track your bids and manage your account</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <DashboardNav />
          </aside>

          <div className="flex-1 space-y-8">
            <DashboardStats />
            <ActiveBids />
            <WatchList />
            <UserBidHistory />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
