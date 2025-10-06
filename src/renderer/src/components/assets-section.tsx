import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

const assets = [
  {
    id: 1,
    symbol: "HBAR",
    name: "Hedera",
    balance: "125,482.50",
    usd: "$24,582.50",
    change: "+12.5%",
    positive: true,
    logo: "ℏ",
  },
  {
    id: 2,
    symbol: "USDC",
    name: "USD Coin",
    balance: "5,000.00",
    usd: "$5,000.00",
    change: "+0.1%",
    positive: true,
    logo: "$",
  },
  {
    id: 3,
    symbol: "SAUCE",
    name: "SaucerSwap",
    balance: "15,250.00",
    usd: "$1,830.00",
    change: "-3.2%",
    positive: false,
    logo: "🔥",
  },
]

export function AssetsSection() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">My Assets</h3>
        <button className="text-sm text-primary hover:underline">Manage</button>
      </div>

      <div className="space-y-2">
        {assets.map((asset) => (
          <Card key={asset.id} className="p-4 hover:shadow-md transition-shadow border-border/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl">
                {asset.logo}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{asset.symbol}</p>
                    <p className="text-xs text-muted-foreground">{asset.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{asset.balance}</p>
                    <p className="text-xs text-muted-foreground">{asset.usd}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  {asset.positive ? (
                    <TrendingUp className="w-3 h-3 text-green-600" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-red-600" />
                  )}
                  <span className={`text-xs font-medium ${asset.positive ? "text-green-600" : "text-red-600"}`}>
                    {asset.change}
                  </span>
                  <span className="text-xs text-muted-foreground">24h</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
