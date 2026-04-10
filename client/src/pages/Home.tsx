import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Wine, Users, Music, Utensils, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

/**
 * Design Philosophy: Dark Luxury Minimalism
 * - Deep charcoal background (#0F0F0F) with warm gold accents (#D4AF37)
 * - Playfair Display for headlines (premium, elegant)
 * - Poppins for body text (clean, modern, readable)
 * - Generous whitespace and breathing room
 * - Single CTA: "Reserve Your Table" repeated consistently
 * - Smooth animations and subtle transitions
 */

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    numberOfGuests: "",
    occasion: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.preferredDate || !formData.numberOfGuests) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Reservation request received! We'll contact you soon to confirm.");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        preferredDate: "",
        preferredTime: "",
        numberOfGuests: "",
        occasion: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-display text-lg font-bold">7</span>
            </div>
            <div>
              <h1 className="text-lg font-display font-bold">7 Dayz</h1>
              <p className="text-xs text-muted-foreground">Lounge & Bar</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("experience")} className="text-sm hover:text-accent transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection("occasions")} className="text-sm hover:text-accent transition-colors">
              Occasions
            </button>
            <button onClick={() => scrollToSection("location")} className="text-sm hover:text-accent transition-colors">
              Location
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-sm hover:text-accent transition-colors">
              FAQ
            </button>
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection("reservation")}
            className="btn-cta hidden md:inline-block"
          >
            Reserve Your Table
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => scrollToSection("reservation")}
            className="btn-cta md:hidden text-xs py-2 px-4"
          >
            Reserve
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663498053882/LFGgShqgzPiAdB3ytSrzVg/hero-lounge-bgmAKeAsCJoZoe3HBQT5iv.webp')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative container text-center z-10 py-20">
          <div className="max-w-3xl mx-auto">
            <div className="accent-line mx-auto"></div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              A lounge and dining experience Birgunj will remember
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Great food, drinks, music, and a stylish space for nights out, celebrations, and group gatherings.
            </p>
            <p className="text-sm text-accent mb-8 font-semibold">
              Trusted by a growing local community — 800+ on Facebook, 148+ check-ins
            </p>
            <button
              onClick={() => scrollToSection("reservation")}
              className="btn-cta text-base md:text-lg"
            >
              Reserve Your Table
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-accent" />
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="bg-secondary/50 border-y border-border py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-accent mb-2">800+</p>
              <p className="text-sm text-muted-foreground">Connected on Facebook</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-accent mb-2">148+</p>
              <p className="text-sm text-muted-foreground">Check-ins & Visits</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-accent mb-2">✓</p>
              <p className="text-sm text-muted-foreground">Reservations Available</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-accent mb-2">✓</p>
              <p className="text-sm text-muted-foreground">Event-Ready Atmosphere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-spacing">
        <div className="container">
          <div className="text-center mb-16">
            <div className="accent-line mx-auto"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Why Choose 7 Dayz</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              More than a restaurant. A destination for memorable moments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-premium">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wine className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Premium Lounge Atmosphere</h3>
                  <p className="text-gray-300">
                    Stylish, modern design with warm lighting and sophisticated ambiance perfect for any occasion.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Utensils className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Food & Drinks in One Destination</h3>
                  <p className="text-gray-300">
                    Curated menu of dishes and premium beverages, all crafted to elevate your experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Perfect for Celebrations</h3>
                  <p className="text-gray-300">
                    Ideal for birthdays, group gatherings, and special events with flexible space and service.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Easy Access & Reservations</h3>
                  <p className="text-gray-300">
                    Conveniently located in Mahabirsathan with simple reservation process and responsive team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-spacing bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <div className="accent-line mx-auto"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">The 7 Dayz Experience</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Imagine yourself here. Great food, premium drinks, vibrant energy, and unforgettable moments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative overflow-hidden rounded-lg h-80 md:h-96">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663498053882/LFGgShqgzPiAdB3ytSrzVg/dining-experience-RJ2cefHJogB4eNEEFEcXar.webp"
                alt="Dining Experience"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2">Exceptional Dining</h3>
                  <p className="text-gray-200">Carefully crafted dishes and fine dining experience</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg h-80 md:h-96">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663498053882/LFGgShqgzPiAdB3ytSrzVg/cocktail-bar-ZjasfSVF6KkwYC4pqhYJTK.webp"
                alt="Cocktail Bar"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2">Premium Drinks</h3>
                  <p className="text-gray-200">Expertly mixed cocktails and premium spirits</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-lg h-80 md:h-96">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663498053882/LFGgShqgzPiAdB3ytSrzVg/celebration-mood-WXTdZdcsjUk8RaTLquSGXH.webp"
                alt="Celebration Mood"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2">Celebration Energy</h3>
                  <p className="text-gray-200">Perfect atmosphere for toasts and special moments</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg h-80 md:h-96">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663498053882/LFGgShqgzPiAdB3ytSrzVg/group-gathering-KwWpT8Tz7UkxucXHykCReo.webp"
                alt="Group Gathering"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2">Group Gatherings</h3>
                  <p className="text-gray-200">Spacious and welcoming for friends and families</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section id="occasions" className="section-spacing">
        <div className="container">
          <div className="text-center mb-16">
            <div className="accent-line mx-auto"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Perfect For Every Occasion</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Whether it's a casual meetup or a special celebration, 7 Dayz is your destination.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Casual Meetups", desc: "Relaxed atmosphere for friends catching up" },
              { title: "Date Nights", desc: "Intimate setting with premium ambiance" },
              { title: "Birthday Plans", desc: "Celebrate with style and great service" },
              { title: "Weekend Hangouts", desc: "Vibrant energy and social atmosphere" },
              { title: "Group Reservations", desc: "Flexible space for larger parties" },
              { title: "Small Celebrations", desc: "Memorable moments with loved ones" },
            ].map((occasion, idx) => (
              <div key={idx} className="card-premium text-center">
                <h3 className="text-lg font-display font-bold mb-2">{occasion.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{occasion.desc}</p>
                <button
                  onClick={() => scrollToSection("reservation")}
                  className="text-accent hover:text-accent/80 transition-colors text-sm font-semibold uppercase tracking-wide"
                >
                  Reserve Your Table →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-spacing bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <div className="accent-line mx-auto"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Gallery</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A glimpse into the ambiance and energy of 7 Dayz Lounge & Bar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg h-64 group cursor-pointer">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663498053882/LFGgShqgzPiAdB3ytSrzVg/hero-lounge-bgmAKeAsCJoZoe3HBQT5iv.webp"
                alt="Interior Ambiance"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <p className="text-white font-display text-lg font-bold">Interior Ambiance</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg h-64 group cursor-pointer">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663498053882/LFGgShqgzPiAdB3ytSrzVg/dining-experience-RJ2cefHJogB4eNEEFEcXar.webp"
                alt="Signature Dishes"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <p className="text-white font-display text-lg font-bold">Signature Dishes</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg h-64 group cursor-pointer">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663498053882/LFGgShqgzPiAdB3ytSrzVg/cocktail-bar-ZjasfSVF6KkwYC4pqhYJTK.webp"
                alt="Drinks & Bar"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <p className="text-white font-display text-lg font-bold">Drinks & Bar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section id="reservation" className="section-spacing">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <div className="accent-line mx-auto"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Reserve Your Table</h2>
            <p className="text-gray-300 text-lg">
              Planning a visit, celebration, or group outing? Send your details and the team will get back to you to confirm availability.
            </p>
          </div>

          <Card className="bg-card border-border p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-white">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="bg-secondary border-border text-white placeholder:text-muted-foreground"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+977 98XXXXXXXX"
                    className="bg-secondary border-border text-white placeholder:text-muted-foreground"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email (Optional)</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="bg-secondary border-border text-white placeholder:text-muted-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="numberOfGuests" className="text-white">Number of Guests *</Label>
                  <Select value={formData.numberOfGuests} onValueChange={(value) => handleSelectChange("numberOfGuests", value)}>
                    <SelectTrigger className="bg-secondary border-border text-white">
                      <SelectValue placeholder="Select number of guests" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20].map(num => (
                        <SelectItem key={num} value={String(num)} className="text-white">
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="preferredDate" className="text-white">Preferred Date *</Label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="bg-secondary border-border text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredTime" className="text-white">Preferred Time</Label>
                  <Input
                    id="preferredTime"
                    name="preferredTime"
                    type="time"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="bg-secondary border-border text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="occasion" className="text-white">Occasion / Event Type</Label>
                <Select value={formData.occasion} onValueChange={(value) => handleSelectChange("occasion", value)}>
                  <SelectTrigger className="bg-secondary border-border text-white">
                    <SelectValue placeholder="Select occasion" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="casual-meetup" className="text-white">Casual Meetup</SelectItem>
                    <SelectItem value="date-night" className="text-white">Date Night</SelectItem>
                    <SelectItem value="birthday" className="text-white">Birthday</SelectItem>
                    <SelectItem value="celebration" className="text-white">Celebration</SelectItem>
                    <SelectItem value="group-gathering" className="text-white">Group Gathering</SelectItem>
                    <SelectItem value="corporate-event" className="text-white">Corporate Event</SelectItem>
                    <SelectItem value="other" className="text-white">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Special Requests or Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Any special requests or additional information..."
                  className="bg-secondary border-border text-white placeholder:text-muted-foreground min-h-24"
                />
              </div>

              <div className="bg-secondary/50 border border-border rounded-lg p-4 text-sm text-gray-300">
                <p className="font-semibold text-white mb-1">We'll contact you to confirm your reservation.</p>
                <p>Our team will reach out via phone or email within 24 hours to finalize your booking.</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-cta w-full text-base py-3 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Reserve Your Table"}
              </button>
            </form>
          </Card>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="section-spacing bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="accent-line"></div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Find Us</h2>
              <p className="text-gray-300 text-lg mb-8">
                Located in the heart of Mahabirsathan, Birgunj. Easy to find, easy to reach.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-1">Address</p>
                    <p className="text-gray-300">Mahabirsathan, Birgunj 44001, Nepal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-1">Phone</p>
                    <a href="tel:+977-9802591473" className="text-accent hover:text-accent/80 transition-colors">
                      +977 9802591473
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-1">Hours</p>
                    <p className="text-gray-300 text-sm space-y-1">
                      <span className="block">Mon–Thu: 12:00 PM – 10:00 PM</span>
                      <span className="block">Fri–Sat: 12:00 PM – 11:00 PM</span>
                      <span className="block">Sun: 12:00 PM – 10:00 PM</span>
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/bdEczTuVfcARWZAx9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta inline-block mt-8"
              >
                Get Directions
              </a>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8889456789!2d84.77!3d27.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994f6a5a5a5a5a5%3A0x0!2s7%20Dayz%20Lounge%20%26%20Bar!5e0!3m2!1sen!2snp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-spacing">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <div className="accent-line mx-auto"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do I need a reservation?",
                a: "While walk-ins are welcome, we recommend making a reservation, especially for groups or during peak hours. This ensures you get the best seating and service.",
              },
              {
                q: "Can I book for groups or celebrations?",
                a: "Absolutely! We love hosting groups and celebrations. We can accommodate various party sizes and customize the experience for your special occasion.",
              },
              {
                q: "Where are you located?",
                a: "We're located in Mahabirsathan, Birgunj 44001, Nepal. You can find us easily on Google Maps or use our Get Directions button.",
              },
              {
                q: "What time are you open?",
                a: "Mon–Thu: 12:00 PM – 10:00 PM, Fri–Sat: 12:00 PM – 11:00 PM, Sun: 12:00 PM – 10:00 PM.",
              },
              {
                q: "How will my reservation be confirmed?",
                a: "After you submit your reservation request, our team will contact you within 24 hours via phone or email to confirm availability and finalize your booking.",
              },
            ].map((faq, idx) => (
              <details key={idx} className="card-premium group cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-white hover:text-accent transition-colors">
                  <span>{faq.q}</span>
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-300 mt-4 pt-4 border-t border-border">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-display font-bold text-lg mb-2">7 Dayz Lounge & Bar</h3>
              <p className="text-gray-400 text-sm">
                A stylish destination in Birgunj for food, drinks, music, and memorable gatherings.
              </p>
            </div>

            <div>
              <p className="font-semibold text-white mb-3">Quick Links</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection("experience")} className="hover:text-accent transition-colors">Experience</button></li>
                <li><button onClick={() => scrollToSection("occasions")} className="hover:text-accent transition-colors">Occasions</button></li>
                <li><button onClick={() => scrollToSection("location")} className="hover:text-accent transition-colors">Location</button></li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-white mb-3">Contact</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="tel:+977-9802591473" className="hover:text-accent transition-colors">+977 9802591473</a></li>
                <li>Mahabirsathan, Birgunj 44001</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-white mb-3">Hours</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>Mon–Thu: 12:00 PM – 10:00 PM</li>
                <li>Fri–Sat: 12:00 PM – 11:00 PM</li>
                <li>Sun: 12:00 PM – 10:00 PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm">
                © 2026 7 Dayz Lounge & Bar. All rights reserved.
              </p>
              <button
                onClick={() => scrollToSection("reservation")}
                className="btn-cta"
              >
                Reserve Your Table
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
