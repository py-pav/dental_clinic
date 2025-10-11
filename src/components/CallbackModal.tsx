import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import InputMask from "react-input-mask";

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CallbackModal = ({ isOpen, onClose }: CallbackModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const phoneDigits = phone.replace(/\D/g, "");
    const isPhoneValid = phoneDigits.length === 11;
    const isNameValid = name.trim().length > 0;
    setIsValid(isPhoneValid && isNameValid);
  }, [name, phone]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValid) return;

    // Здесь должна быть отправка email на esterio-stom@yandex.ru
    // В рамках данного проекта показываем toast уведомление
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");

    setName("");
    setPhone("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Заказать обратный звонок
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="name">Ваше имя</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите ваше имя"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="phone">Номер телефона</Label>
            <InputMask
              mask="+7 (999) 999 99 99"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            >
              {/* @ts-ignore */}
              {(inputProps: any) => (
                <Input
                  {...inputProps}
                  id="phone"
                  type="tel"
                  placeholder="+7 (___) ___ __ __"
                  className="mt-1"
                />
              )}
            </InputMask>
          </div>
          <Button
            type="submit"
            disabled={!isValid}
            className="w-full"
          >
            Отправить
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CallbackModal;
