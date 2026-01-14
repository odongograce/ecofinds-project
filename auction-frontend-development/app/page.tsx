import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Sparkles, Shield, Clock, TrendingUp } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              Sustainable • Competitive • Transparent
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              Discover value in <span className="text-primary">second-hand treasures</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Join the marketplace where buyers compete through dynamic bidding. Every auction is an opportunity to find
              quality items while making sustainable choices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                <Link href="/auctions">
                  Browse Auctions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                <Link href="/sell">Start Selling</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Auctions Preview */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Live Auctions</h2>
              <p className="text-muted-foreground mt-2">Place your bid on trending items</p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/auctions">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Vintage Camera",
                category: "Electronics",
                currentBid: 250,
                timeLeft: "2h 45m",
                image: "/vintage-camera.png",
              },
              {
                title: "Designer Leather Bag",
                category: "Fashion",
                currentBid: 180,
                timeLeft: "5h 12m",
                image: "/designer-leather-bag.jpg",
              },
              {
                title: "Wooden Coffee Table",
                category: "Furniture",
                currentBid: 120,
                timeLeft: "1d 3h",
                image: "/wooden-coffee-table.png",
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden hover:border-primary transition-all group cursor-pointer">
                <Link href="/auctions/1">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{item.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {item.timeLeft}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <p className="text-xs text-muted-foreground">Current Bid</p>
                        <p className="text-2xl font-bold text-primary">${item.currentBid}</p>
                      </div>
                      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Place Bid
                      </Button>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose ecoFinds</h2>
            <p className="text-muted-foreground text-lg text-pretty">
              A transparent auction platform designed for sustainable commerce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Dynamic Bidding",
                description: "Real-time competitive bidding with automatic validation and minimum increments",
              },
              {
                icon: Shield,
                title: "Secure Platform",
                description: "Admin oversight ensures fair auctions and verified transactions",
              },
              {
                icon: Clock,
                title: "Time-Based Auctions",
                description: "Clear start and end times with countdown timers on every listing",
              },
              {
                icon: Sparkles,
                title: "Quality Items",
                description: "Curated second-hand goods with detailed condition reports",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 space-y-4 hover:border-primary transition-all">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-24">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <div className="p-12 md:p-16 text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Ready to start bidding?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Join thousands of sustainable shoppers finding incredible deals on quality second-hand items
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
                >
                  <Link href="/register">Create Free Account</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                  <Link href="/auctions">Explore Auctions</Link>
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
