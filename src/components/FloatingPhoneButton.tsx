import { useEffect, useState } from "react";
import telegramIcon from "@/assets/icons/telegram-icon.png";
import maxIcon from "@/assets/icons/max-icon.png";

const FloatingPhoneButton = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <div className="flex justify-end gap-3 mb-2">
        {/* Telegram */}
        <a href="https://t.me/Esterio_stom" target="_blank" rel="noopener noreferrer"
           className="transition-transform duration-200 hover:scale-110 active:scale-95"
        >
          <img src={telegramIcon} alt="Telegram" className="h-10 w-10 rounded-full shadow-md" />
        </a>

        {/* MAX */}
        <a href="https://max.ru/u/f9LHodD0cOJQ6eI2WZyF-SaYJA3j7qG5d0BjL26gFfr1I6Lt2OSpGmTJ_AI"
          target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-110 active:scale-95"
        >
          <img src={maxIcon} alt="MAX" className="h-10 w-10 rounded-full shadow-md" />
        </a>
      </div>

      {/* Кнопка телефона */}
      <a href="tel:89943050505"
        className="btn-primary w-full text-center py-4 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 phone-pulse-animation"
        style={{backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))'}}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span className="text-lg font-semibold">Записаться</span>
      </a>
    </div>
  );
};

export default FloatingPhoneButton;