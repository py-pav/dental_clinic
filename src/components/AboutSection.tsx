import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Heart, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-soft-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
              Meet Dr. Sarah Johnson
            </Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Experienced & Caring
              <span className="block text-medical-mint-dark">Dental Professional</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With over 15 years of experience in comprehensive dental care, Dr. Johnson combines
              advanced techniques with a gentle, patient-centered approach.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Stats Cards */}
            <div className="space-y-6">
              <Card className="p-6 shadow-card-soft border-0 bg-white/60 backdrop-blur-sm hover:shadow-medical transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">15+ Years Experience</h3>
                    <p className="text-muted-foreground">Comprehensive dental care expertise</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-card-soft border-0 bg-white/60 backdrop-blur-sm hover:shadow-medical transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-medical-mint-dark flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">5000+ Happy Patients</h3>
                    <p className="text-muted-foreground">Trusted by our community</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-card-soft border-0 bg-white/60 backdrop-blur-sm hover:shadow-medical transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <Heart className="w-6 h-6 text-medical-mint-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Gentle Care Approach</h3>
                    <p className="text-muted-foreground">Comfort-focused treatments</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right: Description */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-heading text-2xl font-semibold text-primary">
                  Your Dental Health Partner
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dr. Sarah Johnson graduated from the University of Dental Medicine with honors
                  and has been serving the community with exceptional dental care. She specializes
                  in preventive dentistry, cosmetic procedures, and restorative treatments.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our practice is built on trust, communication, and delivering the highest quality
                  care in a comfortable, modern environment. We believe everyone deserves a healthy,
                  beautiful smile.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Credentials & Memberships:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Doctor of Dental Surgery (DDS)</li>
                  <li>• American Dental Association Member</li>
                  <li>• Certified in Cosmetic Dentistry</li>
                  <li>• Advanced Implant Training</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;