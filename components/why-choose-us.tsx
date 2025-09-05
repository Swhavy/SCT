'use client'

import { Card, CardContent } from '@/components/ui/card'
import {
  CheckCircle,
  Users,
  Award,
  Zap,
  TrendingUp,
  Shield,
} from 'lucide-react'

export function WhyChooseUsSection() {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Proven Expertise',
      description:
        'Years of experience in designing and installing solar systems across diverse environments.',
      color: 'from-primary/20 to-primary/10',
      iconBg: 'bg-primary/20',
    },
    {
      icon: Users,
      title: 'Community Focused',
      description:
        'We specialize in community microgrid projects that benefit entire neighborhoods.',
      color: 'from-accent/20 to-accent/10',
      iconBg: 'bg-accent/20',
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description:
        'Industry-standard equipment and professional installation with comprehensive warranties.',
      color: 'from-primary/20 to-primary/10',
      iconBg: 'bg-primary/20',
    },
    {
      icon: Zap,
      title: '24/7 Support',
      description:
        'Round-the-clock monitoring and maintenance to ensure optimal system performance.',
      color: 'from-accent/20 to-accent/10',
      iconBg: 'bg-accent/20',
    },
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: TrendingUp },
    { number: '98%', label: 'Client Satisfaction', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Shield },
  ]

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-background via-muted/20 to-primary/5 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-foreground">Powering</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Communities
              </span>
            </h2>

            <div className="prose prose-lg text-muted-foreground mb-12">
              <p className="text-xl leading-relaxed">
                At Swhavy Collective Technologies, we design and install{' '}
                <span className="text-primary font-semibold">
                  customized solar systems
                </span>{' '}
                tailored to your energy needs. From hotels and estates to small
                businesses and rural communities, our goal is to{' '}
                <span className="text-accent font-semibold">
                  cut your energy costs
                </span>{' '}
                while ensuring round-the-clock power.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-start space-x-4 lg:flex-col">
                    <div
                      className={`w-14 h-14 ${benefit.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110 shadow-lg`}
                    >
                      <benefit.icon className="h-7 w-7 text-primary group-hover:text-primary drop-shadow-sm" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 mt-1 group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                  {/* Hover Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div
                className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30 flex items-center justify-center relative"
                style={{
                  backgroundImage: `url('/images/solar-technicians.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 dark:from-primary/40 dark:via-transparent dark:to-accent/40"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-card/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                <Zap className="w-8 h-8 text-primary" />
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="custom-scroll absolute -bottom-8 -left-8 grid grid-cols-1 gap-4 max-[426px]:h-32  max-[501px]:flex max-[501px]:top-[13rem] max-[501px]:h-fit max-[501px]:py-3 max-[501px]:left-0 max-[501px]:w-full max-[501px]:overflow-x-auto">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-card/95 max-[426px]:rounded-md backdrop-blur-xl border-2 border-primary/20 shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-primary/10"
                >
                  <CardContent className="p-6 flex justify-center items-center space-x-4 max-[426px]:p-[0.15rem]">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl max-[426px]:w-15 max-[426px]:h-11 max-[426px]:rounded-full flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        {stat.number}
                      </div>
                      <div className="text-sm text-foreground/70 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
