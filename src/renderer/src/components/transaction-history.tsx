import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownLeft, ArrowUpDown } from "lucide-react"

const transactions = [
  {
    id: 1,
    type: "send",
    amount: "-125.50",
    currency: "XRP",
    to: "rN7n7otQDd6FczFgLdSqtcsAUxDkw6fzRH",
    timestamp: "2 hours ago",
    status: "completed",
  },
  {
    id: 2,
    type: "receive",
    amount: "+500.00",
    currency: "XRP",
    from: "rLNaPoKeeBjZe2qs6x52yVPZpZ8td4dc6w",
    timestamp: "5 hours ago",
    status: "completed",
  },
  {
    id: 3,
    type: "swap",
    amount: "0.0045",
    currency: "BTC",
    timestamp: "1 day ago",
    status: "completed",
  },
  {
    id: 4,
    type: "send",
    amount: "-75.25",
    currency: "XRP",
    to: "rDNvpqSzJbHRqzKmJFqpBDXQzQtQjnyKuN",
    timestamp: "2 days ago",
    status: "completed",
  },
]

export function TransactionHistory() {
  return (
    <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Recent Transactions</h3>
          <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300">
            View All
          </Button>
        </div>

        <div className="space-y-4">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    tx.type === "send"
                      ? "bg-red-500/20 text-red-400"
                      : tx.type === "receive"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {tx.type === "send" && <ArrowUpRight className="w-5 h-5" />}
                  {tx.type === "receive" && <ArrowDownLeft className="w-5 h-5" />}
                  {tx.type === "swap" && <ArrowUpDown className="w-5 h-5" />}
                </div>

                <div>
                  <p className="font-medium text-white capitalize">{tx.type}</p>
                  <p className="text-sm text-slate-400">
                    {tx.to && `To: ${tx.to.slice(0, 8)}...${tx.to.slice(-6)}`}
                    {tx.from && `From: ${tx.from.slice(0, 8)}...${tx.from.slice(-6)}`}
                    {tx.type === "swap" && "XRP → BTC"}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p
                  className={`font-semibold ${
                    tx.type === "send" ? "text-red-400" : tx.type === "receive" ? "text-green-400" : "text-blue-400"
                  }`}
                >
                  {tx.amount} {tx.currency}
                </p>
                <p className="text-sm text-slate-400">{tx.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
