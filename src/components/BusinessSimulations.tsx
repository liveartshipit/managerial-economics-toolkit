import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, Building2Icon, BriefcaseIcon, TrendingUpIcon, UsersIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const platforms = [
  {
    name: 'Harvard Business Simulations',
    description: 'Industry-leading business simulations covering strategy, operations, marketing, and finance with realistic market dynamics.',
    icon: Building2Icon,
    url: 'https://hbsp.harvard.edu/simulations/',
  },
  {
    name: 'Capsim Business Simulations',
    description: 'Comprehensive business strategy simulations used by top MBA programs worldwide for competitive market scenarios.',
    icon: BriefcaseIcon,
    url: 'https://www.capsim.com/',
  },
  {
    name: 'Marketplace Simulations',
    description: 'Experiential learning simulations for marketing, entrepreneurship, and business strategy with real-time competition.',
    icon: TrendingUpIcon,
    url: 'https://www.marketplace-simulation.com/',
  },
  {
    name: 'Cesim Business Simulations',
    description: 'Global business simulations focusing on strategic management, operations, and international business decisions.',
    icon: UsersIcon,
    url: 'https://www.cesim.com/',
  },
];

const BusinessSimulations = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.platform-card'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="business-simulations"
      ref={sectionRef}
      className="py-24 lg:py-32 px-4 lg:px-8 bg-neutral"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-h2 md:text-[2.5rem] font-medium mb-4 text-foreground">
            Business-Focused Simulation Platforms
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-body text-foreground max-w-3xl mx-auto">
            Immersive business simulations that replicate real-world market conditions, competitive dynamics, and strategic decision-making scenarios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <Card
                key={index}
                className="platform-card hover:shadow-lg transition-all duration-300 hover:scale-[1.03] border-border bg-card"
              >
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                    <Icon className="text-primary" size={36} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-h3 text-card-foreground">{platform.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-body text-card-foreground mb-6">
                    {platform.description}
                  </CardDescription>
                  <Button
                    asChild
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full font-normal"
                  >
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      Explore Platform
                      <ExternalLinkIcon className="ml-2" size={18} strokeWidth={1.5} />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessSimulations;
