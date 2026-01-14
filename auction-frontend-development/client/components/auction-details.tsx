"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, Shield, TrendingUp } from "lucide-react"
import { useState } from "react"

export function AuctionDetails() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = ["/vintage-leica-camera.jpg", "/camera-angle-1.jpg", "/camera-angle-2.jpg", "/camera-angle-3.jpg"]

  return (
    <div className="space-y-6">
      {/* Image Gallery */}
      <Card className="overflow-hidden">
        <div className="aspect-[4/3] bg-muted">
          <img
            src={images[selectedImage] || "/placeholder.svg"}
            alt="Auction item"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 grid grid-cols-4 gap-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${
                selectedImage === index ? "border-primary" : "border-transparent hover:border-border"
              }`}
            >
              <img src={img || "/placeholder.svg"} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </Card>

      {/* Item Details */}
      <Card className="p-6 space-y-6">
        <div>
          <div className="flex items-start justify-between mb-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Electronics</Badge>
                <Badge variant="outline">Excellent Condition</Badge>
              </div>
              <h1 className="text-3xl font-bold text-foreground tracking-tight">Vintage Leica M3 Camera</h1>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Professional vintage camera in excellent working condition. This iconic Leica M3 has been well-maintained
            and comes with original leather case and documentation.
          </p>
        </div>

        <Tabs defaultValue="description" className="w-full">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="condition">Condition</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="space-y-4 pt-4">
            <div>
              <h3 className="font-semibold mb-2 text-foreground">About This Item</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                This Leica M3 is a classic rangefinder camera that revolutionized photography in its time. Known for its
                exceptional build quality and legendary optics, this camera has been professionally serviced and is in
                excellent working condition. Perfect for collectors or photographers who appreciate analog photography.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-foreground">Included</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Leica M3 Camera Body</li>
                <li>Original Leather Case</li>
                <li>Original Documentation</li>
                <li>Lens Cap</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="condition" className="space-y-4 pt-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground">Excellent Condition</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Minor signs of use consistent with age. No major scratches or dents. All functions working
                    perfectly.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Package className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground">Original Packaging</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Comes with original leather case and documentation from the manufacturer.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground">Recently Serviced</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Professionally cleaned and calibrated within the last 6 months by certified technician.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="shipping" className="space-y-4 pt-4">
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-foreground mb-2">Shipping Information</h4>
                <p className="text-sm text-muted-foreground">
                  Item will be carefully packaged and shipped via insured courier within 2 business days of payment
                  confirmation. Tracking number will be provided.
                </p>
              </div>
              <div className="bg-muted/50 p-4 rounded-md space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping Cost:</span>
                  <span className="font-medium text-foreground">$25.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Estimated Delivery:</span>
                  <span className="font-medium text-foreground">3-5 business days</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
