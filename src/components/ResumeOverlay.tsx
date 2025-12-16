import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Linkedin, Phone, Globe, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ResumeOverlayProps {
  onClose: () => void;
}

const ResumeOverlay = ({ onClose }: ResumeOverlayProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="resume-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed inset-0 z-50 bg-background overflow-y-auto pt-24 pb-16"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="container mx-auto px-4 max-w-4xl"
        >
          {/* Back Button */}
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-primary mb-6 hover:underline"
          >
            <X className="w-5 h-5" /> Back
          </button>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ILLA SHASHANK
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <a href="mailto:illashashank@gmail.com" className="flex items-center gap-2 hover:text-primary">
                <Mail className="w-4 h-4" />
                illashashank@gmail.com
              </a>
              <a href="https://linkedin.com/in/illashashank" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a href="tel:9492932679" className="flex items-center gap-2 hover:text-primary">
                <Phone className="w-4 h-4" />
                9492932679
              </a>
              <a href="https://illashashank.netlify.app" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary">
                <Globe className="w-4 h-4" />
                Portfolio
              </a>
            </div>
          </div>

          {/* Summary */}
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <p className="text-muted-foreground">
              Dedicated Software Tester with 15 months of hands-on experience in
              automation and API testing. Strong understanding of QA
              fundamentals, SDLC, and STLC. Experienced in building scalable
              automation frameworks and collaborating with cross-functional
              teams to deliver high-quality releases.
            </p>
          </Card>

          {/* Experience */}
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>

            <h3 className="text-xl font-semibold mb-1">
              Vodex AI — Automation Test Engineer
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Aug 2024 – Present
            </p>

            <h4 className="font-semibold text-primary mb-2">Automation Testing</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
              <li>Designed automation scripts using Pytest, Selenium, and Playwright with Page Object Model.</li>
              <li>Automated 100+ test cases, reducing manual effort by 60%.</li>
              <li>Built reusable, scalable automation frameworks.</li>
              <li>Generated execution reports for faster debugging.</li>
            </ul>

            <h4 className="font-semibold text-primary mb-2">API Testing</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
              <li>Tested REST APIs using Postman.</li>
              <li>Performed Root Cause Analysis using browser dev tools.</li>
              <li>Collaborated with backend teams to resolve defects.</li>
            </ul>

            <h4 className="font-semibold text-primary mb-2">Load Testing</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Executed load tests using Apache JMeter.</li>
              <li>Identified performance bottlenecks and throughput limits.</li>
            </ul>
          </Card>

          {/* Skills */}
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>

            <h3 className="font-semibold mb-3">Core Competencies</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary">Automation Testing</Badge>
              <Badge variant="secondary">API Testing</Badge>
              <Badge variant="secondary">Performance Testing</Badge>
              <Badge variant="secondary">Test Management</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">Java</Badge>
              <Badge variant="secondary">SQL (Familiar)</Badge>
            </div>

            <h3 className="font-semibold mb-3">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Selenium</Badge>
              <Badge>Pytest</Badge>
              <Badge>TestNG</Badge>
              <Badge>Maven</Badge>
              <Badge>Postman</Badge>
              <Badge>Apache JMeter</Badge>
              <Badge>Git/GitHub</Badge>
              <Badge>JIRA</Badge>
              <Badge>Agile</Badge>
              <Badge>SQL</Badge>
            </div>
          </Card>

          {/* Education */}
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <p className="font-semibold">B.Tech – Computer Science Engineering</p>
            <p className="text-muted-foreground">Lovely Professional University</p>
            <p className="text-sm text-muted-foreground">Jun 2020 – Jun 2024</p>
            <p className="mt-2 font-semibold">Minor: Software Testing</p>
          </Card>

          {/* Certifications */}
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Certifications</h2>
            <p className="text-primary font-semibold">
              API Testing using Postman & RestAssured – Udemy
            </p>
            <p className="text-primary font-semibold">
              Software Testing and Automation – Coursera
            </p>
          </Card>

          {/* Personal Attributes */}
          <Card className="p-6 mb-20">
            <h2 className="text-2xl font-bold mb-4">Personal Attributes</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Strong communication and teamwork</li>
              <li>Quick learner and adaptable</li>
              <li>Focused on quality and continuous improvement</li>
            </ul>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeOverlay;
