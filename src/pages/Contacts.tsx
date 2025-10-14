import { MapPin, Phone, Clock, MessageCircle, Send, Mail } from "lucide-react";
import clinicFacade from "@/assets/front.jpg";
import { useEffect } from "react";

const Contacts = () => {
  useEffect(() => {window.scrollTo(0, 0);}, []);
  return (
    <div className="py-5">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Контакты</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full">
          {/* Адрес */}
          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
            <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-sm mb-1">Адрес</h3>
              <p className="text-muted-foreground text-sm">
               г.Ставрополь, улица Мира, 460/3
              </p>
            </div>
          </div>

          {/* Режим работы */}
          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
            <Clock className="h-5 w-5 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-sm mb-1">Режим работы</h3>
              <p className="text-muted-foreground text-sm">
                <span className="block">Пн-Пт 09:00-20:00,</span>
      <span className="block">Сб 10:00-16:00, Вс 10:00-14:00</span> по предварительной записи
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
            <div className="flex flex-col gap-1 flex-shrink-0">
              {/* Телефон */}
              <a href="tel:89943050505" className="flex items-center gap-2 text-base font-semibold text-foreground hover:text-primary transition-colors whitespace-nowrap">
                <Phone className="h-4 w-4 flex-shrink-0" />8 (994) 305 05 05</a>
              {/* Email */}
              <div className="flex items-center gap-3">
              <a href="mailto:Esterio-stom@yandex.ru"
                  className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-red-600 transition-colors whitespace-nowrap">
                  <Mail className="h-4 w-4 flex-shrink-0 text-red-600" />Esterio-stom@yandex.ru</a>
              </div>

              <div className="flex items-center gap-3">
                {/* WhatsApp */}
                <a href="https://wa.me/79943050505" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-green-600 transition-colors whitespace-nowrap">
                  <MessageCircle className="h-4 w-4 flex-shrink-0 text-green-600" />WhatsApp</a>
                {/* Telegram */}
                <a href="https://t.me/Esterio_stom" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-blue-500 transition-colors whitespace-nowrap">
                  <Send className="h-4 w-4 flex-shrink-0 text-blue-500" />Telegram</a>
              </div>

              <div className="flex items-center gap-3 mt-1">
                 {/* ВКонтакте */}
                <a href="https://vk.com/esterio_stom" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-blue-600 transition-colors whitespace-nowrap">
                  <div className="h-4 w-4 flex-shrink-0 bg-blue-600 text-white rounded flex items-center justify-center text-xs font-bold">
                  VK</div>МыВКонтакте</a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Фото фасада */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={clinicFacade} alt="Фасад клиники Эстерио" className="w-full h-[400px] object-cover"/>
          </div>

          {/* Яндекс Карта */}
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=41.930478%2C45.033156&mode=poi&poi%5Bpoint%5D=41.930289%2C45.033091&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D24474187773&z=19.4"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="Карта клиники Эстерио"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;