import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";

const PriceList = () => {
  useEffect(() => {window.scrollTo(0, 0);}, []);
  const prices = [
    { service: "Прием (осмотр, консультация) врача-стоматолога первичный", price: "300 ₽" },
    { service: "Прием (осмотр, консультация) врача-стоматолога повторный", price: "500 ₽" },
    { service: "Инфильтрационная анестезия", price: "800 ₽" },
    { service: "Наложение кофердама (оптрагейта)", price: "700 ₽" },
    { service: "Устранение дефекта пломбы (шлифовка, полировка)", price: "300 ₽" },
    { service: "Восстановление зуба постоянной безметалловой коронкой", price: "от 11 000 ₽" },
    { service: "Восстановление зуба временной коронкой", price: "от 4 000 ₽" },
    { service: "Хирургический шаблон для имплантации", price: "5 000 ₽" },
    { service: "Снятие цифрового оттиска с одной челюсти", price: "2 500 ₽" },
    { service: "Фиксация временной коронки", price: "250 ₽" },
    { service: "Фиксация коронки(вкладки) на постоянный цемент", price: "от 1 000 ₽" },
    { service: "Восстановление зуба с использованием материалов из фотополимеров", price: "от 3 500 ₽" },
    { service: "Временное пломбирование лекарственным препаратом корневых каналов ", price: "от 450 ₽" },
    { service: "Профессиональная гигиена полости рта", price: "от 2 300 ₽" },
    { service: "Внутрикостная дентальная имплантация", price: "31 700 ₽" },
    { service: "Удаление постоянного зуба", price: "от 3 200 ₽" },
    { service: "Пластика мягких тканей вокруг одного имплантата", price: "16 000 ₽" },
  ];

  return (
    <div className="py-5">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Прайс-лист</h1>
        
        <Card className="overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold text-lg">Услуга</TableHead>
                <TableHead className="text-right font-bold text-lg">Стоимость</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {prices.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.service}</TableCell>
                  <TableCell className="text-right font-semibold">{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <p className="mt-6 text-center text-muted-foreground">
          * Окончательная стоимость определяется после консультации врача
        </p>
      </div>
    </div>
  );
};

export default PriceList;
