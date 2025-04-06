
import React from "react";
import { Github, Linkedin, Phone, Send, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Hesham Tech Zone</h3>
            <p className="text-gray-300">
              تطوير مواقع ويب احترافية باستخدام أحدث التقنيات. متخصص في React وAngular.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://t.me/Hesham_Tech_Zone"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <MessageSquare />
              </a>
              <a
                href="https://youtube.com/@heshamtechzone"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {/* Replacing Youtube with a generic link since Youtube isn't in lucide-react */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19c-2.3 0-6.4-.2-8.1-.6-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.5-3.4-.5-5s.2-3.9.5-5c.2-.7.7-1.2 1.4-1.4C5.6 5.2 9.7 5 12 5s6.4.2 8.1.6c.7.2 1.2.7 1.4 1.4.3 1.1.5 3.4.5 5s-.2 3.9-.5 5c-.2.7-.7 1.2-1.4 1.4-1.7.4-5.8.6-8.1.6 0 0 0 0 0 0z"></path>
                  <polygon points="10 15 15 12 10 9"></polygon>
                </svg>
              </a>
              <a
                href="https://github.com/heshamtechzone"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-primary transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary transition-colors">
                  من أنا
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors">
                  خدماتي
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-primary transition-colors">
                  أعمالي
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary transition-colors">
                  تواصل معي
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">تواصل معي</h3>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-gray-300" dir="ltr">+20 1505076374</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Send className="h-5 w-5 text-primary" />
              <span className="text-gray-300" dir="ltr">heshamman2006@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <MessageSquare className="h-5 w-5 text-primary" />
              <a href="https://t.me/Hesham_Tech_Zone" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                Hesham_Tech_Zone
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Hesham Tech Zone | جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
