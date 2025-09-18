import { Card } from "@/components/ui/card"
import { Shield, Zap, Globe } from "lucide-react"

export function WalletStats() {
  return (
    <div className="space-y-6">
      {/* Portfolio Performance */}
      <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Portfolio Performance</h3>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">24h Change</span>
              <span className="text-green-400 font-semibold">+$84.32</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">7d Change</span>
              <span className="text-green-400 font-semibold">+$234.56</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">30d Change</span>
              <span className="text-red-400 font-semibold">-$45.78</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Wallet Features */}
      <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Wallet Features</h3>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-medium">Secure</p>
                <p className="text-sm text-slate-400">Non-custodial wallet</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-medium">Fast</p>
                <p className="text-sm text-slate-400">Low transaction fees</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Globe className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-medium">Global</p>
                <p className="text-sm text-slate-400">Cross-platform support</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Network Status */}
      <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Network Status</h3>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">XRP Ledger</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400 text-sm">Online</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-400">Last Ledger</span>
              <span className="text-white text-sm">#84,567,123</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-400">Fee</span>
              <span className="text-white text-sm">0.00001 XRP</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
