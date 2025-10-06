import { Card } from "@/components/ui/card"
import { ArrowRight, Coins, Send, History } from "lucide-react"
import { Button } from "@/components/ui/button"

export function InfoCards() {
  const cards = [
    {
      icon: Coins,
      title: "Multi-Asset Support",
      description: "Manage HBAR and all Hedera tokens in one place. Support for NFTs, fungible tokens, and more.",
      action: "View Supported Assets",
    },
    {
      icon: Send,
      title: "Instant Transfers",
      description: "Send and receive crypto in seconds with Hedera's high-throughput network. No more waiting.",
      action: "Learn About Transfers",
    },
    {
      icon: History,
      title: "Complete History",
      description: "Track all your transactions with detailed history and export capabilities for tax reporting.",
      action: "Explore Features",
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon
        return (
          <Card
            key={index}
            className="p-6 hover:shadow-xl transition-all duration-300 border-border/50 group flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">{card.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{card.description}</p>
            <Button variant="ghost" className="w-full justify-between group-hover:bg-accent/5">
              {card.action}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        )
      })}
    </div>
  )
}
