import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
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
  );
};

export default Hero;
