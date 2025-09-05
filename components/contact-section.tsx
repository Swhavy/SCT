'use client'

import type React from 'react'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react'

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xgvlpbez', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        toast({
          title: 'Message sent successfully! ✅',
          description:
            "Thank you for contacting us. We'll get back to you within 24 hours.",
          duration: 5000,
        })
        form.reset()
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast({
        title: 'Failed to send message ❌',
        description: 'Please try again or contact us directly via email.',
        variant: 'destructive',
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your renewable energy journey? Contact us today for a
            free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Email
                  </h3>
                  <p className="text-muted-foreground">
                    divineanyanechi@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Phone
                  </h3>
                  <p className="text-muted-foreground">(+234) 805-5013-107</p>
                  <p className="text-muted-foreground">(+234) 813-6259-221</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Location
                  </h3>
                  <p className="text-muted-foreground">Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-card-foreground">
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="firstName"
                    placeholder="First Name"
                    className="bg-input border-border"
                    required
                    disabled={isSubmitting}
                  />
                  <Input
                    name="lastName"
                    placeholder="Last Name"
                    className="bg-input border-border"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Input
                  name="email"
                  placeholder="Email Address"
                  type="email"
                  className="bg-input border-border"
                  required
                  disabled={isSubmitting}
                />
                <Input
                  name="phone"
                  placeholder="Phone Number"
                  type="tel"
                  className="bg-input border-border"
                  disabled={isSubmitting}
                />
                <Textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="bg-input border-border"
                  required
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
