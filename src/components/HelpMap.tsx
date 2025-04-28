import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";

const HelpMap: React.FC = () => {
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFindNearest = () => {
    setIsLoading(true);
    // Имитация загрузки данных
    setTimeout(() => {
      setIsLoading(false);
      alert("Функция поиска ближайшей помощи будет доступна скоро!");
    }, 1500);
  };

  const handleUseGeolocation = () => {
    if (navigator.geolocation) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`${position.coords.latitude}, ${position.coords.longitude}`);
          setIsLoading(false);
          alert("Ваше местоположение определено. Функция поиска ближайшей помощи будет доступна скоро!");
        },
        (error) => {
          setIsLoading(false);
          alert("Не удалось определить местоположение. Пожалуйста, введите адрес вручную.");
          console.error(error);
        }
      );
    } else {
      alert("Геолокация не поддерживается вашим браузером.");
    }
  };

  return (
    <Card className="sos-shadow bg-white">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center text-sos-darkGray">
          <MapPin className="h-6 w-6 mr-2 text-sos-green" />
          Найти помощь рядом
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-sos-lightGray p-4 rounded-md h-[250px] flex flex-col items-center justify-center">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-center text-large mb-2">Карта загрузится по вашему запросу</p>
            <p className="text-center text-sos-gray">Для защиты вашей конфиденциальности карта не загружается автоматически</p>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Введите ваш адрес"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-4 pl-10 text-large border border-sos-green rounded-md focus:outline-none focus:ring-2 focus:ring-sos-green"
            />
            <span className="absolute left-3 top-4">
              <Search className="h-5 w-5 text-sos-gray" />
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Button
              onClick={handleUseGeolocation}
              variant="outline"
              className="text-large py-6 border-sos-green text-sos-green hover:bg-sos-green hover:text-white"
              disabled={isLoading}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Использовать моё местоположение
            </Button>
            <Button
              onClick={handleFindNearest}
              className="text-large py-6 bg-sos-green hover:bg-sos-darkGreen text-white"
              disabled={isLoading || !location}
            >
              {isLoading ? "Загрузка..." : "Найти ближайшую помощь"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HelpMap;
