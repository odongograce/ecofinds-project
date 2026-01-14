"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Hammer, Clock, TrendingUp, AlertCircle } from "lucide-react"
import { useState, useEffect } from "react"

export function BiddingPanel() {
  const [bidAmount, setBidAmount] = useState(460)
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 15, seconds: 30 })
  const currentBid = 450
  const minIncrement = 10
  const minNextBid = currentBid + minIncrement

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

  return (
    <Card className="p-6 space-y-6 sticky top-20">
      {/* Countdown Timer */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Auction Ends In</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="bg-primary/10 px-3 py-2 rounded-md">
            <div className="text-2xl font-bold text-primary">{String(timeLeft.hours).padStart(2, "0")}</div>
            <div className="text-xs text-muted-foreground">Hours</div>
          </div>
          <span className="text-2xl font-bold text-primary">:</span>
          <div className="bg-primary/10 px-3 py-2 rounded-md">
            <div className="text-2xl font-bold text-primary">{String(timeLeft.minutes).padStart(2, "0")}</div>
            <div className="text-xs text-muted-foreground">Minutes</div>
          </div>
          <span className="text-2xl font-bold text-primary">:</span>
          <div className="bg-primary/10 px-3 py-2 rounded-md">
            <div className="text-2xl font-bold text-primary">{String(timeLeft.seconds).padStart(2, "0")}</div>
            <div className="text-xs text-muted-foreground">Seconds</div>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6 space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Current Bid</span>
            <Badge variant="secondary" className="text-xs">
              28 bids
            </Badge>
          </div>
          <p className="text-3xl font-bold text-primary">${currentBid}</p>
        </div>

        <div className="bg-muted/50 p-3 rounded-md space-y-1">
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground">Minimum increment:</span>
            <span className="font-medium text-foreground">${minIncrement}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <AlertCircle className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground">Next minimum bid:</span>
            <span className="font-medium text-foreground">${minNextBid}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Your Bid Amount</label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(Number(e.target.value))}
                className="pl-7"
                min={minNextBid}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[10, 25, 50].map((amount) => (
            <Button
              key={amount}
              variant="outline"
              size="sm"
              onClick={() => setBidAmount(currentBid + amount)}
              className="text-xs"
            >
              +${amount}
            </Button>
          ))}
        </div>

        <Button className="w-full" size="lg">
          <Hammer className="mr-2 h-5 w-5" />
          Place Bid ${bidAmount}
        </Button>

        <p className="text-xs text-center text-muted-foreground leading-relaxed">
          By placing a bid, you agree to purchase this item if you win
        </p>
      </div>
    </Card>
  )
}
