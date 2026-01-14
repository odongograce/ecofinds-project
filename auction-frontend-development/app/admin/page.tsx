import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AdminNav } from "@/components/admin-nav"
import { AdminStats } from "@/components/admin-stats"
import { PendingAuctions } from "@/components/pending-auctions"
import { ActiveAuctionsManagement } from "@/components/active-auctions-management"
import { RecentTransactions } from "@/components/recent-transactions"

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Monitor and manage platform activities</p>
          </div>
          <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
            <p className="text-sm font-semibold text-primary">Administrator</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <AdminNav />
          </aside>

          <div className="flex-1 space-y-8">
            <AdminStats />
            <PendingAuctions />
            <ActiveAuctionsManagement />
            <RecentTransactions />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
