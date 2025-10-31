import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              My professional journey in software testing
            </p>
          </div>

          <Card className="p-8 bg-card border-border shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
            
            <div className="space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Automation Test Engineer</h3>
                  <p className="text-xl text-primary font-semibold">Vodex AI</p>
                </div>
                <Badge variant="outline" className="border-primary text-primary">
                  <Calendar className="mr-2 h-4 w-4" />
                  Aug 2024 - Present
                </Badge>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Automation Testing
                  </h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Implemented end-to-end automation scripts using Pytest and Selenium for web applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Automated 40+ test cases, resulting in a 60% reduction in manual testing time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Developed structured automation frameworks and maintained reusable test components to improve test reliability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Generated detailed test reports and logs for better execution insights and faster issue resolution</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    API Testing
                  </h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Performed API Testing using Postman, validating request/response accuracy, data consistency, and encryption-decryption mechanisms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Collaborated with cross-functional teams to validate integrations, troubleshoot issues, and ensure smooth production releases</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
