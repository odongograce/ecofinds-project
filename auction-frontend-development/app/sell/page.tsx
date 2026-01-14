import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CreateListingForm } from "@/components/create-listing-form"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function SellPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Create Auction Listing</h1>
            <p className="text-muted-foreground">List your second-hand item for auction</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CreateListingForm />
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Listing Guidelines</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    "Provide clear, high-quality photos",
                    "Write detailed descriptions",
                    "Be honest about condition",
                    "Set realistic starting prices",
                    "Respond to buyer questions",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Admin Review</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All listings are reviewed by our admin team before going live to ensure quality and authenticity.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
