'use client'

import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Phone,
  Mail,
  Zap,
  Leaf,
  Sun,
  Wind,
  Battery,
  Globe,
} from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sleek-green-subtle dark:bg-sleek-green-dark"
      style={{
        backgroundImage: `url('/images/solar-sunset-hero.png'), linear-gradient(135deg, rgba(21, 128, 61, 0.1) 0%, rgba(34, 197, 94, 0.05) 50%, rgba(132, 204, 22, 0.1) 100%)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-secondary/15 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-3xl animate-spin-slow"></div>

        {/* New floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float-gentle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="w-16 h-16 glass-morphism rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-all duration-500 animate-pulse-glow">
            <Sun className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-delayed">
          <div className="w-20 h-20 glass-morphism rounded-2xl flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-all duration-500">
            <Wind className="w-10 h-10 text-secondary" />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float-slow">
          <div className="w-14 h-14 glass-morphism rounded-2xl flex items-center justify-center transform rotate-45 hover:rotate-0 transition-all duration-500">
            <Battery className="w-7 h-7 text-accent" />
          </div>
        </div>
        <div className="absolute top-1/2 right-1/3 animate-float-gentle">
          <div className="w-18 h-18 glass-morphism rounded-2xl flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-all duration-500">
            <Globe className="w-9 h-9 text-primary" />
          </div>
        </div>
        <div className="absolute bottom-1/4 right-1/4 animate-float">
          <div className="w-12 h-12 glass-morphism rounded-2xl flex items-center justify-center transform rotate-30 hover:rotate-0 transition-all duration-500">
            <Leaf className="w-6 h-6 text-secondary" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 glass-morphism rounded-full border border-primary/30 mb-8 animate-shimmer">
              <Zap className="w-5 h-5 text-primary mr-3 animate-pulse" />
              <span className="text-sm font-semibold text-primary dark:text-primary-foreground">
                🌱 Sustainable Energy Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Power Tomorrow,
              </span>
              <br />
              <span className="text-foreground drop-shadow-lg">Today.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your energy future with our cutting-edge solar
              solutions.
              <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-lg mx-1">
                Affordable, reliable, and sustainable
              </span>
              power for businesses, communities, and homes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground text-lg px-10 py-7 rounded-2xl font-bold shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10">Get Free Power Audit</span>
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform relative z-10" />
            </Button>

            <a href="tel:+2348055013107">
              <Button
                variant="outline"
                size="lg"
                className="glass-morphism border-primary/50 text-primary dark:text-primary hover:bg-primary/10 dark:hover:bg-primary/20 hover:border-primary text-lg px-10 py-7 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition-all duration-300 group bg-transparent"
              >
                <Phone className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                (+234) 805-5013-107
              </Button>
            </a>
          </div>

          <a href="mailto:swhavycollectivetech@gmail.com">
            <div className="items-center justify-center gap-3 glass-morphism rounded-full px-6 py-3 inline-flex">
              <Mail className="h-6 w-6 text-primary animate-pulse" />
              <span className="text-lg font-medium text-foreground">
                swhavycollectivetech@gmail.com
              </span>
            </div>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary/60 rounded-full flex justify-center glass-morphism">
          <div className="w-2 h-4 bg-gradient-to-b from-primary to-secondary rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(12deg);
          }
          50% {
            transform: translateY(-25px) rotate(12deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(-12deg);
          }
          50% {
            transform: translateY(-20px) rotate(-12deg);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(-15px) rotate(45deg);
          }
        }
        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
        .animate-float {
          animation: float 7s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 9s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 11s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
      `}</style>
    </section>
  )
}
