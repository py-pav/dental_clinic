import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import heroImage from "@/assets/hero-dental.jpg";
import logoImage from "@/assets/logo-image.png";
import clinicInterior1 from "@/assets/clinic-interior-1.jpg";
import clinicInterior2 from "@/assets/clinic-interior-2.jpg";
import clinicInterior3 from "@/assets/clinic-interior-3.jpg";
import clinicInterior4 from "@/assets/clinic-interior-4.jpg";
import clinicInterior5 from "@/assets/clinic-interior-5.jpg";
import clinicInterior6 from "@/assets/clinic-interior-6.jpg";
import clinicInterior7 from "@/assets/clinic-interior-7.jpg";
import serviceTherapy from "@/assets/service-therapy.jpg";
import serviceHygiene from "@/assets/service-hygiene.jpg";
import serviceImplant from "@/assets/service-implant.jpg";
import serviceProsthetics from "@/assets/service-prosthetics.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const Index = () => {
  const location = useLocation();
  // Функция для прокрутки к секции
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Обработка хеша при загрузке страницы
  useEffect(() => {
    if (location.hash) {
      // Небольшая задержка для полной загрузки DOM
      const timer = setTimeout(() => {
        const sectionId = location.hash.replace('#', '');
        scrollToSection(sectionId);
      }, 100);

      return () => clearTimeout(timer);
    } else {
      // Если нет хеша, скроллим наверх
      window.scrollTo(0, 0);
    }
  }, [location]);
  const clinicImages = [clinicInterior1, clinicInterior2, clinicInterior3, clinicInterior4, clinicInterior5,
  clinicInterior6, clinicInterior7];

  const services = [
    {
      id: "therapy",
      name: "Терапия",
      image: serviceTherapy,
    },
    {
      id: "hygiene",
      name: "Профессиональная гигиена",
      image: serviceHygiene,
    },
    {
      id: "implantation",
      name: "Имплантация",
      image: serviceImplant,
    },
    {
      id: "prosthetics",
      name: "Протезирование",
      image: serviceProsthetics,
    },
  ];

  const doctors = [
    {
      id: "doctor_1",
      name: "Терентьев Олег Анатольевич",
      position: "Главный врач, cтоматолог-терапевт, стоматолог-ортопед, стоматолог-хирург-имплантолог",
      image: doctor1,
    },
    {
      id: "doctor_2",
      name: "Фатима",
      position: "Ассистент стоматолога",
      image: doctor2,
    },
    {
      id: "administrator",
      name: "Софья",
      position: "Администратор",
      image: doctor3,
    },
  ];

  const whyChooseUs = [
    {
      id: 1,
      title: "Современный подход",
      description: "Мы используем новейшие достижения медицины и технологий для максимального комфорта пациентов."
    },
    {
      id: 2,
      title: "Безопасность",
      description: "Применяем проверенные методики и качественные материалы, обеспечивающие здоровье и долговечность результата."
    },
    {
      id: 3,
      title: "Протезирование",
      description: "Наши специалисты подберут оптимальное решение для восстановления утраченных функций зубочелюстной системы."
    },
    {
      id: 4,
      title: "Имплантация",
      description: "Восстановление зубов с использованием современных материалов и методик, позволяющих вернуть улыбке привлекательность и функциональность."
    },
    {
      id: 5,
      title: "Цифровой подход",
      description: "Применение инновационных цифровых решений обеспечивает точность диагностики и эффективность лечения."
    },
    {
      id: 6,
      title: "Забота о пациентах",
      description: "Мы заботимся о каждом пациенте, создавая комфортную атмосферу и обеспечивая высокий уровень сервиса. С нами ваша улыбка станет идеальной!"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
    <section className="relative h-[20vh] md:h-[20vh] flex items-center justify-start">
      <div className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>
      <div className="absolute left-4 md:left-1 top-1/2 transform -translate-y-1/2 z-20 w-auto opacity-90">
        <img src={logoImage} alt="Логотип" className="h-20 w-auto" />
      </div>
    </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title">О клинике</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="h-[400px]">
              <Carousel
                items={clinicImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Клиника ${idx + 1}`}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                ))}
                autoPlay
                interval={60000}
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Стоматология <strong>Эстерио</strong> - это пространство современного подхода к
                здоровью зубов, основанное на передовых технологиях и опыте профессионалов
                высокого уровня.
              </p>
              <p className="text-lg leading-relaxed">
                Мы предлагаем широкий спектр услуг, среди которых особое внимание
                уделяется безопасным методикам лечения, таким как имплантология и цифровое протезирование.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-5 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Почему выбирают нас?</h2>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <Card key={item.id} className="p-6 hover:shadow-xl transition-shadow h-full">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="md:hidden">
            <Carousel
              items={whyChooseUs.map((item) => (
                <Card key={item.id} className="p-6 mx-2 h-full">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              ))}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Услуги</h2>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white text-xl font-bold mb-2">{service.name}</h3>
                    <Link to={`/services/${service.id}`}>
                      <Button variant="secondary" size="sm">
                        Подробнее
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="md:hidden">
            <Carousel
              items={services.map((service) => (
                <Card key={service.id} className="overflow-hidden mx-2">
                  <div className="relative h-80">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                      <h3 className="text-white text-xl font-bold mb-2">{service.name}</h3>
                      <Link to={`/services/${service.id}`}>
                        <Button variant="secondary" size="sm">
                          Подробнее
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-5 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Наш коллектив</h2>
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold">{doctor.name}</h3>
                  <p className="text-muted-foreground">{doctor.position}</p>
                    <Link to={`/doctors/${doctor.id}`}>
                        {doctor.id === 'doctor_1' && (
                            <Button variant="outline" className="w-full mt-4">
                                Подробнее
                            </Button>
                        )}
                    </Link>
                </div>
              </Card>
            ))}
          </div>
          <div className="md:hidden">
            <Carousel
              items={doctors.map((doctor) => (
                <Card key={doctor.id} className="overflow-hidden mx-2">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold">{doctor.name}</h3>
                    <p className="text-muted-foreground">{doctor.position}</p>
                        <Link to={`/doctors/${doctor.id}`}>
                            {doctor.id === 'doctor_1' && (
                                <Button variant="outline" className="w-full mt-4">
                                    Подробнее
                                </Button>
                            )}
                        </Link>
                  </div>
                </Card>
              ))}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
