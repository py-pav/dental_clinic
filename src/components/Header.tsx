import { Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import toothLogo from "@/assets/tooth-logo.png";
import CallbackModal from "./CallbackModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm will-change-transform h-[73px] md:h-[73px]"> {/* Фиксированная высота */}
        <div className="container mx-auto px-4 h-full"> {/* Добавлен h-full */}
          <div className="flex items-center justify-between gap-4 h-full"> {/* Убраны flex-wrap, добавлен h-full */}
            <div className="flex items-center gap-4 min-w-0 flex-1"> {/* Добавлены классы для контроля ширины */}
              <img src={toothLogo} alt="Эстерио логотип" className="h-12 w-12 flex-shrink-0" />
              <div className="hidden md:block min-w-0 flex-1"> {/* Добавлен контроль переполнения */}
                <p className="text-sm text-muted-foreground truncate">
                  <strong>Адрес:</strong> г.Ставрополь, улица Мира, 460/3
                </p>
                <p className="text-sm text-muted-foreground truncate">
                  <strong>Режим работы:</strong> Пн-Пт 09:00-20:00, Сб 10:00-16:00, Вс 10:00-14:00
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1 flex-shrink-0"> {/* Запрет сжатия */}

              {/* Phone */}
              <a href="tel:89943050505" className="flex items-center gap-2 text-base font-semibold text-foreground hover:text-primary transition-colors whitespace-nowrap">
                <Phone className="h-4 w-4 flex-shrink-0" />8 (994) 305 05 05</a>

              <div className="flex items-center gap-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/79943050505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-green-600 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0 text-green-600" />WhatsApp</a>

                {/* Telegram */}
                <a
                  href="https://t.me/79943050505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-blue-500 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0 text-blue-500" />Telegram</a>
              </div>

              {/*
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-sm text-primary hover:underline font-medium whitespace-nowrap"
              >Обратный звонок</button>
              */}
            </div>
          </div>
        </div>
      </header>
      <CallbackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;