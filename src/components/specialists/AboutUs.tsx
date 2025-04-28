import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, GraduationCap, Users } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 mx-auto mb-4 text-[#0A2463]" />
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">О нас</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-large text-gray-700 mb-6">
              Наша миссия — создать безопасную и надежную платформу для специалистов, работающих с жертвами насилия. 
              Мы объединяем экспертов, предоставляем проверенные ресурсы и создаем сообщество взаимной поддержки.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <ValueCard 
            title="Конфиденциальность" 
            description="Защита данных и безопасность всех взаимодействий на нашей платформе"
            icon={<Shield className="h-10 w-10 text-white" />}
            borderColor="border-t-[#0A2463]"
            bgColor="bg-[#0A2463]"
          />
          
          <ValueCard 
            title="Экспертиза" 
            description="Материалы, проверенные ведущими специалистами в области помощи жертвам насилия"
            icon={<GraduationCap className="h-10 w-10 text-white" />}
            borderColor="border-t-[#DAA520]"
            bgColor="bg-[#DAA520]"
          />
          
          <ValueCard 
            title="Сотрудничество" 
            description="Объединение усилий специалистов для развития лучших практик помощи"
            icon={<Users className="h-10 w-10 text-white" />}
            borderColor="border-t-[#0A2463]"
            bgColor="bg-[#0A2463]"
          />
        </div>
      </div>
    </section>
  );
};

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  borderColor: string;
  bgColor: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon, borderColor, bgColor }) => {
  return (
    <Card className={`shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 ${borderColor}`}>
      <CardContent className="p-6 text-center">
        <div className={`${bgColor} rounded-full p-4 inline-flex mx-auto mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AboutUs;
