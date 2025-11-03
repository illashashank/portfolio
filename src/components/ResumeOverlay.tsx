
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Linkedin, Phone, Globe, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ResumeOverlayProps {
  onClose: () => void;
}

const ResumeOverlay = ({ onClose }: ResumeOverlayProps) => {
  // Disable background scrolling
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
        className="fixed inset-0 z-50 bg-background overflow-y-auto overflow-x-hidden pt-24 pb-16"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ILLA SHASHANK</h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <a
                href="mailto:illashashank@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                illashashank@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/illashashank"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="tel:9492932679"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                9492932679
              </a>
              <a
                href="https://illashashank.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                Portfolio
              </a>
            </div>
          </div>

          {/* Summary */}
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dedicated Software Tester with 15 months of hands-on experience in automation and API testing,
              possessing a solid grasp of QA fundamentals, SDLC, and STLC. Strong team player with excellent
              communication and collaboration skills. Focused on delivering reliable, maintainable, and efficient
              test solutions. Quick to learn new tools and technologies to contribute to the success of QA team.
            </p>
          </Card>

          {/* Professional Experience */}
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
            
            <div className="mb-6">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Vodex AI — Automation Test Engineer</h3>
                <span className="text-sm text-muted-foreground">(Aug 2024 – Present)</span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Automation Testing</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Designed and implemented automation scripts using Pytest, Selenium, and Playwright with Page Object Model.</li>
                    <li>Automated 40+ test cases, cutting manual testing time by 60%.</li>
                    <li>Built a scalable automation framework with reusable components to improve test stability.</li>
                    <li>Created clear execution logs and reports for faster debugging and issue tracking.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-primary">API Testing</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Tested APIs using Postman, validating request–response accuracy, data integrity, and encryption logic.</li>
                    <li>Performed Root Cause Analysis (RCA) on bugs using browser developer tools (Network and Console tabs).</li>
                    <li>Collaborated with backend teams to ensure smooth release cycles.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-primary">Load Testing</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Wrote and executed load tests in Apache JMeter to evaluate API performance for Vodex's outbound calling system.</li>
                    <li>Simulated workloads to identify response delays and throughput limits.</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Technical Skills */}
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Automation Testing</Badge>
                <Badge variant="secondary">API Testing</Badge>
                <Badge variant="secondary">Performance Testing</Badge>
                <Badge variant="secondary">Test Management</Badge>
                <Badge variant="secondary">Version Control</Badge>
                <Badge variant="secondary">Python</Badge>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Selenium</Badge>
                <Badge>Pytest</Badge>
                <Badge>Playwright</Badge>
                <Badge>Postman</Badge>
                <Badge>Apache JMeter</Badge>
                <Badge>Git/GitHub</Badge>
                <Badge>JIRA</Badge>
                <Badge>Agile</Badge>
              </div>
            </div>
          </Card>

          {/* Education */}
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div>
              <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Science Engineering</h3>
              <p className="text-muted-foreground mb-1">Lovely Professional University</p>
              <p className="text-sm text-muted-foreground mb-3">Jun 2020 – Jun 2024</p>
              <p className="font-semibold mb-2">Minor: Software Testing</p>
              <p className="text-muted-foreground">
                Learned and practiced manual, automation, API, and load testing as part of coursework and project-based learning. 
                Applied testing principles through guided exercises and evaluations in 3rd and 4th year.
              </p>
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Certifications</h2>
            <div className="space-y-3">
              <div>
                <a href="#" className="flex items-center gap-2 text-primary hover:underline font-semibold">
                  API Testing using Postman & RestAssured – Udemy
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-sm text-muted-foreground">Aug 2023 – Nov 2023</p>
              </div>
              <div>
                <a href="#" className="flex items-center gap-2 text-primary hover:underline font-semibold">
                  Software Testing and Automation – Coursera
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-sm text-muted-foreground">Sep 2023 – Nov 2023</p>
              </div>
            </div>
          </Card>

          {/* Personal Attributes */}
          <Card className="p-6 mb-20">
            <h2 className="text-2xl font-bold mb-4">Personal Attributes</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Effective communication and teamwork</li>
              <li>Quick learning ability and adaptability</li>
              <li>Committed to continuous improvement in QA processes and efficiency</li>
            </ul>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeOverlay;
