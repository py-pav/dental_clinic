import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const DoctorPage = () => {
  const { doctorId } = useParams();
  const [isEducationOpen, setIsEducationOpen] = useState(false);

  useEffect(() => {window.scrollTo(0, 0);}, [doctorId]);

  const doctors: Record<string, {
    name: string;
    position: string;
    image: string;
    bio: string;
    education: string[];
    experience: string;
    job_review: string;
  }> = {
    doctor_1: {
      name: "Терентьев Олег Анатольевич",
      position: "Директор, главный врач, стоматолог-терапевт, стоматолог-ортопед, стоматолог-хирург-имплантолог",
      image: doctor1,
      bio: "Олег Анатольевич - опытный специалист с более чем 15-летним стажем работы в области терапевтической стоматологии. Он возглавляет команду клиники Эстерио и лично контролирует качество всех проводимых процедур.",
      education: [
        "24.06.2010г. Закончил Читинскую Государственную Медицинскую Академию по специальности «Стоматология»",
        "22.06.2011г. Интернатура «Стоматология общей практики», г.Чита",
        "27.12.2014г. Профессиональная переподготовка «Стоматология ортопедическая», г.Омск",
        "28.09.2015г. Профессиональная переподготовка «Стоматология терапевтическая», г.Омск",
        "16.05.2016г. Профессиональная переподготовка «Организация здравоохранения и общественное здоровье», г.Красноярск",
        "27.12.2019г. Профессиональная переподготовка «Стоматология ортопедическая», г.Красноярск",
        "22.02.2019г. Профессиональная переподготовка «Стоматология хирургическая», г.Омск",
        "23.04.2020г. Профессиональная переподготовка «Стоматология терапевтическая», г.Красноярск",
        "23.04.2024г. Аккредитация «Стоматология хирургическая», г.Красноярск",
        "26.11.2024г. Аккредитация «Стоматология ортопедическая», г.Красноярск",
        "25.03.2025г. Аккредитация «Стоматология терапевтическая», г.Красноярск",
      ],
      experience: "15 лет практики, более 9000 успешно пролеченных пациентов",
      job_review: "https://prodoctorov.ru/stavropol/vrach/241117-terentev/",
    },
//     doctor_2: {
//       name: "ФИО",
//       position: "Должность",
//       image: doctor2,
//       bio: "Биография",
//       education: [
//         "Образование 1",
//         "Образование 2",
//       ],
//       experience: "Опыт работы",
//     },
//     administrator: {
//       name: "ФИО",
//       position: "Должность",
//       image: doctor3,
//       bio: "Биография",
//       education: [
//         "Образование 1",
//         "Образование 2",
//       ],
//       experience: "Опыт работы",
//     },
  };

  const doctor = doctorId ? doctors[doctorId] : null;

  if (!doctor) {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="section-title">Врач не найден</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="overflow-hidden h-fit">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-[400px] object-cover"
            />
          </Card>

          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{doctor.name}</h1>
              <p className="text-xl text-muted-foreground">{doctor.position}</p>
            </div>

            <p className="text-lg leading-relaxed">{doctor.bio}</p>

            <div>
              <h2
                className="text-2xl font-bold mb-4 cursor-pointer hover:text-primary transition-colors"
                onClick={() => setIsEducationOpen(!isEducationOpen)}
              >
                Образование
                <span className="ml-2 text-lg">
                  {isEducationOpen ? '▲' : '▼'}
                </span>
              </h2>
              {isEducationOpen && (
                <ul className="space-y-3">
                  {doctor.education.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary text-xl">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Опыт работы</h2>
              <p className="text-lg">{doctor.experience}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Отзывы</h2>
              <a href={doctor.job_review} target="_blank" rel="noopener noreferrer"
                className="text-lg underline hover:no-underline">
                Сайт отзывов о врачах №1 в России <strong>prodoctorov.ru</strong>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;
