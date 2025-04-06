import React from "react";
import { Button } from "./ui/button";
import { Code2, Download, Globe, LayoutDashboard, Github } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-techpurple-500 to-techblue-500 opacity-30 blur-md"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Web Development"
                className="relative w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-50 rounded-full">
              <span className="text-primary font-semibold">من أنا</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              مطور ومصمم مواقع ويب محترف
            </h2>
            
            <p className="text-gray-600 mb-4 text-lg">
              مرحبًا! أنا مطور ويب محترف مع خبرة في إنشاء مواقع ويب سريعة، متجاوبة وسهلة الاستخدام. أتخصص في تقنيات الويب الحديثة مثل React وAngular لبناء واجهات مستخدم ديناميكية وجذابة.
            </p>
            
            <p className="text-gray-600 mb-6 text-lg">
              <span className="font-semibold">أستضيف جميع مشاريعي على GitHub</span> مما يضمن الشفافية والتوثيق الجيد للكود. هذا يسمح أيضًا بسهولة التحديث والصيانة لمواقع عملائي.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">React & Angular</h3>
                  <p className="text-gray-600">خبرة متقدمة في إطارات العمل الأكثر شعبية</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">تصميم المواقع</h3>
                  <p className="text-gray-600">تصميمات احترافية وعصرية تناسب جميع الأجهزة</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <LayoutDashboard className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">لوحات التحكم</h3>
                  <p className="text-gray-600">إنشاء لوحات تحكم سهلة الاستخدام لإدارة المحتوى</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">استضافة على GitHub</h3>
                  <p className="text-gray-600">استضافة مجانية وآمنة لمشاريع الويب</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="bg-primary hover:bg-primary/90" 
              size="lg"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5 rtl:mr-0 rtl:ml-2" />
              تحميل السيرة الذاتية
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
