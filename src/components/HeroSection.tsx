import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/dental-office-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern dental office interior"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-medical-mint-dark/70"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Bright Smile
            <span className="block text-medical-mint">Dental Care</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Professional dental care with modern technology and compassionate service.
            Your oral health is our priority.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 font-medium px-8 py-6 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Appointment
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-medium px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>

          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-medical-mint" />
              <span className="font-medium">(555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-medical-mint" />
              <span className="font-medium">123 Dental Ave, City</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5 text-medical-mint" />
              <span className="font-medium">Mon-Fri: 8AM-6PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;