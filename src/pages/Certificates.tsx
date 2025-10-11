import Carousel from "@/components/Carousel";
import certificate1 from "@/assets/certificate-1.jpg";
import certificate2 from "@/assets/certificate-2.jpg";
import certificate3 from "@/assets/certificate-3.jpg";
import certificate4 from "@/assets/certificate-4.jpg";
import certificate5 from "@/assets/certificate-5.jpg";
import certificate6 from "@/assets/certificate-6.jpg";
import certificate7 from "@/assets/certificate-7.jpg";
import certificate8 from "@/assets/certificate-8.jpg";
import certificate9 from "@/assets/certificate-9.jpg";
import certificate10 from "@/assets/certificate-10.jpg";
import certificate11 from "@/assets/certificate-11.jpg";
import certificate12 from "@/assets/certificate-12.jpg";
import certificate13 from "@/assets/certificate-13.jpg";
import certificate14 from "@/assets/certificate-14.jpg";
import certificate15 from "@/assets/certificate-15.jpg";
import certificate16 from "@/assets/certificate-16.jpg";
import { useEffect } from "react";

const Certificates = () => {
    useEffect(() => {window.scrollTo(0, 0);}, []);
    const certificates = [certificate1, certificate2, certificate3, certificate4, certificate5, certificate6,
    certificate7, certificate8, certificate9, certificate10, certificate11, certificate12, certificate13,
    certificate14, certificate15, certificate16];

  return (
    <div className="py-5">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Сертификаты</h1>
        <div className="h-[600px]">
          <Carousel
            items={certificates.map((cert, idx) => (
              <div key={idx} className="flex items-center justify-center px-4">
                <img
                  src={cert}
                  alt={`Сертификат ${idx + 1}`}
                  className="max-h-[580px] w-auto object-contain rounded-lg shadow-xl"
                />
              </div>
            ))}
            autoPlay
            interval={60000}
          />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
