"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, X, Calendar } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function CreateListingForm() {
  const router = useRouter()
  const [images, setImages] = useState<string[]>([])
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    condition: "",
    startingPrice: "",
    minimumIncrement: "10",
    startDate: "",
    endDate: "",
  })

  const categories = [
    "Electronics",
    "Fashion",
    "Furniture",
    "Books",
    "Sports",
    "Collectibles",
    "Home & Garden",
    "Toys & Games",
  ]

  const conditions = ["New", "Like New", "Good", "Fair", "For Parts"]

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file))
      setImages([...images, ...newImages].slice(0, 4))
    }
  }

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would call your API
    console.log("Create listing:", formData, images)
    // Simulate submission
    alert("Listing submitted for admin review!")
    router.push("/dashboard")
  }

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Images Upload */}
        <div className="space-y-3">
          <Label className="text-foreground">Item Photos (Max 4)</Label>
          <div className="grid grid-cols-4 gap-3">
            {images.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-muted group">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 p-1 rounded-full bg-background/90 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
            {images.length < 4 && (
              <label className="aspect-square rounded-lg border-2 border-dashed border-border hover:border-primary transition-colors cursor-pointer flex flex-col items-center justify-center gap-2 bg-muted/50">
                <Upload className="h-6 w-6 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Upload</span>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" multiple />
              </label>
            )}
          </div>
          <p className="text-xs text-muted-foreground">Upload clear photos of your item from different angles</p>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title" className="text-foreground">
            Title *
          </Label>
          <Input
            id="title"
            placeholder="e.g., Vintage Canon AE-1 Camera with Leather Case"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            className="h-11"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description" className="text-foreground">
            Description *
          </Label>
          <Textarea
            id="description"
            placeholder="Provide detailed information about your item, including its history, features, and any imperfections..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
            rows={6}
            className="resize-none"
          />
          <p className="text-xs text-muted-foreground">Be honest and detailed to build trust with buyers</p>
        </div>

        {/* Category and Condition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="category" className="text-foreground">
              Category *
            </Label>
            <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="condition" className="text-foreground">
              Condition *
            </Label>
            <Select
              value={formData.condition}
              onValueChange={(value) => setFormData({ ...formData, condition: value })}
            >
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent>
                {conditions.map((condition) => (
                  <SelectItem key={condition} value={condition}>
                    {condition}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="startingPrice" className="text-foreground">
              Starting Price ($) *
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                id="startingPrice"
                type="number"
                placeholder="0.00"
                value={formData.startingPrice}
                onChange={(e) => setFormData({ ...formData, startingPrice: e.target.value })}
                required
                min="1"
                step="1"
                className="pl-7 h-11"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="minimumIncrement" className="text-foreground">
              Minimum Bid Increment ($) *
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                id="minimumIncrement"
                type="number"
                placeholder="10"
                value={formData.minimumIncrement}
                onChange={(e) => setFormData({ ...formData, minimumIncrement: e.target.value })}
                required
                min="1"
                step="1"
                className="pl-7 h-11"
              />
            </div>
          </div>
        </div>

        {/* Auction Duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="startDate" className="text-foreground">
              Auction Start Date *
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                required
                className="pl-10 h-11"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="endDate" className="text-foreground">
              Auction End Date *
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                required
                className="pl-10 h-11"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            By submitting this listing, you agree to our{" "}
            <a href="/terms" className="text-primary hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/seller-policy" className="text-primary hover:underline">
              Seller Policy
            </a>
            . Your listing will be reviewed by our admin team before going live.
          </p>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              className="flex-1 bg-transparent"
              onClick={() => router.push("/dashboard")}
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
              Submit for Review
            </Button>
          </div>
        </div>
      </form>
    </Card>
  )
}
