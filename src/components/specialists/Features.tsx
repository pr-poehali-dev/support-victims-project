import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, FileText, BookOpen, Database, HandHeart } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  onClick?: () => void;
  color?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  buttonText, 
  onClick,
  color = "#0A2463" 
}) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="flex items-center mb-4 text-[#0A2463]">
            {icon}
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <p className="text-gray-600 mb-6 flex-grow">{description}</p>
          <Button 
            onClick={onClick}
            className={`w-full ${color === "#DAA520" 
              ? "bg-[#DAA520] hover:bg-[#c99412]" 
              : "bg-[#0A2463] hover:bg-[#083178]"} text-white`}
          >
            {buttonText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

interface FeaturesProps {
  scrollToSection: (id: string) => void;
}

const Features: React.FC<FeaturesProps> = ({ scrollToSection }) => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Ключевые особенности</h2>
          <p className="text-large text-gray-700 max-w-3xl mx-auto">
            Наша платформа предоставляет инструменты и ресурсы, необходимые для эффективной поддержки жертв насилия
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            title="Форум экспертов"
            description="Общайтесь с коллегами, делитесь знаниями и обсуждайте лучшие практики в профессиональном сообществе."
            icon={<MessageSquare className="h-8 w-8 mr-3" />}
            buttonText="Присоединиться к форуму"
          />
          
          <FeatureCard 
            title="Законодательная основа"
            description="Будьте в курсе всех важных законов и правовых норм, касающихся защиты жертв насилия."
            icon={<FileText className="h-8 w-8 mr-3" />}
            buttonText="Изучить законодательство"
          />
          
          <FeatureCard 
            title="Профессиональные материалы"
            description="Доступ к статьям, исследованиям и учебным пособиям по работе с жертвами различных видов насилия."
            icon={<BookOpen className="h-8 w-8 mr-3" />}
            buttonText="Просмотреть материалы"
          />
          
          <FeatureCard 
            title="База данных НПО"
            description="Найдите надежные организации, которые помогают жертвам насилия в различных регионах страны."
            icon={<Database className="h-8 w-8 mr-3" />}
            buttonText="Найти организации"
          />
          
          <FeatureCard 
            title="Присоединяйтесь"
            description="Помогите нам пожертвованием или станьте волонтером. Вместе мы можем сделать больше для жертв насилия."
            icon={<HandHeart className="h-8 w-8 mr-3" />}
            buttonText="Узнать как помочь"
            onClick={() => scrollToSection("help")}
            color="#DAA520"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
