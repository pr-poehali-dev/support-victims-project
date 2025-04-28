import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import EmergencyButton from "@/components/EmergencyButton";
import ResourceCard from "@/components/ResourceCard";
import HelpMap from "@/components/HelpMap";
import VoiceAssistant from "@/components/VoiceAssistant";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Phone, 
  Mail, 
  MessageSquare, 
  Shield, 
  HelpCircle,
  HandHeart,
  MapPin,
  ArrowDownCircle,
  GraduationCap
} from "lucide-react";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Фиксированная кнопка экстренного вызова */}
      <div className="fixed bottom-4 right-4 z-50">
        <EmergencyButton />
      </div>
      
      {/* 1. Заглавный баннер */}
      <section className="relative bg-sos-cream py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-sos-darkGray leading-tight">
                  SOS Жертвам Насилия: <span className="text-sos-green">Найдите Помощь Сейчас</span>
                </h1>
                <p className="text-xl md:text-2xl text-sos-gray">
                  Мы здесь, чтобы поддержать вас в трудную минуту
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => scrollToSection("help-map")} 
                    className="text-large h-14 bg-sos-green hover:bg-sos-darkGreen text-white"
                  >
                    <MapPin className="mr-2 h-5 w-5" /> Найти помощь сейчас
                  </Button>
                  <EmergencyButton 
                    variant="large"
                    label="Экстренный вызов 112"
                    className="h-14"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1518717202715-9fa9d099f58a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Рука помощи" 
                className="rounded-lg sos-shadow max-w-full h-auto" 
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("about")}
              className="text-sos-green hover:text-sos-darkGreen"
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
            <Shield className="h-16 w-16 mx-auto mb-4 text-sos-green" />
            <h2 className="text-3xl font-bold text-sos-darkGray mb-4">О нас</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-large text-sos-gray mb-6">
                Наша миссия — обеспечить безопасное пространство и ресурсы для лиц, пострадавших от насилия. 
                Мы соединяем вас с необходимой помощью, будь то убежище, юридическая поддержка, медицинская помощь или просто безопасное место.
              </p>
              <div className="p-4 bg-sos-lightGray rounded-lg sos-shadow">
                <p className="text-large font-medium text-sos-darkGray">
                  <strong>Все ваши действия на сайте анонимны и конфиденциальны.</strong> 
                  Мы не отслеживаем и не храним вашу личную информацию без вашего согласия.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="sos-shadow hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-sos-green rounded-full p-4 inline-flex mx-auto mb-4">
                  <HelpCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Срочная помощь</h3>
                <p className="text-sos-gray text-large">Экстренные ресурсы для тех, кто нуждается в немедленной помощи</p>
              </CardContent>
            </Card>
            
            <Card className="sos-shadow hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-sos-green rounded-full p-4 inline-flex mx-auto mb-4">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
                <p className="text-sos-gray text-large">Гарантия анонимности и конфиденциальности при использовании наших сервисов</p>
              </CardContent>
            </Card>
            
            <Card className="sos-shadow hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-sos-green rounded-full p-4 inline-flex mx-auto mb-4">
                  <HandHeart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Поддержка</h3>
                <p className="text-sos-gray text-large">Широкий спектр ресурсов для длительной поддержки и восстановления</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Ссылка на страницу для специалистов */}
          <div className="mt-12 text-center">
            <Card className="sos-shadow bg-sos-lightGray mx-auto max-w-2xl">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <GraduationCap className="h-12 w-12 text-sos-green" />
                  <h3 className="text-2xl font-semibold text-sos-darkGray">Вы специалист в сфере помощи жертвам насилия?</h3>
                  <p className="text-sos-gray text-large">
                    Посетите наш центр ресурсов для специалистов, где вы найдете профессиональные материалы, 
                    сможете присоединиться к сообществу и получить доступ к специализированным инструментам.
                  </p>
                  <Link to="/specialists">
                    <Button className="bg-sos-green hover:bg-sos-darkGreen text-white text-large">
                      <GraduationCap className="mr-2 h-5 w-5" /> Перейти в центр для специалистов
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Карта и поиск помощи */}
      <section id="help-map" className="py-16 bg-sos-lightGray">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sos-darkGray mb-4">Найдите помощь рядом с вами</h2>
            <p className="text-large text-sos-gray max-w-3xl mx-auto">
              Используйте карту, чтобы найти ближайшие центры помощи, приюты, бесплатные столовые и другие необходимые ресурсы
            </p>
          </div>
          
          <HelpMap />
        </div>
      </section>

      {/* 4. Голосовой помощник */}
      <section id="voice-assistant" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sos-darkGray mb-4">Голосовой помощник</h2>
            <p className="text-large text-sos-gray max-w-3xl mx-auto">
              Если вам сложно читать или использовать сайт, воспользуйтесь голосовым помощником для управления
            </p>
          </div>
          
          <VoiceAssistant />
        </div>
      </section>

      {/* 5. Ресурсы */}
      <section id="resources" className="py-16 bg-sos-lightGray">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sos-darkGray mb-4">Полезные ресурсы</h2>
            <p className="text-large text-sos-gray max-w-3xl mx-auto">
              Список организаций и служб помощи, которые могут оказать вам поддержку
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              title="Горячая линия по вопросам насилия" 
              description="Круглосуточная поддержка для жертв насилия любого вида"
              phone="8-800-123-4567"
              website="https://example.com"
              type="hotline"
            />
            
            <ResourceCard 
              title="Кризисный центр помощи женщинам" 
              description="Временное убежище и психологическая поддержка для женщин"
              phone="8-495-123-4567"
              address="г. Москва, ул. Примерная, д. 123"
              website="https://example.com"
              type="shelter"
            />
            
            <ResourceCard 
              title="Бесплатная юридическая помощь" 
              description="Консультации по правовым вопросам и помощь с документами"
              phone="8-499-123-4567"
              address="г. Москва, ул. Юридическая, д. 45"
              website="https://example.com"
              type="legal"
            />
            
            <ResourceCard 
              title="Столовая «Добрые руки»" 
              description="Бесплатное горячее питание для нуждающихся"
              address="г. Москва, ул. Хлебная, д. 78"
              type="food"
            />
            
            <ResourceCard 
              title="Травмпункт городской больницы" 
              description="Экстренная медицинская помощь без документов"
              phone="8-495-123-7890"
              address="г. Москва, ул. Медицинская, д. 10"
              type="medical"
            />
            
            <ResourceCard 
              title="Полиция - экстренный вызов" 
              description="При непосредственной угрозе жизни и здоровью"
              phone="102"
              type="hotline"
            />
          </div>
        </div>
      </section>

      {/* 6. Контактная информация */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sos-darkGray mb-4">Связаться с нами</h2>
            <p className="text-large text-sos-gray max-w-3xl mx-auto">
              Если у вас возникли вопросы или предложения, вы можете связаться с нами следующими способами
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="sos-shadow">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-sos-green rounded-full p-3 inline-flex mx-auto mb-3">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                    <a href="tel:+78001234567" className="text-large text-sos-green hover:text-sos-darkGreen">
                      8-800-123-4567
                    </a>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-sos-green rounded-full p-3 inline-flex mx-auto mb-3">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <a href="mailto:help@sos-help.org" className="text-large text-sos-green hover:text-sos-darkGreen">
                      help@sos-help.org
                    </a>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-sos-green rounded-full p-3 inline-flex mx-auto mb-3">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Чат</h3>
                    <Button 
                      variant="outline" 
                      className="text-sos-green border-sos-green hover:bg-sos-green hover:text-white"
                      onClick={() => alert("Функция чата будет доступна в ближайшее время")}
                    >
                      Начать чат
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Пожертвования */}
      <section id="donations" className="py-16 bg-sos-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <Heart className="h-16 w-16 mx-auto mb-4 text-sos-green" />
            <h2 className="text-3xl font-bold text-sos-darkGray mb-4">Поддержите нашу работу</h2>
            <p className="text-large text-sos-gray max-w-3xl mx-auto">
              Ваши пожертвования помогают нам продолжать нашу работу и оказывать поддержку тем, кто в ней нуждается
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="sos-shadow">
              <CardContent className="p-6">
                <div className="text-center space-y-6">
                  <p className="text-large text-sos-darkGray">
                    Выберите сумму пожертвования или введите свою
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    {[100, 200, 500, 1000].map(amount => (
                      <Button 
                        key={amount}
                        variant="outline"
                        className="text-sos-green border-sos-green hover:bg-sos-green hover:text-white py-6 px-8 text-xl"
                      >
                        {amount} ₽
                      </Button>
                    ))}
                  </div>
                  
                  <div className="relative max-w-md mx-auto">
                    <input
                      type="number"
                      placeholder="Другая сумма"
                      className="w-full p-4 text-large border border-sos-green rounded-md focus:outline-none focus:ring-2 focus:ring-sos-green"
                    />
                    <span className="absolute right-4 top-4 text-sos-green">₽</span>
                  </div>
                  
                  <Button 
                    className="bg-sos-green hover:bg-sos-darkGreen text-white text-large py-6 px-8"
                    onClick={() => alert("Функция пожертвования будет доступна в ближайшее время")}
                  >
                    Сделать пожертвование
                  </Button>
                  
                  <p className="text-sm text-sos-gray">
                    Все пожертвования идут на поддержку проекта и помощь жертвам насилия
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-sos-darkGray text-white py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center">
            <div className="mb-4 flex justify-center items-center">
              <Link to="/" className="mx-2 hover:text-sos-green transition-colors">Главная</Link>
              <span className="mx-2">|</span>
              <Link to="/specialists" className="mx-2 hover:text-sos-green transition-colors">Для специалистов</Link>
            </div>
            <p className="text-large mb-4">
              SOS Жертвам Насилия © 2025. Все права защищены.
            </p>
            <p className="text-sm opacity-70">
              Отказ от ответственности: Информация на этом сайте предоставляется только в информационных целях. 
              В экстренных ситуациях немедленно обращайтесь в службы спасения по номеру 112.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
