
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Code, Github, Globe } from "lucide-react";

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-24 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-20"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block animate-fade-in border border-white/30">
              <span className="text-white font-medium text-sm">مطور ويب محترف</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
              <span className="block">منطقة هشام التقنية</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200">تطوير مواقع ويب احترافية</span>
            </h1>
            
            <p className="mt-6 text-lg text-white/90 animate-fade-in" style={{ animationDelay: "200ms" }}>
              مرحبًا بكم في Hesham Tech Zone! أنا مطور ويب محترف متخصص في تصميم وتطوير مواقع ويب تفاعلية وسريعة 
              باستخدام أحدث التقنيات مثل <span className="font-semibold text-purple-200">React</span> و
              <span className="font-semibold text-purple-200"> Angular</span> مع استضافة المشاريع على
              <span className="font-semibold text-purple-200"> GitHub</span>.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 hover:text-primary/90 group shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection('projects')}
              >
                عرض أعمالي
                <ArrowRight className="ml-2 h-5 w-5 rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white/10 backdrop-blur-sm"
                onClick={() => scrollToSection('contact')}
              >
                تواصل معي
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 animate-fade-in" style={{ animationDelay: "600ms" }}>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Code className="h-5 w-5 text-purple-300" />
                <span className="text-white text-sm">React</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Globe className="h-5 w-5 text-purple-300" />
                <span className="text-white text-sm">Angular</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Github className="h-5 w-5 text-purple-300" />
                <span className="text-white text-sm">GitHub Pages</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 animate-float">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-techpurple-500 to-techblue-500 opacity-75 blur-lg"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Web Development"
                  className="rounded-lg w-full h-auto shadow-md"
                />
                <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-inner">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2 rtl:space-x-reverse">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded w-16"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="h-2 bg-primary/30 rounded w-5/6"></div>
                    <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-2 bg-primary/20 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
