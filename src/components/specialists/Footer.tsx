import React from 'react';
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A2463] text-white py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <FooterColumn title="О платформе">
            <li><Link to="/" className="hover:text-[#DAA520] transition-colors">Главная</Link></li>
            <li><a href="#about" className="hover:text-[#DAA520] transition-colors">О нас</a></li>
            <li><a href="#resources" className="hover:text-[#DAA520] transition-colors">Ресурсы</a></li>
            <li><a href="#help" className="hover:text-[#DAA520] transition-colors">Как помочь</a></li>
          </FooterColumn>
          
          <FooterColumn title="Ресурсы">
            <li><a href="#" className="hover:text-[#DAA520] transition-colors">Библиотека материалов</a></li>
            <li><a href="#" className="hover:text-[#DAA520] transition-colors">Форум специалистов</a></li>
            <li><a href="#" className="hover:text-[#DAA520] transition-colors">База данных НПО</a></li>
            <li><a href="#" className="hover:text-[#DAA520] transition-colors">Законодательство</a></li>
          </FooterColumn>
          
          <FooterColumn title="Для специалистов">
            <li><a href="#" className="hover:text-[#DAA520] transition-colors">Стать волонтером</a></li>
            <li><a href="#" className="hover:text-[#DAA520] transition-colors">Тренинги и вебинары</a></li>
            <li><a href="#" className="hover:text-[#DAA520] transition-colors">Супервизии</a></li>
            <li><a href="#" className="hover:text-[#DAA520] transition-colors">Партнерские программы</a></li>
          </FooterColumn>
          
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
  );
};

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {children}
      </ul>
    </div>
  );
};

export default Footer;
