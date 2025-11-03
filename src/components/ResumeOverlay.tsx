import { X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Phone, Globe, ExternalLink } from "lucide-react";

interface ResumeOverlayProps {
  onClose: () => void;
}

const ResumeOverlay = ({ onClose }: ResumeOverlayProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-background overflow-y-auto pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-primary mb-6 hover:underline"
        >
          <X className="w-5 h-5" /> Back
        </button>

        {/* Resume Content */}
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

        {/* Your existing resume sections go here */}
        {/* You can reuse everything from Resume.tsx starting from <Card>... */}
        
        {/* Example (shortened for clarity) */}
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <p className="text-muted-foreground leading-relaxed">
            Dedicated Software Tester with 15 months of hands-on experience in automation and API testing...
          </p>
        </Card>

        {/* More resume content below */}
      </div>
    </div>
  );
};

export default ResumeOverlay;
