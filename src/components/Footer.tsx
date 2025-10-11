import toothLogo from "@/assets/tooth-logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex-shrink-0">
            <img src={toothLogo} alt="Эстерио" className="h-16 w-auto" />
          </div>
          <div className="text-center md:text-right space-y-2">
            <p className="text-sm md:text-base">
              г. Ставрополь, улица Мира, 460/3
            </p>
            <p className="text-base md:text-lg font-semibold">
              8 (994) 305 05 05
            </p>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-primary-foreground/20 text-center">
          <p className="text-sm flex items-center justify-center gap-1">
            <span>©</span>
            <span>{new Date().getFullYear()} ООО "Эстерио". Все права защищены.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
