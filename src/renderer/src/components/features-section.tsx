import { Shield, Zap, Lock, Globe } from "lucide-react"
import { Card } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Your assets are protected with military-grade encryption and multi-signature authentication",
      color: "from-primary to-accent",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience instant transactions on the Hedera network with minimal fees",
      color: "from-accent to-primary",
    },
    {
      icon: Lock,
      title: "Self-Custody",
      description: "You own your keys, you own your crypto. Complete control over your digital assets",
      color: "from-primary/80 to-accent/80",
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Access your wallet anywhere, anytime. Available on web, mobile, and desktop",
      color: "from-accent/80 to-primary/80",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature, index) => {
        const Icon = feature.icon
        return (
          <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-border/50 group">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
            >
              <Icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
          </Card>
        )
      })}
    </div>
  )
}
