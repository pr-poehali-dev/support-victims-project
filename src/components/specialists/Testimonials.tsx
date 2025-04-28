import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, quote, image }) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm text-gray-600 mb-4">{role}</p>
          <div className="flex text-[#DAA520] mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 italic">{quote}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
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
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Нам доверяют профессионалы</h2>
          <p className="text-large text-gray-700 max-w-3xl mx-auto">
            Отзывы специалистов, которые используют нашу платформу в своей работе
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
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
  );
};

export default Testimonials;
