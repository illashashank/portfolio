import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    "15 months of hands-on experience in automation and API testing",
    "Automated 100+ test cases, reducing manual testing time by 60%",
    "Strong grasp of QA fundamentals, SDLC, and STLC",
    "Excellent communication and collaboration skills",
    "Quick learner with quality-first mindset",
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Dedicated Software Tester with a passion for quality
            </p>
          </div>

          <Card className="p-8 bg-card border-border shadow-lg">
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              Dedicated Software Tester with 15 months of hands-on experience in automation and API testing, 
              possessing a solid grasp of QA fundamentals, SDLC, and STLC. Strong team player with excellent 
              communication and collaboration skills. Highly committed, hardworking, and quick to learn new 
              tools and technologies to contribute to the success of QA team.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary mb-4">Key Highlights</h3>
              <div className="grid gap-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground/80">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
