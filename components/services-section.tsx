import { Card, CardContent } from "@/components/ui/card"
import { Calculator, Lightbulb, Wrench, Shield } from "lucide-react"

const services = [
  {
    icon: Calculator,
    title: "Power Audit & Consultation",
    description: "We begin by assessing your current energy needs and challenges to design the right solution.",
    step: "01",
    color: "from-emerald-500/20 to-green-500/10",
    iconBg: "bg-emerald-500/20",
  },
  {
    icon: Lightbulb,
    title: "Custom Solar Design",
    description: "Our engineers create a tailored system that balances efficiency, cost, and scalability.",
    step: "02",
    color: "from-yellow-500/20 to-amber-500/10",
    iconBg: "bg-yellow-500/20",
  },
  {
    icon: Wrench,
    title: "Installation & Integration",
    description: "We handle seamless installation with industry-standard equipment and skilled professionals.",
    step: "03",
    color: "from-emerald-500/20 to-green-500/10",
    iconBg: "bg-emerald-500/20",
  },
  {
    icon: Shield,
    title: "Support & Optimization",
    description: "After setup, we provide ongoing maintenance, monitoring, and upgrades for lasting performance.",
    step: "04",
    color: "from-yellow-500/20 to-amber-500/10",
    iconBg: "bg-yellow-500/20",
  },
]

export function ServicesSection() {
  return (
    <>
      <div className="h-16 md:h-24 bg-background"></div>

      <section
        id="services"
        className="py-24 bg-sleek-green-subtle dark:bg-sleek-green-dark relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/images/rooftop-solar.jpg'), linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(5, 150, 105, 0.03) 50%, rgba(251, 191, 36, 0.05) 100%)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Enhanced Background Pattern with green tones */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(251,191,36,0.1),transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-6">
              <span className="text-sm font-medium text-emerald-200 dark:text-emerald-100">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-300 via-green-300 to-yellow-300 bg-clip-text text-transparent">
                4-Step Journey
              </span>
              <br />
              <span className="text-white dark:text-gray-100">to Solar Success</span>
            </h2>
            <p className="text-xl text-gray-200 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From initial assessment to ongoing support, we guide you through every step of your renewable energy
              transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="relative overflow-hidden group hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 border-emerald-500/20 hover:border-emerald-500/40 bg-gradient-to-br from-white/95 to-white/85 dark:from-gray-900/95 dark:to-gray-900/85 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-2"
                >
                  <CardContent className="p-8">
                    {/* Step Number */}
                    <div className="absolute top-4 right-4 text-7xl font-bold text-emerald-500/10 group-hover:text-emerald-500/20 transition-all duration-500 transform group-hover:scale-110">
                      {service.step}
                    </div>

                    {/* 3D Icon Container */}
                    <div
                      className={`${service.iconBg} rounded-2xl p-4 w-fit mb-6 group-hover:bg-emerald-500/30 transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110 shadow-lg`}
                    >
                      <Icon className="h-10 w-10 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 drop-shadow-lg" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Connecting Line for Desktop */}
                    {index < services.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent transform -translate-y-1/2 z-10">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-emerald-500 rounded-full"></div>
                      </div>
                    )}
                  </CardContent>

                  {/* Hover Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  ></div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
