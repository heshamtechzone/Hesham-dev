
import React from "react";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { toast } from "sonner";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "موقع إنشاء الشعارات",
      description: "منصة مجانية لإنشاء شعارات احترافية بسهولة، مشابه لـ Canva مع واجهة مستخدم بسيطة ومناسبة للاستخدام على جميع الأجهزة.",
      image: "https://images.unsplash.com/photo-1560157368-946d9c8f7cb6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "https://heshamtechzone.github.io/heshamtechzone/",
      tags: ["React", "CSS", "Canvas API"],
    },
    {
      title: "موقع شركة تقنية",
      description: "موقع احترافي لشركة تقنية متخصصة في تطوير البرمجيات وتقديم حلول تكنولوجيا المعلومات واستضافتها على منصة GitHub Pages.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "#",
      githubLink: "https://github.com/heshamtechzone",
      tags: ["Angular", "Tailwind CSS", "TypeScript"],
    },
  ];

  const handleProjectClick = (url: string) => {
    if (url === "#") {
      toast.info("سيتم توفير هذا المشروع قريبًا", {
        description: "المشروع قيد التطوير حاليًا",
      });
      return;
    }
    
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-purple-50/50 to-white relative">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full shadow-sm">
            <span className="text-primary font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">أعمالي</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            أحدث المشاريع
          </h2>
          <p className="text-gray-600 text-lg">
            إليك بعض المشاريع التي قمت بتطويرها باستخدام أحدث التقنيات مع استضافتها على GitHub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 group"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-3 py-1 bg-primary/20 backdrop-blur-sm text-xs rounded-full border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 text-lg">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
                    onClick={() => handleProjectClick(project.link)}
                  >
                    عرض المشروع 
                    <ExternalLink className="ml-2 h-4 w-4 rtl:ml-0 rtl:mr-2" />
                  </Button>
                  
                  {project.githubLink && (
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10"
                      onClick={() => window.open(project.githubLink, "_blank", "noopener,noreferrer")}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
