import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const HelpSection: React.FC = () => {
  return (
    <section id="help" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <Heart className="h-16 w-16 mx-auto mb-4 text-[#DAA520]" />
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Как помочь</h2>
          <p className="text-large text-gray-700 max-w-3xl mx-auto">
            Вы можете внести свой вклад в нашу работу различными способами
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <DonationCard />
          <VolunteerCard />
        </div>
      </div>
    </section>
  );
};

const DonationCard: React.FC = () => {
  return (
    <Card className="shadow-lg border-0 overflow-hidden">
      <div className="bg-[#0A2463] p-4 text-white">
        <h3 className="text-2xl font-bold">Сделать пожертвование</h3>
      </div>
      <CardContent className="p-6">
        <div className="space-y-6">
          <p className="text-gray-700">
            Ваше пожертвование помогает нам:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#DAA520] mr-2">✓</span>
              Создавать новые образовательные материалы для специалистов
            </li>
            <li className="flex items-start">
              <span className="text-[#DAA520] mr-2">✓</span>
              Организовывать тренинги и вебинары с ведущими экспертами
            </li>
            <li className="flex items-start">
              <span className="text-[#DAA520] mr-2">✓</span>
              Поддерживать работу платформы и развивать новые функции
            </li>
          </ul>
          
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {[1000, 3000, 5000, 10000].map(amount => (
              <Button 
                key={amount}
                variant="outline"
                className="text-[#0A2463] border-[#0A2463] hover:bg-[#0A2463] hover:text-white"
              >
                {amount} ₽
              </Button>
            ))}
          </div>
          
          <Button 
            className="w-full bg-[#DAA520] hover:bg-[#c99412] text-white font-medium py-3 mt-4"
          >
            Сделать пожертвование
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const VolunteerCard: React.FC = () => {
  return (
    <Card className="shadow-lg border-0 overflow-hidden">
      <div className="bg-[#0A2463] p-4 text-white">
        <h3 className="text-2xl font-bold">Стать волонтером</h3>
      </div>
      <CardContent className="p-6">
        <div className="space-y-6">
          <p className="text-gray-700">
            Мы ищем специалистов в разных областях:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#DAA520] mr-2">✓</span>
              Юристы для создания правовых материалов и консультаций
            </li>
            <li className="flex items-start">
              <span className="text-[#DAA520] mr-2">✓</span>
              Психологи и психотерапевты для методических разработок
            </li>
            <li className="flex items-start">
              <span className="text-[#DAA520] mr-2">✓</span>
              Социальные работники для развития базы данных ресурсов
            </li>
            <li className="flex items-start">
              <span className="text-[#DAA520] mr-2">✓</span>
              IT-специалисты для улучшения платформы и создания новых инструментов
            </li>
          </ul>
          
          <Button 
            className="w-full bg-[#DAA520] hover:bg-[#c99412] text-white font-medium py-3 mt-4"
          >
            Стать волонтером
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HelpSection;
