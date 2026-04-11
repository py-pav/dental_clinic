import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import FloatingPhoneButton from "@/components/FloatingPhoneButton";


const Licenses = () => {

  const handleDownload = () => {
      const link = document.createElement('a');
      link.href = '/src/assets/license.pdf';
      link.download = 'Л041-01197-26-02869397.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };
  return (
    <div className="py-5">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="section-title">Лицензия</h1>
        <Card className="p-8 space-y-6">
          <div className="space-y-4">
            {/* Миниатюра документа */}
            <div className="flex justify-center">
              <div className="border-4 border-primary/20 rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer" onClick={handleDownload}>
                <div className="bg-card p-8 w-[240px] h-[300px] flex flex-col items-center justify-center space-y-4">
                  <div className="text-6xl">📄</div>
                  <p className="text-center font-semibold">Лицензия №Л041-01197-26/02869397 на осуществление медицинской деятельности</p>
                  <p className="text-xs text-muted-foreground">Скачать PDF</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t">
            <a
              href="https://roszdravnadzor.gov.ru/services/licenses?qrguid=195d06487318a95d586b8956e599fbab"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-primary hover:underline font-medium"
            >
              <ExternalLink className="h-5 w-5" />Лицензия на сайте Федеральной Службы по надзору в сфере здравоохранения
            </a>
          </div>
        </Card>
      </div>
      <FloatingPhoneButton />
    </div>
  );
};

export default Licenses;
