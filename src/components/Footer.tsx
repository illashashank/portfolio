import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Built with <Heart className="h-4 w-4 text-primary fill-primary" /> by Illa Shashank
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
