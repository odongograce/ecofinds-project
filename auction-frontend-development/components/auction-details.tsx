"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Package, Shield, Heart } from "lucide-react"
import { useState } from "react"

interface AuctionDetailsProps {
  auctionId: string
}

export function AuctionDetails({ auctionId }: AuctionDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorited, setIsFavorited] = useState(false)

  // Mock data - would come from API
  const auction = {
    id: 1,
    title: "Vintage Canon AE-1 Camera",
    category: "Electronics",
    condition: "Good",
    description:
      "This classic Canon AE-1 35mm SLR camera is in excellent working condition. Includes original leather case and lens cap. Perfect for film photography enthusiasts or collectors. Minor cosmetic wear consistent with age, but mechanically sound. Shutter speeds all working perfectly. Light meter is accurate. A timeless piece of camera history.",
    images: ["/vintage-camera.png", "/vintage-camera.png", "/vintage-camera.png", "/vintage-camera.png"],
    startDate: "2024-01-18",
    endDate: "2024-01-20",
    location: "San Francisco, CA",
    specifications: {
      Brand: "Canon",
      Model: "AE-1",
      Year: "1976-1984",
      "Film Format": "35mm",
      Condition: "Good",
      Accessories: "Leather case, lens cap",
    },
    shipping: {
      available: true,
      cost: "$15",
      methods: ["Standard Shipping", "Express Shipping"],
    },
  }

  return (
    <div className="space-y-6">
      {/* Image Gallery */}
      <Card className="overflow-hidden">
        <div className="relative aspect-[4/3] bg-muted">
          <img
            src={auction.images[selectedImage] || "/placeholder.svg"}
            alt={auction.title}
            className="w-full h-full object-cover"
          />
          <Button
            variant="outline"
            size="icon"
            className={`absolute top-4 right-4 ${isFavorited ? "bg-primary text-primary-foreground" : "bg-background/90 backdrop-blur"}`}
            onClick={() => setIsFavorited(!isFavorited)}
          >
            <Heart className={`h-5 w-5 ${isFavorited ? "fill-current" : ""}`} />
          </Button>
        </div>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-4 gap-2 p-4 bg-card">
          {auction.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                selectedImage === index ? "border-primary" : "border-transparent hover:border-border"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${auction.title} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </Card>

      {/* Title and Basic Info */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="bg-primary/10 text-primary border-primary/20">{auction.category}</Badge>
          <Badge variant="outline">{auction.condition}</Badge>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground">{auction.title}</h1>

        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Ends: {new Date(auction.endDate).toLocaleDateString()}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {auction.location}
          </span>
        </div>
      </div>

      {/* Detailed Information Tabs */}
      <Card>
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent p-0">
            <TabsTrigger
              value="description"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="specifications"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger
              value="shipping"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Shipping
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="p-6 space-y-4">
            <p className="text-foreground leading-relaxed">{auction.description}</p>
            <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
              <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Buyer Protection</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All auctions are monitored by our admin team to ensure authenticity and fair trading practices.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="specifications" className="p-6">
            <dl className="space-y-3">
              {Object.entries(auction.specifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <dt className="text-muted-foreground font-medium">{key}</dt>
                  <dd className="text-foreground font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </TabsContent>

          <TabsContent value="shipping" className="p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Package className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="space-y-3 flex-1">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Shipping Available</h4>
                  <p className="text-sm text-muted-foreground">Estimated cost: {auction.shipping.cost}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Available Methods:</p>
                  <ul className="space-y-1">
                    {auction.shipping.methods.map((method) => (
                      <li key={method} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {method}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
