"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, TrendingUp } from "lucide-react"
import { useState } from "react"

export function WalletBalance() {
  const [showBalance, setShowBalance] = useState(true)

  return (
    <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-slate-300 mb-2">Total Balance</h2>
            <div className="flex items-center space-x-4">
              {showBalance ? (
                <span className="text-4xl font-bold text-white">$3,5000</span>
              ) : (
                <span className="text-4xl font-bold text-white">••••••</span>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowBalance(!showBalance)}
                className="text-slate-400 hover:text-white"
              >
                {showBalance ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          <div className="text-right">
            <div className="flex items-center space-x-2 text-green-400 mb-2">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">+2.4%</span>
            </div>
            <p className="text-sm text-slate-400">24h change</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">XRP</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">XRP</h3>
                <p className="text-sm text-slate-400">Ripple</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xl font-bold text-white">2,847.32</p>
              <p className="text-sm text-slate-400">$1,423.66</p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">₿</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">Bitcoin</h3>
                <p className="text-sm text-slate-400">BTC</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xl font-bold text-white">0.0234</p>
              <p className="text-sm text-slate-400">$1,234.56</p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">Ξ</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">Ethereum</h3>
                <p className="text-sm text-slate-400">ETH</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xl font-bold text-white">1.2456</p>
              <p className="text-sm text-slate-400">$841.78</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
