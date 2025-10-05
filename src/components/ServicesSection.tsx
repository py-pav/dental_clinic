import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Smile,
  Shield,
  Sparkles,
  Wrench,
  Heart,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Regular cleanings, exams, and fluoride treatments to keep your smile healthy.",
    features: ["Regular Cleanings", "Oral Exams", "Fluoride Treatment", "Sealants"],
    color: "bg-primary"
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with whitening, veneers, and aesthetic treatments.",
    features: ["Teeth Whitening", "Porcelain Veneers", "Smile Makeovers", "Bonding"],
    color: "bg-medical-mint-dark"
  },
  {
    icon: Wrench,
    title: "Restorative Care",
    description: "Repair and restore damaged teeth with crowns, fillings, and implants.",
    features: ["Dental Crowns", "Fillings", "Dental Implants", "Root Canals"],
    color: "bg-accent"
  },
  {
    icon: Heart,
    title: "Emergency Care",
    description: "Urgent dental care when you need it most, including pain relief.",
    features: ["Pain Relief", "Emergency Repairs", "Same-Day Treatment", "24/7 Support"],
    color: "bg-primary"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
              Our Services
            </Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Comprehensive Dental
              <span className="block text-medical-mint-dark">Care Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From routine cleanings to complex procedures, we offer a full range of dental services
              using the latest technology and techniques.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-medical transition-all duration-300 border-0 shadow-card-soft overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground text-sm uppercase tracking-wide">
                        Services Include:
                      </h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-medical-mint mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="default" size="lg" className="bg-trust-gradient hover:opacity-90 text-white font-medium px-8 py-6 text-lg group">
              Schedule Your Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;