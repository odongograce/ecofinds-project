import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Sparkles, Shield, Clock, TrendingUp, Hammer, Users, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_oklch(0.88_0.04_80),_transparent_50%),radial-gradient(circle_at_bottom_left,_oklch(0.92_0.015_70),_transparent_50%)]" />

          <div className="container relative mx-auto px-4 py-24 md:py-32">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <Badge variant="outline" className="bg-background/80 backdrop-blur">
                Sustainable • Transparent • Community-Driven
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold text-balance leading-[1.1] tracking-tight">
                Give treasures a <span className="italic text-primary">second life</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Join a vibrant marketplace where every bid counts. Discover quality pre-loved items through fair,
                competitive auctions that benefit both buyers and sellers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="text-base">
                  <Link href="/auctions">
                    Explore Auctions <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base bg-transparent">
                  <Link href="/sell">List Your Item</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16 border-y border-border bg-muted/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "12,500+", label: "Items Sold" },
              { value: "8,200+", label: "Active Bidders" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "$2.5M+", label: "Total Value" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Auctions */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">Active Auctions</h2>
            <p className="text-muted-foreground text-lg text-pretty">
              Browse our curated selection of quality second-hand items currently up for bidding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Vintage Leica Camera",
                category: "Electronics",
                currentBid: 450,
                bids: 28,
                timeLeft: "2h 15m",
                condition: "Excellent",
                image: "/vintage-camera.png",
              },
              {
                title: "Mid-Century Walnut Desk",
                category: "Furniture",
                currentBid: 320,
                bids: 15,
                timeLeft: "1d 8h",
                condition: "Very Good",
                image: "/mid-century-desk.jpg",
              },
              {
                title: "Designer Leather Handbag",
                category: "Fashion",
                currentBid: 180,
                bids: 42,
                timeLeft: "5h 30m",
                condition: "Like New",
                image: "/leather-handbag.png",
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <Link href={`/auctions/${index + 1}`}>
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {item.condition}
                      </Badge>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-1 text-balance">{item.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{item.timeLeft} left</span>
                        <span>•</span>
                        <span>{item.bids} bids</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Current Bid</p>
                        <p className="text-2xl font-bold text-primary">${item.currentBid}</p>
                      </div>
                      <Button size="sm" className="group-hover:shadow-md transition-shadow">
                        <Hammer className="mr-2 h-4 w-4" />
                        Place Bid
                      </Button>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/auctions">
                View All Auctions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">How ecoFinds Works</h2>
              <p className="text-muted-foreground text-lg text-pretty">Simple, transparent, and sustainable bidding</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Sparkles,
                  title: "Discover Items",
                  description:
                    "Browse quality second-hand items across various categories, all carefully vetted by our team",
                  step: "01",
                },
                {
                  icon: TrendingUp,
                  title: "Place Your Bid",
                  description:
                    "Compete with others through fair bidding with automatic validation and minimum increments",
                  step: "02",
                },
                {
                  icon: Award,
                  title: "Win & Collect",
                  description:
                    "Highest bidder wins when the auction ends. Secure payment and direct seller communication",
                  step: "03",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -top-4 -left-4 text-6xl font-bold text-primary/10">{step.step}</div>
                  <Card className="relative p-6 space-y-4 h-full">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{step.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">Why Choose ecoFinds</h2>
            <p className="text-muted-foreground text-lg text-pretty">
              Built on principles of sustainability, transparency, and community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Verified & Secure",
                description: "Admin oversight ensures fair auctions, verified sellers, and secure transactions",
              },
              {
                icon: Clock,
                title: "Real-Time Updates",
                description: "Live bid tracking with countdown timers so you never miss an opportunity",
              },
              {
                icon: Users,
                title: "Vibrant Community",
                description: "Join thousands of conscious consumers making sustainable choices",
              },
              {
                icon: TrendingUp,
                title: "Fair Competition",
                description: "Transparent bidding with minimum increments ensures equal opportunity",
              },
              {
                icon: Award,
                title: "Quality Assured",
                description: "Every item includes detailed condition reports and seller ratings",
              },
              {
                icon: Sparkles,
                title: "Eco-Friendly",
                description: "Reduce waste by giving quality items a second life in your home",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 space-y-4 hover:shadow-md transition-shadow">
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
            <div className="relative p-12 md:p-16 text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance tracking-tight">
                Ready to start your sustainable shopping journey?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty leading-relaxed">
                Join our community of conscious consumers discovering incredible deals while making environmentally
                responsible choices
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="text-base">
                  <Link href="/register">Create Free Account</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base bg-transparent">
                  <Link href="/auctions">Browse Auctions</Link>
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
