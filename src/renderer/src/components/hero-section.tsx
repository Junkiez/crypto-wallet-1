import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Activity } from "lucide-react"

export function HeroSection() {
  return (
    <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary via-primary/90 to-accent shadow-2xl">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative p-8 lg:p-12">
        <div className="max-w-3xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
            The Smart Way to Manage Your HBAR
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 text-pretty leading-relaxed">
            Experience the future of digital asset management with Hedera Wallet. Secure, fast, and built for the next
            generation of decentralized finance.
          </p>

          {/* Network Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-5 h-5 text-primary-foreground/80" />
                <p className="text-primary-foreground/70 text-sm font-medium">Network TPS</p>
              </div>
              <p className="text-primary-foreground text-2xl font-bold">10,000+</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-primary-foreground/80" />
                <p className="text-primary-foreground/70 text-sm font-medium">Active Users</p>
              </div>
              <p className="text-primary-foreground text-2xl font-bold">500K+</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-primary-foreground/80" />
                <p className="text-primary-foreground/70 text-sm font-medium">Avg Fee</p>
              </div>
              <p className="text-primary-foreground text-2xl font-bold">$0.0001</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
