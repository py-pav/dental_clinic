import { Phone, MessageCircle, Eye, EyeOff, Send } from "lucide-react";
import { useState } from "react";
import toothLogo from "@/assets/tooth-logo.png";
import CallbackModal from "./CallbackModal";
import { useAccessibility } from "./AccessibilityContext";


const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAccessibilityMode, toggleAccessibilityMode } = useAccessibility();

  return (
    <>
      <header className={`sticky top-0 z-50 bg-card border-b border-border shadow-sm will-change-transform h-[73px] md:h-[73px] ${isAccessibilityMode ? 'accessibility-mode' : ''}`}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between gap-4 h-full">
            <div className="flex items-center gap-4 min-w-0 flex-1">
              {!isAccessibilityMode && (
                <img src={toothLogo} alt="Эстерио логотип" className="h-12 w-12 flex-shrink-0" />
              )}
              <div className="hidden md:block min-w-0 flex-1 space-y-1">
               <p className="text-sm text-muted-foreground leading-tight"><strong>Адрес:</strong> г.Ставрополь, улица Мира, 460/3</p>
               <p className="text-sm text-muted-foreground leading-tight"><strong>Режим работы:</strong> Пн-Пт 09:00-20:00, Сб 10:00-16:00, Вс 10:00-14:00</p>
              </div>
            </div>

            <div className="flex flex-col gap-1 flex-shrink-0">
              {/* Phone */}
              <a href="tel:89943050505" className="flex items-center gap-2 text-base font-semibold text-foreground hover:text-primary transition-colors whitespace-nowrap">
                {!isAccessibilityMode && <Phone className="h-4 w-4 flex-shrink-0" />}8 (994) 305 05 05</a>

              <div className="flex items-center gap-3">
                {/* WhatsApp */}
                <a href="https://wa.me/79943050505" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-green-600 transition-colors whitespace-nowrap">
                  {!isAccessibilityMode && <MessageCircle className="h-4 w-4 flex-shrink-0 text-green-500" />}WhatsApp</a>

                {/* Telegram */}
                <a href="https://t.me/Esterio_stom" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-blue-500 transition-colors whitespace-nowrap">
                  {!isAccessibilityMode && <Send className="h-4 w-4 flex-shrink-0 text-blue-500" />}Telegram</a>
              </div>

              {/*<button onClick={() => setIsModalOpen(true)}
              className="text-sm text-primary hover:underline font-medium whitespace-nowrap">Обратный звонок</button>*/}
            </div>
            {/*<div>
             <button
                onClick={toggleAccessibilityMode}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label={isAccessibilityMode ? "Отключить режим для слабовидящих" : "Включить режим для слабовидящих"}
              >
                {isAccessibilityMode ? (
                  <EyeOff className="h-7 w-7 text-primary" />
                ) : (
                  <Eye className="h-7 w-7 text-primary" />
                )}
              </button>
            </div>*/}

          </div>
        </div>
      </header>
      <CallbackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;