
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { AtSign, ExternalLink, MapPin, Phone, Send, MessageSquare } from "lucide-react";

const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    try {
      // In a real scenario, you would send this data to your backend
      console.log("Form submitted:", { name, email, message });
      
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast.success("تم إرسال الرسالة بنجاح!", {
        description: "سيتم التواصل معك قريبًا.",
      });
      
      // Clear form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("حدث خطأ أثناء إرسال الرسالة.", {
        description: "يرجى المحاولة مرة أخرى لاحقًا.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-50 rounded-full">
            <span className="text-primary font-semibold">تواصل معي</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            دعنا نناقش مشروعك
          </h2>
          <p className="text-gray-600 text-lg">
            أرسل لي رسالة وسأتواصل معك في أقرب وقت ممكن لمناقشة مشروعك وكيف يمكنني مساعدتك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">أرسل رسالة</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                  الاسم
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="أدخل اسمك الكامل"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                  البريد الإلكتروني
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                  الرسالة
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="أخبرني عن مشروعك..."
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90" 
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    جاري الإرسال...
                  </span>
                ) : (
                  <span className="flex items-center">
                    إرسال الرسالة
                    <Send className="ml-2 h-5 w-5 rtl:ml-0 rtl:mr-2" />
                  </span>
                )}
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">الهاتف / واتساب</h4>
                    <p className="text-gray-600">+20 1505076374</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <AtSign className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">البريد الإلكتروني</h4>
                    <p className="text-gray-600">heshamman2006@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">تلجرام</h4>
                    <a href="https://t.me/Hesham_Tech_Zone" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Hesham_Tech_Zone
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">الموقع</h4>
                    <p className="text-gray-600">مصر</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">استضافة المشاريع</h3>
              <p className="text-gray-600 mb-4">
                جميع المواقع التي أقوم بتطويرها يتم استضافتها على منصة GitHub بكفاءة عالية وتكلفة منخفضة.
              </p>
              <a 
                href="https://github.com/heshamtechzone" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline flex items-center"
              >
                زيارة GitHub
                <ExternalLink className="ml-2 h-4 w-4 rtl:ml-0 rtl:mr-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
