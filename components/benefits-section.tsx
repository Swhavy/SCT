import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Shield, Users, Leaf } from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Cost Savings",
    description:
      "Reduce your energy bills by up to 90% with our efficient solar solutions and smart energy management systems.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Premium equipment with 25-year warranties and proven track record of consistent performance in all weather conditions.",
  },
  {
    icon: Users,
    title: "Professional Support",
    description:
      "Dedicated team of certified technicians providing ongoing maintenance, monitoring, and optimization services.",
  },
  {
    icon: Leaf,
    title: "Sustainable Impact",
    description: "Contribute to a cleaner environment while increasing your property value and energy independence.",
  },
]

export function BenefitsSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Swhavy Collective</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with personalized service to deliver exceptional solar solutions for your
            community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="text-center border-border/50 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-lg p-4 w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
