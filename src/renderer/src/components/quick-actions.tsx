import { ArrowUpRight, ArrowDownLeft, Repeat, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"

export function QuickActions() {
  const actions = [
    { icon: ArrowUpRight, label: "Send", color: "from-primary to-primary/80" },
    { icon: ArrowDownLeft, label: "Receive", color: "from-accent to-accent/80" },
    { icon: Repeat, label: "Swap", color: "from-chart-3 to-chart-3/80" },
    { icon: QrCode, label: "Scan", color: "from-chart-4 to-chart-4/80" },
  ]

  return (
    <div className="grid grid-cols-4 gap-3">
      {actions.map((action) => (
        <Button
          key={action.label}
          variant="outline"
          className="flex flex-col items-center gap-2 h-auto py-4 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all bg-transparent"
        >
          <div
            className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg`}
          >
            <action.icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs font-medium">{action.label}</span>
        </Button>
      ))}
    </div>
  )
}
