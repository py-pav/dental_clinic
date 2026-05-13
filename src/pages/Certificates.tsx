import Carousel from "@/components/Carousel";
import certificate1 from "@/assets/certificates/certificate-1.jpg";
import certificate2 from "@/assets/certificates/certificate-2.jpg";
import certificate3 from "@/assets/certificates/certificate-3.jpg";
import certificate4 from "@/assets/certificates/certificate-4.jpg";
import certificate5 from "@/assets/certificates/certificate-5.jpg";
import certificate6 from "@/assets/certificates/certificate-6.jpg";
import certificate7 from "@/assets/certificates/certificate-7.jpg";
import certificate8 from "@/assets/certificates/certificate-8.jpg";
import certificate9 from "@/assets/certificates/certificate-9.jpg";
import certificate10 from "@/assets/certificates/certificate-10.jpg";
import certificate11 from "@/assets/certificates/certificate-11.jpg";
import certificate12 from "@/assets/certificates/certificate-12.jpg";
import certificate13 from "@/assets/certificates/certificate-13.jpg";
import certificate14 from "@/assets/certificates/certificate-14.jpg";
import certificate15 from "@/assets/certificates/certificate-15.jpg";
import certificate16 from "@/assets/certificates/certificate-16.jpg";
import { useEffect } from "react";
import FloatingPhoneButton from "@/components/FloatingPhoneButton";


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
        <FloatingPhoneButton />
      </div>
    </div>
  );
};

export default Certificates;
