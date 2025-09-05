import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "Reliable, forward-thinking solutions for the future of energy. The team's professionalism and expertise made our solar transition seamless.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content:
      "Outstanding service and innovative approach to renewable energy. Our energy costs have dropped significantly while supporting sustainability.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Community Leader",
    content:
      "Swhavy Collective truly understands community needs. Their microgrid project has transformed how we think about energy independence.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by homeowners and businesses who value quality, reliability, and sustainable energy solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
