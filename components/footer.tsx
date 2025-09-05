'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(255,204,0,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12 transform hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/sct-logo.png"
                  alt="Swhavy Collective Technologies Logo"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
              <span className="font-bold text-2xl">
                Swhavy Collective Technologies
              </span>
            </div>
            <p className="text-primary-foreground/90 mb-8 leading-relaxed text-lg">
              Empowering communities with smarter solar solutions. We specialize
              in professional solar installations, comprehensive power audits,
              and innovative community microgrid projects that create
              sustainable energy futures.
            </p>
            <div className="flex space-x-4">
              {[
                { name: Facebook, href: 'https://facebook.com/yourusername' },
                { name: Twitter, href: 'https://twitter.com/sctpo_wer' },
                {
                  name: Linkedin,
                  href: 'https://www.linkedin.com/in/sct-9288b4382/',
                },
                {
                  name: Instagram,
                  href: 'https://www.instagram.com/sctpo_wer/',
                },
              ].map((Icon, index) => (
                <Link
                  href={Icon.href}
                  key={index}
                  className="w-12 h-12 bg-primary-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 transform hover:scale-110"
                >
                  <Icon.name className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'About', href: '#about' },
                { name: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-lg hover:translate-x-2 transform inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-accent">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 truncate">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-20 text-accent" />
                </div>
                <a
                  href="mailto:swhavycollectivetech@gmail.com"
                  className="truncate"
                >
                  <span className="text-primary-foreground/90 text-lg">
                    swhavycollectivetech@gmail.com
                  </span>
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-20 text-accent" />
                </div>
                <div className="mt-2">
                  <a href="tel:+2348055013107">
                    <div className="text-primary-foreground/90 text-lg">
                      (+234) 805-5013-107
                    </div>
                  </a>
                  <a href="tel:+2348136259221">
                    <div className="text-primary-foreground/90 text-lg">
                      (+234) 813-6259-221
                    </div>
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <a
                  href="https://www.instagram.com/sctpo_wer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-primary-foreground/90 text-lg">
                      sctpo_wer
                    </div>
                  </div>
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                  <MapPin className="h-5 w-20 text-accent" />
                </div>
                <span className="text-primary-foreground/90 text-lg">
                  Near Eneka Govt.Sec sch, PortHarcoart, Rivers State Nigeria.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-lg mb-4 md:mb-0">
            © 2025 Swhavy Collective Technologies. All rights reserved. Building
            sustainable communities through renewable energy.
          </p>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground/50 transform hover:scale-110 transition-all duration-300"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
