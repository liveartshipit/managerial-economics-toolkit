import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Disclaimer', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-h3 font-medium mb-4 text-primary-foreground">MBA Economics Toolkit</h3>
            <p className="text-body text-primary-foreground">
              Comprehensive resources for mastering Managerial Economics through interactive tools and structured learning.
            </p>
          </div>

          <div>
            <h4 className="text-[1.125rem] font-medium mb-4 text-primary-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#core-platforms"
                  className="text-body text-primary-foreground hover:text-tertiary transition-colors"
                >
                  Learning Platforms
                </a>
              </li>
              <li>
                <a
                  href="#simulators"
                  className="text-body text-primary-foreground hover:text-tertiary transition-colors"
                >
                  Simulators
                </a>
              </li>
              <li>
                <a
                  href="#decision-tools"
                  className="text-body text-primary-foreground hover:text-tertiary transition-colors"
                >
                  Decision Tools
                </a>
              </li>
              <li>
                <a
                  href="#learning-roadmap"
                  className="text-body text-primary-foreground hover:text-tertiary transition-colors"
                >
                  Learning Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[1.125rem] font-medium mb-4 text-primary-foreground">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#free-resources"
                  className="text-body text-primary-foreground hover:text-tertiary transition-colors"
                >
                  Free Resources
                </a>
              </li>
              <li>
                <a
                  href="#ai-tools"
                  className="text-body text-primary-foreground hover:text-tertiary transition-colors"
                >
                  AI Tools
                </a>
              </li>
              <li>
                <a
                  href="#case-platforms"
                  className="text-body text-primary-foreground hover:text-tertiary transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#real-world-tools"
                  className="text-body text-primary-foreground hover:text-tertiary transition-colors"
                >
                  Data Tools
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[1.125rem] font-medium mb-4 text-primary-foreground">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-body text-primary-foreground hover:text-tertiary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body text-primary-foreground">
            © {currentYear} MBA Economics Toolkit. All rights reserved.
          </p>
          <p className="text-body text-primary-foreground">
            Educational resources for managerial economics mastery.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
