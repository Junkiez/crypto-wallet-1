import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, Download, ArrowUpDown, Plus } from "lucide-react"

export function WalletActions() {
  return (
    <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Quick Actions</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button className="bg-cyan-600 hover:bg-cyan-700 text-white h-auto py-4 flex-col space-y-2">
            <Send className="w-6 h-6" />
            <span>Send</span>
          </Button>

          <Button
            variant="outline"
            className="border-slate-700 text-white hover:bg-slate-800 h-auto py-4 flex-col space-y-2 bg-transparent"
          >
            <Download className="w-6 h-6" />
            <span>Receive</span>
          </Button>

          <Button
            variant="outline"
            className="border-slate-700 text-white hover:bg-slate-800 h-auto py-4 flex-col space-y-2 bg-transparent"
          >
            <ArrowUpDown className="w-6 h-6" />
            <span>Swap</span>
          </Button>

          <Button
            variant="outline"
            className="border-slate-700 text-white hover:bg-slate-800 h-auto py-4 flex-col space-y-2 bg-transparent"
          >
            <Plus className="w-6 h-6" />
            <span>Buy</span>
          </Button>
        </div>
      </div>
    </Card>
  )
}
