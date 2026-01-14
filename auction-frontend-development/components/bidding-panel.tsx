"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Clock, TrendingUp, Users, AlertCircle } from "lucide-react"
import { useState, useEffect } from "react"

interface BiddingPanelProps {
  auctionId: string
}

export function BiddingPanel({ auctionId }: BiddingPanelProps) {
  const [bidAmount, setBidAmount] = useState("")
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 30 })

  // Mock data
  const auction = {
    currentBid: 250,
    minimumIncrement: 10,
    startingPrice: 150,
    totalBids: 12,
    endTime: new Date(Date.now() + 2 * 60 * 60 * 1000 + 45 * 60 * 1000),
  }

  const minBid = auction.currentBid + auction.minimumIncrement

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleQuickBid = (amount: number) => {
    setBidAmount(amount.toString())
  }

  return (
    <Card className="p-6 space-y-6 sticky top-24">
      {/* Time Remaining */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Time Remaining</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="bg-muted rounded-lg p-3 mb-1">
                <span className="text-2xl font-bold text-foreground">{item.value.toString().padStart(2, "0")}</span>
              </div>
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Current Bid Info */}
      <div className="space-y-4 pb-4 border-b border-border">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Current Bid</p>
          <div className="flex items-baseline gap-2">
            <p className="text-4xl font-bold text-primary">${auction.currentBid}</p>
            <span className="flex items-center gap-1 text-sm text-green-500">
              <TrendingUp className="h-4 w-4" />
              {Math.round(((auction.currentBid - auction.startingPrice) / auction.startingPrice) * 100)}%
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Starting Price</span>
          <span className="font-semibold text-foreground">${auction.startingPrice}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>
            <span className="font-semibold text-foreground">{auction.totalBids}</span> bids placed
          </span>
        </div>
      </div>

      {/* Bidding Form */}
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Your Bid Amount</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input
              type="number"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              placeholder={minBid.toString()}
              className="pl-7 text-lg font-semibold"
              min={minBid}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1">Minimum bid: ${minBid}</p>
        </div>

        {/* Quick Bid Buttons */}
        <div className="grid grid-cols-3 gap-2">
          {[minBid, minBid + auction.minimumIncrement, minBid + auction.minimumIncrement * 2].map((amount) => (
            <Button key={amount} variant="outline" size="sm" onClick={() => handleQuickBid(amount)}>
              ${amount}
            </Button>
          ))}
        </div>

        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6">
          Place Bid
        </Button>

        <div className="flex items-start gap-2 p-3 bg-muted rounded-lg">
          <AlertCircle className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            By placing a bid, you agree to purchase this item if you win the auction.
          </p>
        </div>
      </div>

      {/* Admin Info */}
      <div className="pt-4 border-t border-border">
        <Badge variant="outline" className="w-full justify-center py-2">
          Admin Monitored Auction
        </Badge>
      </div>
    </Card>
  )
}
