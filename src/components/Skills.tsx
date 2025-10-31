import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Wrench, Server, FolderKanban } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Automation & Testing",
      skills: ["Selenium", "Pytest", "POM Framework", "SDLC", "STLC", "Test Case Design"],
    },
    {
      icon: Server,
      title: "API Testing",
      skills: ["Postman", "REST APIs", "JSON", "Request/Response Validation"],
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "POSTMAN"],
    },
    {
      icon: FolderKanban,
      title: "Test Management",
      skills: ["Linear", "JIRA"],
    },
  ];

  const programmingLanguages = ["Python", "JavaScript"];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-secondary hover:bg-primary/20 transition-colors text-base px-4 py-2 rounded-md font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Programming Languages */}
          <Card className="p-8 bg-card border-border shadow-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
              <Code2 className="h-7 w-7 text-primary" />
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {programmingLanguages.map((lang, idx) => (
                <Badge
                  key={idx}
                  className="bg-gradient-to-r from-primary to-accent text-lg px-6 py-2 font-semibold rounded-md"
                >
                  {lang}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
