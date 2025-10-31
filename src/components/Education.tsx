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
      url: "https://drive.google.com/file/d/1Qlz22NfqPp6x2a9BvnMzycdHY5nEs4uS/view",
    },
    {
      title: "Software Testing and Automation",
      provider: "Coursera",
      date: "Sep 2023 - Nov 2023",
      hasLink: true,
      url: "https://drive.google.com/file/d/1nG_Q2DeCuBpVRhqzg1P7OLf2XPu2_igX/view",
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
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

          {/* Main Degree Card */}
          <Card className="relative p-8 bg-card border-border shadow-lg overflow-hidden">
            <div className="absolute -left-2 top-6 bottom-6 w-1 rounded-r-lg bg-gradient-to-b from-primary to-accent" />
            <div className="flex items-start gap-6">
              <div className="p-3 bg-primary/10 rounded-lg z-10">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>

              <div className="flex-1 z-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="pr-4">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-foreground leading-snug">
                      Bachelor of Technology in Computer Science Engineering
                    </h3>
                    <p className="text-lg text-primary font-semibold mt-2">
                      Lovely Professional University
                    </p>
                    <div className="mt-3">
                      <Badge variant="outline" className="border-primary text-primary">
                        Minor: Software Testing
                      </Badge>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <Badge variant="outline" className="border-primary text-primary flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Jun 2020 - Jun 2024
                    </Badge>
                  </div>
                </div>

                <ul className="space-y-2 text-foreground/80 mt-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Gained practical exposure to manual, automation, load, and API testing as part of coursework and projects.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Completed structured testing exercises and collaborated on evaluation projects simulating real-world QA workflows.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Certifications Section */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
              <Award className="h-7 w-7 text-primary" />
              Professional Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/95 border-border shadow-md hover:shadow-lg transition-shadow flex flex-wrap items-center justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg md:text-xl font-semibold text-foreground mb-1 flex items-center gap-2">
                      {cert.title}
                      {cert.hasLink && (
                        <ExternalLink className="h-4 w-4 text-primary" />
                      )}
                    </h4>
                    <p className="text-primary font-medium">{cert.provider}</p>
                  </div>

                  <div className="flex items-center gap-3 mt-4 md:mt-0">
                    <Badge variant="outline" className="border-primary text-primary flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {cert.date}
                    </Badge>

                    {cert.hasLink && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-transparent bg-primary/10 hover:bg-primary/20 transition-colors text-primary font-medium"
                        aria-label={`View certificate for ${cert.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm md:text-base">View Certificate</span>
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
