import { ArrowUpRight, ArrowDownLeft, Repeat } from "lucide-react"
import { Card } from "@/components/ui/card"

const transactions = [
  {
    id: 1,
    type: "receive",
    title: "Received from",
    address: "0x742d...3f8a",
    amount: "+1,250.00 ℏ",
    usd: "+$245.00",
    time: "2 hours ago",
    status: "completed",
  },
  {
    id: 2,
    type: "send",
    title: "Sent to",
    address: "0x8c3e...9d2b",
    amount: "-500.00 ℏ",
    usd: "-$98.00",
    time: "5 hours ago",
    status: "completed",
  },
  {
    id: 3,
    type: "swap",
    title: "Swapped",
    address: "HBAR → USDC",
    amount: "2,000.00 ℏ",
    usd: "$392.00",
    time: "1 day ago",
    status: "completed",
  },
  {
    id: 4,
    type: "receive",
    title: "Received from",
    address: "0x1a5f...7c4d",
    amount: "+3,750.00 ℏ",
    usd: "+$735.00",
    time: "2 days ago",
    status: "completed",
  },
  {
    id: 5,
    type: "send",
    title: "Sent to",
    address: "0x9e2b...4f1a",
    amount: "-850.00 ℏ",
    usd: "-$166.50",
    time: "3 days ago",
    status: "completed",
  },
]

export function TransactionList() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Recent Transactions</h3>
        <button className="text-sm text-primary hover:underline">View All</button>
      </div>

      <div className="space-y-2">
        {transactions.map((tx) => (
          <Card key={tx.id} className="p-4 hover:shadow-md transition-shadow border-border/50">
            <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  tx.type === "receive" ? "bg-green-500/10" : tx.type === "send" ? "bg-red-500/10" : "bg-blue-500/10"
                }`}
              >
                {tx.type === "receive" ? (
                  <ArrowDownLeft className="w-5 h-5 text-green-600" />
                ) : tx.type === "send" ? (
                  <ArrowUpRight className="w-5 h-5 text-red-600" />
                ) : (
                  <Repeat className="w-5 h-5 text-blue-600" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-medium text-sm truncate">{tx.title}</p>
                    <p className="text-xs text-muted-foreground truncate">{tx.address}</p>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-semibold text-sm ${
                        tx.type === "receive"
                          ? "text-green-600"
                          : tx.type === "send"
                            ? "text-red-600"
                            : "text-foreground"
                      }`}
                    >
                      {tx.amount}
                    </p>
                    <p className="text-xs text-muted-foreground">{tx.usd}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{tx.time}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
