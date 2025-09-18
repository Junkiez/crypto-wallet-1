import { Button } from "@/components/ui/button"
import { Settings, Bell, User } from "lucide-react"
import Logo from "@/assets/icon.svg"

export function WalletHeader() {
  return (
    <header className="border-b border-slate-800/50 backdrop-blur-sm bg-slate-950/80">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
              <img src={Logo} className="w-10 h-10"></img>
            <div>
              <h1 className="text-xl font-bold text-white">Ripple Wallet</h1>
              <p className="text-sm text-slate-400 hidden lg:block">Your Non-Custodial Wallet</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Technology
            </a>
            <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Advantages
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              Overview
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              Foundations
            </a>
            <a href="#" className="hidden lg:block text-slate-300 hover:text-white transition-colors">
              FAQs
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
