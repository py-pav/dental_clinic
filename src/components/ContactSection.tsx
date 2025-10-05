import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  ExternalLink
} from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-soft-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
              Contact Us
            </Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Ready to Get Started?
              <span className="block text-medical-mint-dark">We're Here to Help</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Schedule your appointment today and take the first step towards optimal oral health.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

            {/* Phone */}
            <Card className="text-center p-6 shadow-card-soft border-0 bg-white/80 backdrop-blur-sm hover:shadow-medical transition-all duration-300 group">
              <CardContent className="pt-0">
                <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground text-sm mb-3">Ready to help</p>
                <a href="tel:+15551234567" className="font-medium text-primary hover:text-medical-mint-dark transition-colors">
                  (555) 123-4567
                </a>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="text-center p-6 shadow-card-soft border-0 bg-white/80 backdrop-blur-sm hover:shadow-medical transition-all duration-300 group">
              <CardContent className="pt-0">
                <div className="w-16 h-16 rounded-full bg-medical-mint-dark mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground text-sm mb-3">Quick questions</p>
                <a href="mailto:info@brightsmiledentalcare.com" className="font-medium text-primary hover:text-medical-mint-dark transition-colors text-sm">
                  info@brightsmile.com
                </a>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="text-center p-6 shadow-card-soft border-0 bg-white/80 backdrop-blur-sm hover:shadow-medical transition-all duration-300 group">
              <CardContent className="pt-0">
                <div className="w-16 h-16 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-medical-mint-dark" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
                <p className="text-muted-foreground text-sm mb-3">Find our office</p>
                <address className="font-medium text-primary not-italic text-sm">
                  123 Dental Avenue<br />
                  Smile City, SC 12345
                </address>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="text-center p-6 shadow-card-soft border-0 bg-white/80 backdrop-blur-sm hover:shadow-medical transition-all duration-300 group">
              <CardContent className="pt-0">
                <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground text-sm mb-3">We're open</p>
                <div className="font-medium text-primary text-sm">
                  Mon-Fri: 8AM-6PM<br />
                  Sat: 9AM-2PM
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Office Hours Detailed */}
          <Card className="mb-12 shadow-card-soft border-0 bg-white/60 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Office Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="font-medium text-foreground">Monday - Friday</span>
                      <span className="text-muted-foreground">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="font-medium text-foreground">Saturday</span>
                      <span className="text-muted-foreground">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium text-foreground">Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Emergency Care
                  </h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      We understand dental emergencies can't wait. Call us anytime for urgent care.
                    </p>
                    <Button variant="outline" className="w-full group">
                      <Phone className="w-4 h-4 mr-2" />
                      Emergency Line: (555) 123-4567
                      <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Buttons */}
          <div className="text-center space-y-4">
            <Button size="lg" className="bg-trust-gradient hover:opacity-90 text-white font-medium px-8 py-6 text-lg mr-4">
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-6 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;