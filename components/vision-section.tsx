import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Leaf } from "lucide-react"

const goals = [
  {
    icon: Target,
    number: "50+",
    label: "Homes Targeted for 2025",
    description: "Bringing solar solutions to communities across the region",
  },
  {
    icon: Leaf,
    number: "10,000 kg",
    label: "CO₂ Reduction Goal",
    description: "Environmental impact through renewable energy adoption",
  },
  {
    icon: Users,
    number: "100%",
    label: "Community Focused",
    description: "Building sustainable communities through collaboration",
  },
]

export function VisionSection() {
  return (
    <section id="vision" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Vision & Impact Goals</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to creating a sustainable future through innovative solar solutions and community-driven
            renewable energy projects.
          </p>
        </div>

        {/* Future Vision Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="relative overflow-hidden rounded-lg aspect-video">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Smart solar farm"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white font-semibold">Smart Solar Farms</div>
          </div>
          <div className="relative overflow-hidden rounded-lg aspect-video">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Community microgrid"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white font-semibold">Community Microgrids</div>
          </div>
          <div className="relative overflow-hidden rounded-lg aspect-video">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Sustainable neighborhood"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white font-semibold">Sustainable Communities</div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {goals.map((goal, index) => {
            const Icon = goal.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-accent/10 rounded-full p-4 w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{goal.number}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{goal.label}</h3>
                  <p className="text-muted-foreground">{goal.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
