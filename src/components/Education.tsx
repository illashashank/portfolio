import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, ExternalLink } from "lucide-react";

const Education = () => {
  const certifications = [
    {
      title: "API Testing using Postman & RestAssured",
      provider: "Udemy",
      date: "Aug 2023 - Nov 2023",
      hasLink: true,
    },
    {
      title: "Software Testing and Automation",
      provider: "Coursera",
      date: "Sep 2023 - Nov 2023",
      hasLink: true,
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Education & Certifications
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Academic background and professional development
            </p>
          </div>

          <Card className="p-8 bg-card border-border shadow-lg">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        Bachelor of Technology in Computer Science Engineering
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        Lovely Professional University
                      </p>
                      <Badge variant="outline" className="border-primary text-primary mt-2">
                        Minor: Software Testing
                      </Badge>
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">
                      <Calendar className="mr-2 h-4 w-4" />
                      Jun 2020 - Jun 2024
                    </Badge>
                  </div>
                  <ul className="space-y-2 text-foreground/80 mt-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Gained systematic exposure to testing principles and methodologies including manual 
                        testing, automation testing, load testing, and API testing
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Performed structured testing practices as part of coursework and practical evaluated projects
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <Award className="h-7 w-7 text-primary" />
              Professional Certifications
            </h3>
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                      {cert.title}
                      {cert.hasLink && (
                        <ExternalLink className="h-4 w-4 text-primary" />
                      )}
                    </h4>
                    <p className="text-primary font-medium">{cert.provider}</p>
                  </div>
                  <Badge variant="outline" className="border-primary text-primary">
                    <Calendar className="mr-2 h-4 w-4" />
                    {cert.date}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
