
import React from "react";
import { Code, GanttChartSquare, Globe, LayoutDashboard, Phone, UserRound } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "تصميم وتطوير المواقع",
      description: "إنشاء مواقع ويب احترافية متجاوبة مع جميع أحجام الشاشات باستخدام أحدث التقنيات.",
      icon: Globe,
    },
    {
      title: "تطوير تطبيقات React",
      description: "بناء تطبيقات ويب تفاعلية وسريعة باستخدام مكتبة React مع ضمان أفضل أداء.",
      icon: Code,
    },
    {
      title: "تطوير تطبيقات Angular",
      description: "إنشاء تطبيقات ويب قوية وقابلة للتوسعة باستخدام إطار العمل Angular.",
      icon: GanttChartSquare,
    },
    {
      title: "لوحات تحكم إدارية",
      description: "تصميم وتطوير لوحات تحكم مخصصة لإدارة محتوى موقعك بسهولة وفعالية.",
      icon: LayoutDashboard,
    },
    {
      title: "تصميم واجهات المستخدم",
      description: "تصميم واجهات مستخدم جذابة وسهلة الاستخدام تضمن تجربة مستخدم مميزة.",
      icon: UserRound,
    },
    {
      title: "مواقع متجاوبة مع الجوال",
      description: "تطوير مواقع ويب تعمل بشكل مثالي على جميع الأجهزة بما في ذلك الهواتف والأجهزة اللوحية.",
      icon: Phone,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-50 rounded-full">
            <span className="text-primary font-semibold">خدماتي</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            خدمات تطوير الويب الاحترافية
          </h2>
          <p className="text-gray-600 text-lg">
            أقدم مجموعة متنوعة من خدمات تطوير الويب المصممة خصيصًا لتلبية احتياجات عملك وتحقيق رؤيتك الرقمية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card border-t-transparent hover:shadow-lg card-hover">
              <CardHeader>
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
