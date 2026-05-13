import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAccessibility } from "./AccessibilityContext";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const { isAccessibilityMode } = useAccessibility();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
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
    }
    setIsMobileMenuOpen(false);
  };

  const services = [
    { name: "Имплантация", path: "/services/implantation" },
    { name: "Терапия", path: "/services/therapy" },
    { name: "Профгигиена", path: "/services/hygiene" },
    { name: "Протезирование", path: "/services/prosthetics" },
  ];

  const menuItems = [
    { name: "Главная", action: () => window.location.pathname === "/" ? window.scrollTo({ top: 0, behavior: "smooth" }) : window.location.href = "/" },
    { name: "Услуги", hasSubmenu: true },
    { name: "Наш коллектив", action: () => scrollToSection("team") },
    { name: "Прайс-лист", path: "/price-list" },
    { name: "Сертификаты", path: "/certificates" },
    { name: "Лицензии", path: "/licenses" },
    { name: "Контакты", path: "/contacts" },
    { name: "Отзывы", path: "/job_reviews" },
  ];

  // Функция для переключения подменю
  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className={`sticky top-[73px] md:top-[73px] z-40 bg-primary text-primary-foreground shadow-md ${isAccessibilityMode ? 'accessibility-mode bg-white' : ''}`}>
      <div className={`container mx-auto px-4 ${isAccessibilityMode ? 'bg-white' : ''}`}>
        <div className="flex items-center justify-between md:justify-center">
          <div className="md:hidden"></div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <ul className={cn(
            "md:flex md:items-center md:gap-6 absolute md:relative top-full left-0 w-full md:w-auto bg-primary md:bg-transparent shadow-md md:shadow-none border-0",
            isMobileMenuOpen ? "block" : "hidden"
          )}>
            {menuItems.map((item) => (
              <li key={item.name} className="relative">
                {item.hasSubmenu ? (
                  <div>
                    {/* Кнопка для всех устройств - по клику */}
                    <div
                      className="py-2 px-4 cursor-pointer hover:bg-primary/90 flex items-center justify-between gap-1 whitespace-nowrap md:justify-start"
                      onClick={toggleServicesMenu}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={cn("h-4 w-4 transition-transform", isServicesOpen && "rotate-180")} />
                    </div>

                    {/* Подменю */}
                    {isServicesOpen && (
                      <ul
                        className="bg-card text-card-foreground shadow-lg rounded-md overflow-hidden min-w-[250px] z-50 md:absolute md:top-full md:left-0 mt-0"
                        style={isAccessibilityMode ? { fontSize: '1em' } : {}}
                      >
                        {services.map((service) => (
                          <li key={service.path}>
                            <Link
                              to={service.path}
                              className={`block py-3 px-4 hover:bg-accent transition-colors ${isAccessibilityMode ? '' : 'text-sm'}`}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsServicesOpen(false);
                              }}
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : item.path ? (
                  <Link
                    to={item.path}
                    className="block py-2 px-4 hover:bg-primary/90 transition-colors whitespace-nowrap"
                    onClick={() => setIsMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      item.action?.();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left py-2 px-4 hover:bg-primary/90 transition-colors whitespace-nowrap">
                    {item.name}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;