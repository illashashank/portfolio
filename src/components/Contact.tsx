import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "illashashank@gmail.com",
      href: "mailto:illashashank@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9492932679",
      href: "tel:+919492932679",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shashankilla",
      href: "https://www.linkedin.com/in/shashankilla/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/illashashank",
      href: "https://github.com/illashashank",
    },
    {
      icon: MapPin,
      label: "Availability",
      value: "Immediate Joining Available",
      href: null,
    },
  ];

  const attributes = [
    "Effective Communication",
    "Team Collaboration",
    "Quick Learner",
    "Adaptable",
    "Quality-First Mindset",
    "Continuous Improvement",
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              How I can contribute to your team
            </p>
          </div>

          {/* Personal Attributes */}
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Personal Attributes</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {attributes.map((attribute, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 bg-secondary rounded-full text-foreground/80"
                >
                  {attribute}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <Card className="p-8 bg-card border-border shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  onClick={() => window.open("mailto:illashashank@gmail.com")}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:border-primary hover:bg-primary/10"
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/shashankilla/", "_blank")
                  }
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
