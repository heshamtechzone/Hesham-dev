
import * as React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (isOpen) {
        setIsOpen(false);
      }
    }
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={cn("w-full py-4 px-6 fixed top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm", className)}>
      <div className="container mx-auto flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('hero')} 
          className="flex items-center gap-2 bg-transparent border-0 cursor-pointer"
        >
          <span className="text-xl font-bold text-gradient">Hesham Tech Zone</span>
          <span className="text-sm font-medium text-gray-600">| منطقة هشام التقنية</span>
        </button>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-gray-700 hover:text-primary font-medium transition-colors bg-transparent border-0 cursor-pointer"
          >
            الرئيسية
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-primary font-medium transition-colors bg-transparent border-0 cursor-pointer"
          >
            من أنا
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-gray-700 hover:text-primary font-medium transition-colors bg-transparent border-0 cursor-pointer"
          >
            خدماتي
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-700 hover:text-primary font-medium transition-colors bg-transparent border-0 cursor-pointer"
          >
            أعمالي
          </button>
          <Button 
            className="bg-primary text-white hover:bg-primary/90"
            onClick={() => scrollToSection('contact')}
          >
            تواصل معي
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col gap-4 animate-fade-in">
            <button
              className="text-gray-700 hover:text-primary font-medium py-2 px-4 text-right bg-transparent border-0 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              الرئيسية
            </button>
            <button
              className="text-gray-700 hover:text-primary font-medium py-2 px-4 text-right bg-transparent border-0 cursor-pointer"
              onClick={() => scrollToSection('about')}
            >
              من أنا
            </button>
            <button
              className="text-gray-700 hover:text-primary font-medium py-2 px-4 text-right bg-transparent border-0 cursor-pointer"
              onClick={() => scrollToSection('services')}
            >
              خدماتي
            </button>
            <button
              className="text-gray-700 hover:text-primary font-medium py-2 px-4 text-right bg-transparent border-0 cursor-pointer"
              onClick={() => scrollToSection('projects')}
            >
              أعمالي
            </button>
            <button
              className="bg-primary text-white hover:bg-primary/90 py-2 px-4 rounded text-right w-full"
              onClick={() => scrollToSection('contact')}
            >
              تواصل معي
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
