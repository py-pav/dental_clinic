import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import FloatingPhoneButton from "@/components/FloatingPhoneButton";
import Carousel from "@/components/Carousel";

import checkIcon from "@/assets/icons/check_icon.png";
import implantMini from "@/assets/services/implant-mini.jpg";
import serviceImplantHero from "@/assets/services/service-implant-hero.jpg";
import serviceImplantProcess from "@/assets/services/service-implant-process.png";
import serviceImplantTrust from "@/assets/services/implant-trust.jpg";
import implantImmediate from "@/assets/services/implant-immediate.jpg";
import implantDelayed from "@/assets/services/implant-delayed.jpg";
import implantAllOn4 from "@/assets/services/implant-all-on-4.jpg";
import implant3D from "@/assets/services/implant-3d.jpg";
import serviceImplant from "@/assets/services/service-implant.jpg";
import serviceProsthetics from "@/assets/services/service-prosthetics.jpg";
import doctor1 from "@/assets/doctors/doctor-1.jpg";


const ImplantPage = () => {
  const [activeTab, setActiveTab] = useState<"immediate" | "delayed" | "all-on-4">("immediate");
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState(null);
useEffect(() => {window.scrollTo(0, 0);}, []);


const services = [
    {
      id: "immediate",
      name: "Одномоментная",
      image: implantImmediate,
      description: "Имплантат устанавливают в лунку сразу после удаления зуба. Операция проходит в 1 посещение.",
      steps: [
      "Удаление зуба, установка имплантата в костную ткань, установка временной коронки на импланте",
      "Через 3-4 месяца временная коронка меняется на постоянную (из диоксида циркония или керамики)"
      ]
    },
    {
      id: "delayed",
      name: "Отсроченная (классическая)",
      image: implantDelayed,
      description: "Метод установки зубных имплантатов на место ранее удалённых зубов. Обычно проходит в 2-4 посещения.",
      steps: [
      "Удаление зуба",
      "Через 3-6 месяцев после удаления устанавливают имплантат с формирователем десны",
      "Через 3 месяца после установки имплантата устанавливается временная коронка",
      "Через 6 недель временная коронка меняется на постоянную (из диоксида циркония или керамики)"
      ]
    },
    {
      id: "all-on-4",
      name: "Имплантация на 4-6 имплантах",
      image: implantAllOn4,
      description: "Идеальный метод восстановления зубного ряда при полном отсутствии или серьезных нарушениях в состоянии зубов. Протезы на имплантах надежнее фиксируются в полости рта по сравнению с съемными и не вызывают рвотного рефлекса. При этом методе возможно установить временные зубы уже в день имплантации.",
      steps: []
    },
  ];

const toggleDropdown = (id: string) => {
  setOpenDropdownId(openDropdownId === id ? null : id);
};

  return (
    <div className="py-5 pb-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 lg:mb-16">
          <div className="flex flex-col justify-start order-2 lg:order-1">
              <h2 className="section-title text-left mt-10 max-md:mt-6">Имплантация зубов <br />в Ставрополе от 5100 руб/мес*</h2>
              <div className="flex gap-3 mb-16 max-md:mb-6 mt-10 max-md:mt-6">
                <div className="flex-shrink-0 self-center hidden md:block">
                  <img src={implantMini} alt="Имплантация" className="w-32 h-32 rounded-full object-cover"/>
                </div>
                <div className="space-y-1 flex-1 ">
                  <BenefitCard icon={checkIcon} title="Цифровое планирование" />
                  <BenefitCard icon={checkIcon} title="Имплантация с навигацией (с 3D шаблоном)" />
                  <BenefitCard icon={checkIcon} title="Быстрая и безопасная установка" />
                  <BenefitCard icon={checkIcon} title="Швейцарские импланты (Nobel, Neo-Dent)" />
                  <BenefitCard icon={checkIcon} title="Приживаемость имплатов 98%" />
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-6">* При предоставлении рассрочки от банка-партнёра.
                                                          <br />Подробности на консультации</p>
              <div className="flex justify-center">
                <CallButton/>
              </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl flex justify-center order-1 lg:order-2">
            <img src={serviceImplantHero} alt="Имплантация зубов" className="w-auto h-auto object-contain"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
              }}/>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-0 max-md:mb-8 lg:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-1 flex-1 flex flex-col justify-center order-2 lg:order-1">
            <h2 className="section-title -mt-2">Что такое имплантация?</h2>
            <p className="text-lg leading-relaxed mt-10"><strong>Имплантация</strong> — это современный метод восстановления
            утраченных зубов с помощью установки искусственных корней (имплантов) в челюстную кость. Имплант
            представляет собой титановый или циркониевый стержень, который вживляется в кость и служит опорой для
            будущей коронки, моста или протеза.</p>
          </div>
          <div className="relative overflow-hidden rounded-2xl flex justify-center order-1 lg:order-2">
            <img src={serviceImplantProcess} alt="Что такое имплантация" className="h-auto object-contain"/>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-0 max-md:mb-8 lg:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-2xl flex items-center">
            <img src={serviceImplantTrust} alt="Почему доверяют именно нам" className="w-full h-auto object-contain"/>
          </div>
          <div className="space-y-1 flex-1 flex flex-col justify-center">
            <h2 className="section-title mt-10 max-md:mt-4">Почему доверяют именно нам:</h2>
            <TrustItem text="Опыт в стоматологии более 16 лет" />
            <TrustItem text="Цифровое планирование постановки импланта и дальнейшего протезирования" />
            <TrustItem text="Использование самого высокоточного внутриротового сканера в мире (Prime Scan)" />
            <TrustItem text="Изготовление индивидуальных 3D-шаблонов для более точной установки импланта" />
            <TrustItem text="Работа с мягкими и костными тканями" />
            <TrustItem text="Проверенные протоколы" />
            <TrustItem text="Возможность оформить рассрочку и не платить всю сумму сразу" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-0 lg:mb-16">
        <h2 className="section-title mt-10">Виды имплантации:</h2>
        <div className="hidden md:grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-[400px]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white text-xl font-bold mb-2">{service.name}</h3>
                    <Link>
                      <Button variant="secondary" size="sm" onClick={() => setSelectedService(service)}>
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
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white text-xl font-bold mb-2">{service.name}</h3>
                    <Link>
                      <Button variant="secondary" size="sm" onClick={() => setSelectedService(service)}>
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

      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors z-10">
              <X className="w-6 h-6" />
            </button>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{selectedService.name}</h3>
              <p className="text-gray-700 mb-6">{selectedService.description}</p>
              {selectedService.steps && selectedService.steps.length > 0 && (
                <>
                  <h4 className="text-xl font-semibold mb-3">Этапы:</h4>
                  <ul className="space-y-2">
                    {selectedService.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary font-bold">{index + 1}.</span>
                        <span className="text-gray-600">{step}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 mb-0 lg:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-2xl flex justify-center order-2 lg:order-1">
            <img src={implant3D} alt="Почему важно использовать 3D-шаблон" className="w-full h-auto object-contain"/>
          </div>
          <div className="space-y-1 flex-1 order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="section-title mt-10">Почему важно использовать 3D-шаблон</h2>
            <TrustItem text="Высокая точность установки" />
            <TrustItem text="Минимальная травматичность" />
            <TrustItem text="Сокращение времени операции" />
            <TrustItem text="Исключается повреждение нервов, сосудов и соседних зубов" />
            <TrustItem text="Прогнозируемый результат" />
            <TrustItem text="Быстрое восстановление" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-0 lg:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-1 flex-1 flex flex-col justify-center">
            <h1 className="section-title mt-10">Терентьев Олег Анатольевич</h1>
            <TrustItem text="Главный врач, cтоматолог-терапевт, стоматолог-ортопед, стоматолог-хирург-имплантолог" />
            <TrustItem text="Стаж работы более 16 лет" />
            <TrustItem text="Комплексный подход: лечение, имплантация и протезирование пациента" />
            <TrustItem text="Применение современных цифровых технологий и инновационных методов в работе" />
            <div className="flex justify-center pt-6">
                <CallButton/>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl flex justify-center">
            <img src={doctor1} alt="Терентьев Олег Анатольевич" className="h-[380px] w-auto rounded-full object-cover"/>
          </div>
        </div>
      </div>


      <FloatingPhoneButton />
    </div>
  );
};

const BenefitCard = ({ icon, title }: { icon: string; title: string }) => (
  <div className="flex items-center gap-2">
    <img src={icon} alt="" className="w-5 h-5 opacity-60 grayscale" />
    <span className="text-lg leading-relaxed">{title}</span>
  </div>
);

const CallButton = () => (
      <a
        href="tel:89943050505"
        className="btn-primary inline-block text-center py-4 px-20 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 phone-pulse-animation hidden md:inline-flex"
        style={{backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))'}}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span className="text-lg font-semibold">Записаться</span>
      </a>
)

const TrustItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <span className="text-primary text-xl mt-1 leading-none">•</span>
    <span className="text-lg leading-relaxed">{text}</span>
  </div>
);

export default ImplantPage;
