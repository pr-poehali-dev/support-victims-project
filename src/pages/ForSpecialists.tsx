import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  BookOpen,
  MessageSquare, 
  Shield, 
  HelpCircle, 
  FileText,
  HandHeart,
  Users,
  Database,
  GraduationCap,
  FileSpreadsheet,
  Download,
  ArrowDownCircle,
  StarIcon,
  BadgeCheck
} from "lucide-react";
import { Link } from "react-router-dom";

const ForSpecialists = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Обложка */}
      <section className="relative bg-[#0A2463] py-16 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  SOS Жертвы Насилия: <span className="text-[#DAA520]">Центр ресурсов для специалистов</span>
                </h1>
                <p className="text-xl md:text-2xl opacity-90">
                  Мы помогаем специалистам поддерживать жертв насилия, предоставляя знания, ресурсы и возможность объединиться.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => scrollToSection("features")}
                    className="text-large h-14 bg-[#DAA520] hover:bg-[#c99412] text-[#0A2463] font-bold"
                  >
                    <BookOpen className="mr-2 h-5 w-5" /> Изучить ресурсы
                  </Button>
                  <Button 
                    variant="outline"
                    className="h-14 text-white border-white hover:bg-white hover:text-[#0A2463]"
                    onClick={() => scrollToSection("help")}
                  >
                    <HandHeart className="mr-2 h-5 w-5" /> Как помочь
                  </Button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=1600&auto=format&fit=crop"
                alt="Рука просит о помощи" 
                className="rounded-lg shadow-xl max-w-full h-auto object-cover" 
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-[#DAA520]"
            >
              <ArrowDownCircle className="h-10 w-10" />
            </Button>
          </div>
        </div>
      </section>

      {/* 2. О нас */}
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
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-[#0A2463]">
              <CardContent className="p-6 text-center">
                <div className="bg-[#0A2463] rounded-full p-4 inline-flex mx-auto mb-4">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Конфиденциальность</h3>
                <p className="text-gray-600">Защита данных и безопасность всех взаимодействий на нашей платформе</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-[#DAA520]">
              <CardContent className="p-6 text-center">
                <div className="bg-[#DAA520] rounded-full p-4 inline-flex mx-auto mb-4">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Экспертиза</h3>
                <p className="text-gray-600">Материалы, проверенные ведущими специалистами в области помощи жертвам насилия</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-[#0A2463]">
              <CardContent className="p-6 text-center">
                <div className="bg-[#0A2463] rounded-full p-4 inline-flex mx-auto mb-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Сотрудничество</h3>
                <p className="text-gray-600">Объединение усилий специалистов для развития лучших практик помощи</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Ключевые особенности */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Ключевые особенности</h2>
            <p className="text-large text-gray-700 max-w-3xl mx-auto">
              Наша платформа предоставляет инструменты и ресурсы, необходимые для эффективной поддержки жертв насилия
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4 text-[#0A2463]">
                    <MessageSquare className="h-8 w-8 mr-3" />
                    <h3 className="text-xl font-semibold">Форум экспертов</h3>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Общайтесь с коллегами, делитесь знаниями и обсуждайте лучшие практики в профессиональном сообществе.
                  </p>
                  <Button 
                    className="w-full bg-[#0A2463] hover:bg-[#083178] text-white"
                  >
                    Присоединиться к форуму
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4 text-[#0A2463]">
                    <FileText className="h-8 w-8 mr-3" />
                    <h3 className="text-xl font-semibold">Законодательная основа</h3>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Будьте в курсе всех важных законов и правовых норм, касающихся защиты жертв насилия.
                  </p>
                  <Button 
                    className="w-full bg-[#0A2463] hover:bg-[#083178] text-white"
                  >
                    Изучить законодательство
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4 text-[#0A2463]">
                    <BookOpen className="h-8 w-8 mr-3" />
                    <h3 className="text-xl font-semibold">Профессиональные материалы</h3>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Доступ к статьям, исследованиям и учебным пособиям по работе с жертвами различных видов насилия.
                  </p>
                  <Button 
                    className="w-full bg-[#0A2463] hover:bg-[#083178] text-white"
                  >
                    Просмотреть материалы
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4 text-[#0A2463]">
                    <Database className="h-8 w-8 mr-3" />
                    <h3 className="text-xl font-semibold">База данных НПО</h3>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Найдите надежные организации, которые помогают жертвам насилия в различных регионах страны.
                  </p>
                  <Button 
                    className="w-full bg-[#0A2463] hover:bg-[#083178] text-white"
                  >
                    Найти организации
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] md:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4 text-[#DAA520]">
                    <HandHeart className="h-8 w-8 mr-3" />
                    <h3 className="text-xl font-semibold">Присоединяйтесь</h3>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Помогите нам пожертвованием или станьте волонтером. Вместе мы можем сделать больше для жертв насилия.
                  </p>
                  <Button 
                    className="w-full bg-[#DAA520] hover:bg-[#c99412] text-white"
                    onClick={() => scrollToSection("help")}
                  >
                    Узнать как помочь
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Как помочь */}
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
          </div>
        </div>
      </section>

      {/* 5. Ресурсы */}
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
              <h3 className="text-2xl font-bold text-[#0A2463] mb-4">Законодательная база</h3>
              <p className="text-gray-700 mb-6">
                Важнейшие законы и нормативные акты, регулирующие вопросы защиты жертв насилия
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4 border border-gray-200 hover:border-[#0A2463] transition-colors">
                  <div className="flex items-center">
                    <FileSpreadsheet className="h-8 w-8 text-[#0A2463] mr-3" />
                    <div>
                      <h4 className="font-semibold">Уголовный кодекс РФ</h4>
                      <p className="text-sm text-gray-600">Статьи, касающиеся насильственных преступлений</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full mt-2 text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" /> Скачать PDF
                  </Button>
                </Card>
                
                <Card className="p-4 border border-gray-200 hover:border-[#0A2463] transition-colors">
                  <div className="flex items-center">
                    <FileSpreadsheet className="h-8 w-8 text-[#0A2463] mr-3" />
                    <div>
                      <h4 className="font-semibold">Семейный кодекс РФ</h4>
                      <p className="text-sm text-gray-600">Защита прав детей и супругов</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full mt-2 text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" /> Скачать PDF
                  </Button>
                </Card>
                
                <Card className="p-4 border border-gray-200 hover:border-[#0A2463] transition-colors">
                  <div className="flex items-center">
                    <FileSpreadsheet className="h-8 w-8 text-[#0A2463] mr-3" />
                    <div>
                      <h4 className="font-semibold">ФЗ «О полиции»</h4>
                      <p className="text-sm text-gray-600">Обязанности полиции по защите граждан</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full mt-2 text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" /> Скачать PDF
                  </Button>
                </Card>
                
                <Card className="p-4 border border-gray-200 hover:border-[#0A2463] transition-colors">
                  <div className="flex items-center">
                    <FileSpreadsheet className="h-8 w-8 text-[#0A2463] mr-3" />
                    <div>
                      <h4 className="font-semibold">ФЗ «Об основах социального обслуживания»</h4>
                      <p className="text-sm text-gray-600">Права на социальную защиту</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full mt-2 text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" /> Скачать PDF
                  </Button>
                </Card>
              </div>
              
              <div className="mt-6 text-center">
                <Button className="bg-[#0A2463] hover:bg-[#083178] text-white">
                  Просмотреть все законодательные акты
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="methods" className="border rounded-lg shadow-sm p-6 bg-white">
              <h3 className="text-2xl font-bold text-[#0A2463] mb-4">Методы психологической помощи</h3>
              <p className="text-gray-700 mb-6">
                Доказанные методы, исследования и лучшие практики для специалистов
              </p>
              
              <div className="space-y-6">
                <Card className="p-5 border border-gray-200 hover:border-[#0A2463] transition-colors">
                  <h4 className="font-semibold text-lg flex items-center text-[#0A2463]">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Когнитивно-поведенческая терапия для работы с травмами
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Практическое руководство по применению методов КПТ в работе с жертвами насилия. Включает протоколы сессий, рабочие листы и инструменты оценки.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500">Обновлено: Март 2025</span>
                    <Button variant="outline" className="text-[#0A2463] border-[#0A2463]">
                      Скачать материалы
                    </Button>
                  </div>
                </Card>
                
                <Card className="p-5 border border-gray-200 hover:border-[#0A2463] transition-colors">
                  <h4 className="font-semibold text-lg flex items-center text-[#0A2463]">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Технологии кризисного вмешательства
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Методы быстрой оценки безопасности и стабилизации состояния клиента в кризисной ситуации. Пошаговые алгоритмы работы для специалистов первой линии.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500">Обновлено: Февраль 2025</span>
                    <Button variant="outline" className="text-[#0A2463] border-[#0A2463]">
                      Скачать материалы
                    </Button>
                  </div>
                </Card>
                
                <Card className="p-5 border border-gray-200 hover:border-[#0A2463] transition-colors">
                  <h4 className="font-semibold text-lg flex items-center text-[#0A2463]">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Техники для работы с детьми, пережившими насилие
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Специализированные методики для работы с детьми разных возрастов. Включает игровую терапию, арт-терапию и терапию, основанную на привязанности.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500">Обновлено: Апрель 2025</span>
                    <Button variant="outline" className="text-[#0A2463] border-[#0A2463]">
                      Скачать материалы
                    </Button>
                  </div>
                </Card>
              </div>
              
              <div className="mt-6 text-center">
                <Button className="bg-[#0A2463] hover:bg-[#083178] text-white">
                  Просмотреть все методические материалы
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="volunteer" className="border rounded-lg shadow-sm p-6 bg-white">
              <h3 className="text-2xl font-bold text-[#0A2463] mb-4">Как стать волонтером</h3>
              <p className="text-gray-700 mb-6">
                Пошаговое руководство, требования и контактная информация
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#0A2463] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-[#0A2463]">Заполните анкету</h4>
                    <p className="text-gray-600 mt-1">
                      Расскажите о своем опыте работы, профессиональных навыках и причинах, по которым вы хотите помогать
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#0A2463] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-[#0A2463]">Пройдите собеседование</h4>
                    <p className="text-gray-600 mt-1">
                      Мы проводим онлайн-интервью со всеми кандидатами, чтобы лучше понять ваши навыки и определить оптимальную сферу участия
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#0A2463] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-[#0A2463]">Пройдите обучение</h4>
                    <p className="text-gray-600 mt-1">
                      Все волонтеры проходят бесплатное обучение по основам работы с жертвами насилия и специфике нашей организации
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#DAA520] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-[#0A2463]">Присоединяйтесь к команде</h4>
                    <p className="text-gray-600 mt-1">
                      После успешного обучения вы становитесь частью нашей команды волонтеров и можете выбирать проекты для участия
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button className="bg-[#DAA520] hover:bg-[#c99412] text-white">
                  Заполнить анкету волонтера
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Социальные доказательства */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Нам доверяют профессионалы</h2>
            <p className="text-large text-gray-700 max-w-3xl mx-auto">
              Отзывы специалистов, которые используют нашу платформу в своей работе
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Елена Петрова",
                role: "Клинический психолог, г. Москва",
                quote: "Ресурсы, представленные на платформе, значительно повысили эффективность моей работы с жертвами насилия. Особенно ценны материалы по когнитивно-поведенческой терапии и протоколы кризисного вмешательства.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&auto=format&fit=crop&q=80"
              },
              {
                name: "Михаил Соколов",
                role: "Юрист правозащитной организации, г. Санкт-Петербург",
                quote: "Благодаря базе данных НПО, я могу быстро найти подходящую организацию для перенаправления клиентов. Юридические материалы постоянно обновляются и содержат актуальные изменения в законодательстве.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop&q=80"
              },
              {
                name: "Анна Иванова",
                role: "Социальный работник кризисного центра, г. Екатеринбург",
                quote: "Форум специалистов стал для меня настоящей поддержкой. Возможность обсудить сложные случаи с коллегами и получить супервизию бесценна, особенно для специалистов из небольших городов.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&auto=format&fit=crop&q=80"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{testimonial.role}</p>
                    <div className="flex text-[#DAA520] mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 italic">{testimonial.quote}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Card className="p-6 shadow-md bg-gray-50 max-w-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <BadgeCheck className="text-[#0A2463] h-6 w-6 mr-2" />
                  <h3 className="font-bold text-lg text-[#0A2463]">Наши партнеры</h3>
                </div>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 items-center">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex justify-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400 text-xs">Логотип</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Подвал */}
      <footer className="bg-[#0A2463] text-white py-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">О платформе</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-[#DAA520] transition-colors">Главная</Link></li>
                <li><a href="#about" className="hover:text-[#DAA520] transition-colors">О нас</a></li>
                <li><a href="#resources" className="hover:text-[#DAA520] transition-colors">Ресурсы</a></li>
                <li><a href="#help" className="hover:text-[#DAA520] transition-colors">Как помочь</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Ресурсы</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#DAA520] transition-colors">Библиотека материалов</a></li>
                <li><a href="#" className="hover:text-[#DAA520] transition-colors">Форум специалистов</a></li>
                <li><a href="#" className="hover:text-[#DAA520] transition-colors">База данных НПО</a></li>
                <li><a href="#" className="hover:text-[#DAA520] transition-colors">Законодательство</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Для специалистов</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#DAA520] transition-colors">Стать волонтером</a></li>
                <li><a href="#" className="hover:text-[#DAA520] transition-colors">Тренинги и вебинары</a></li>
                <li><a href="#" className="hover:text-[#DAA520] transition-colors">Супервизии</a></li>
                <li><a href="#" className="hover:text-[#DAA520] transition-colors">Партнерские программы</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-[#DAA520]" />
                  <a href="mailto:info@sos-specialists.org" className="hover:text-[#DAA520] transition-colors">
                    info@sos-specialists.org
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-[#DAA520]" />
                  <a href="tel:+78001234567" className="hover:text-[#DAA520] transition-colors">
                    8-800-123-4567
                  </a>
                </li>
              </ul>
              
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Мы в социальных сетях</h4>
                <div className="flex space-x-4">
                  {["Facebook", "Twitter", "LinkedIn"].map(social => (
                    <a
                      key={social}
                      href="#"
                      className="hover:text-[#DAA520] transition-colors"
                      aria-label={social}
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/20 text-center">
            <p className="text-sm opacity-80">
              SOS Жертвы Насилия © 2025. Все права защищены.
            </p>
            <div className="flex justify-center space-x-4 mt-4 text-sm opacity-70">
              <a href="#" className="hover:text-[#DAA520] transition-colors">Правила сайта</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-[#DAA520] transition-colors">Политика конфиденциальности</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-[#DAA520] transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ForSpecialists;
