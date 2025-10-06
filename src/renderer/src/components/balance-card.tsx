"use client"

import { Eye, EyeOff, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"

export function BalanceCard() {
  const [showBalance, setShowBalance] = useState(true)

  return (
    <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary via-primary/90 to-accent shadow-2xl">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-primary-foreground/80 text-sm font-medium">Total Balance</p>
            <div className="flex items-baseline gap-2 mt-1">
              {showBalance ? (
                <>
                  <h2 className="text-4xl font-bold text-primary-foreground">$ * * * , * *</h2>
                  <span className="text-primary-foreground/60 text-lg">USD</span>
                </>
              ) : (
                <h2 className="text-4xl font-bold text-primary-foreground">••••••</h2>
              )}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowBalance(!showBalance)}
            className="text-primary-foreground hover:bg-white/10 rounded-full"
          >
            {showBalance ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </Button>
        </div>

        <div className="flex items-center gap-2 text-primary-foreground/90">
          <div className="flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">
            <TrendingUp className="w-4 h-4 text-green-300" />
            <span className="text-sm font-medium text-green-300">+12.5%</span>
          </div>
          <span className="text-sm">vs last month</span>
        </div>

        {/* HBAR Balance */}
        <div className="pt-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-primary-foreground/70 text-xs">HBAR Balance</p>
              <p className="text-primary-foreground text-lg font-semibold mt-0.5">
                {showBalance ? "ℏ * * * , * *" : "••••••"}
              </p>
            </div>
            <div className="text-right">
              <p className="text-primary-foreground/70 text-xs">≈ USD</p>
              <p className="text-primary-foreground text-lg font-semibold mt-0.5">
                {showBalance ? "$ * * * , * *" : "••••••"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
