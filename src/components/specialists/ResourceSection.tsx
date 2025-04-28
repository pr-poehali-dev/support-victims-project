import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileSpreadsheet, Download } from "lucide-react";

const ResourceSection: React.FC = () => {
  return (
    <section id="resources" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <BookOpen className="h-16 w-16 mx-auto mb-4 text-[#0A2463]" />
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Профессиональные ресурсы</h2>
          <p className="text-large text-gray-700 max-w-3xl mx-auto">
            Наша коллекция материалов, исследований и руководств для специалистов
          </p>
        </div>
        
        <Tabs defaultValue="laws" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            <TabsTrigger value="laws" className="text-large py-3">Законодательство</TabsTrigger>
            <TabsTrigger value="methods" className="text-large py-3">Методы помощи</TabsTrigger>
            <TabsTrigger value="volunteer" className="text-large py-3">Волонтерство</TabsTrigger>
          </TabsList>
          
          <TabsContent value="laws" className="border rounded-lg shadow-sm p-6 bg-white">
            <LawsTabContent />
          </TabsContent>
          
          <TabsContent value="methods" className="border rounded-lg shadow-sm p-6 bg-white">
            <MethodsTabContent />
          </TabsContent>
          
          <TabsContent value="volunteer" className="border rounded-lg shadow-sm p-6 bg-white">
            <VolunteerTabContent />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const LawsTabContent: React.FC = () => {
  const laws = [
    {
      title: "Уголовный кодекс РФ",
      description: "Статьи, касающиеся насильственных преступлений"
    },
    {
      title: "Семейный кодекс РФ",
      description: "Защита прав детей и супругов"
    },
    {
      title: "ФЗ «О полиции»",
      description: "Обязанности полиции по защите граждан"
    },
    {
      title: "ФЗ «Об основах социального обслуживания»",
      description: "Права на социальную защиту"
    }
  ];

  return (
    <>
      <h3 className="text-2xl font-bold text-[#0A2463] mb-4">Законодательная база</h3>
      <p className="text-gray-700 mb-6">
        Важнейшие законы и нормативные акты, регулирующие вопросы защиты жертв насилия
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {laws.map((law, index) => (
          <Card key={index} className="p-4 border border-gray-200 hover:border-[#0A2463] transition-colors">
            <div className="flex items-center">
              <FileSpreadsheet className="h-8 w-8 text-[#0A2463] mr-3" />
              <div>
                <h4 className="font-semibold">{law.title}</h4>
                <p className="text-sm text-gray-600">{law.description}</p>
              </div>
            </div>
            <Button variant="ghost" className="w-full mt-2 text-[#0A2463]">
              <Download className="mr-2 h-4 w-4" /> Скачать PDF
            </Button>
          </Card>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Button className="bg-[#0A2463] hover:bg-[#083178] text-white">
          Просмотреть все законодательные акты
        </Button>
      </div>
    </>
  );
};

const MethodsTabContent: React.FC = () => {
  const methods = [
    {
      title: "Когнитивно-поведенческая терапия для работы с травмами",
      description: "Практическое руководство по применению методов КПТ в работе с жертвами насилия. Включает протоколы сессий, рабочие листы и инструменты оценки.",
      updated: "Март 2025"
    },
    {
      title: "Технологии кризисного вмешательства",
      description: "Методы быстрой оценки безопасности и стабилизации состояния клиента в кризисной ситуации. Пошаговые алгоритмы работы для специалистов первой линии.",
      updated: "Февраль 2025"
    },
    {
      title: "Техники для работы с детьми, пережившими насилие",
      description: "Специализированные методики для работы с детьми разных возрастов. Включает игровую терапию, арт-терапию и терапию, основанную на привязанности.",
      updated: "Апрель 2025"
    }
  ];

  return (
    <>
      <h3 className="text-2xl font-bold text-[#0A2463] mb-4">Методы психологической помощи</h3>
      <p className="text-gray-700 mb-6">
        Доказанные методы, исследования и лучшие практики для специалистов
      </p>
      
      <div className="space-y-6">
        {methods.map((method, index) => (
          <Card key={index} className="p-5 border border-gray-200 hover:border-[#0A2463] transition-colors">
            <h4 className="font-semibold text-lg flex items-center text-[#0A2463]">
              <BookOpen className="h-5 w-5 mr-2" />
              {method.title}
            </h4>
            <p className="text-gray-600 mt-2">{method.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-500">Обновлено: {method.updated}</span>
              <Button variant="outline" className="text-[#0A2463] border-[#0A2463]">
                Скачать материалы
              </Button>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Button className="bg-[#0A2463] hover:bg-[#083178] text-white">
          Просмотреть все методические материалы
        </Button>
      </div>
    </>
  );
};

const VolunteerTabContent: React.FC = () => {
  const steps = [
    {
      title: "Заполните анкету",
      description: "Расскажите о своем опыте работы, профессиональных навыках и причинах, по которым вы хотите помогать"
    },
    {
      title: "Пройдите собеседование",
      description: "Мы проводим онлайн-интервью со всеми кандидатами, чтобы лучше понять ваши навыки и определить оптимальную сферу участия"
    },
    {
      title: "Пройдите обучение",
      description: "Все волонтеры проходят бесплатное обучение по основам работы с жертвами насилия и специфике нашей организации"
    },
    {
      title: "Присоединяйтесь к команде",
      description: "После успешного обучения вы становитесь частью нашей команды волонтеров и можете выбирать проекты для участия",
      highlight: true
    }
  ];

  return (
    <>
      <h3 className="text-2xl font-bold text-[#0A2463] mb-4">Как стать волонтером</h3>
      <p className="text-gray-700 mb-6">
        Пошаговое руководство, требования и контактная информация
      </p>
      
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start">
            <div className={`flex-shrink-0 ${step.highlight ? "bg-[#DAA520]" : "bg-[#0A2463]"} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4`}>
              {index + 1}
            </div>
            <div>
              <h4 className="font-semibold text-lg text-[#0A2463]">{step.title}</h4>
              <p className="text-gray-600 mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Button className="bg-[#DAA520] hover:bg-[#c99412] text-white">
          Заполнить анкету волонтера
        </Button>
      </div>
    </>
  );
};

export default ResourceSection;
