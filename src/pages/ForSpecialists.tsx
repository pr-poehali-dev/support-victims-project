import React from "react";
import { BookOpen, HandHeart } from "lucide-react";
import Hero from "@/components/specialists/Hero";
import AboutUs from "@/components/specialists/AboutUs";
import Features from "@/components/specialists/Features";
import HelpSection from "@/components/specialists/HelpSection";
import ResourceSection from "@/components/specialists/ResourceSection";
import Testimonials from "@/components/specialists/Testimonials";
import Footer from "@/components/specialists/Footer";

const ForSpecialists: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Обложка */}
      <Hero scrollToSection={scrollToSection} />

      {/* 2. О нас */}
      <AboutUs />

      {/* 3. Ключевые особенности */}
      <Features scrollToSection={scrollToSection} />

      {/* 4. Как помочь */}
      <HelpSection />

      {/* 5. Ресурсы */}
      <ResourceSection />

      {/* Социальные доказательства */}
      <Testimonials />

      {/* 6. Подвал */}
      <Footer />
    </div>
  );
};

export default ForSpecialists;
