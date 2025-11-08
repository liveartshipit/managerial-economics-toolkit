import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, DatabaseIcon, LineChartIcon, GlobeIcon, TrendingUpIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const tools = [
  {
    name: 'FRED Economic Data',
    description: 'Federal Reserve Economic Data with 800,000+ time series covering employment, GDP, inflation, and monetary policy.',
    icon: DatabaseIcon,
    url: 'https://fred.stlouisfed.org/',
  },
  {
    name: 'World Bank Open Data',
    description: 'Global development indicators, poverty statistics, and economic data for 200+ countries.',
    icon: GlobeIcon,
    url: 'https://data.worldbank.org/',
  },
  {
    name: 'Trading Economics',
    description: 'Real-time economic indicators, forecasts, and historical data for markets worldwide.',
    icon: TrendingUpIcon,
    url: 'https://tradingeconomics.com/',
  },
  {
    name: 'OECD Data Portal',
    description: 'Comprehensive statistics on economy, education, health, and social issues from OECD countries.',
    icon: LineChartIcon,
    url: 'https://data.oecd.org/',
  },
];

const RealWorldTools = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.data-card'),
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="real-world-tools"
      ref={sectionRef}
      className="py-24 lg:py-32 px-4 lg:px-8 bg-neutral"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-h2 md:text-[2.5rem] font-medium mb-4 text-foreground">
            Real-World Application & Data Tools
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-body text-foreground max-w-3xl mx-auto">
            Access authoritative economic data sources and analytical platforms used by professionals, researchers, and policymakers worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card
                  key={index}
                  className="data-card hover:shadow-lg transition-all duration-300 hover:scale-[1.03] border-border bg-card"
                >
                  <CardHeader>
                    <div className="mb-3 p-2 bg-secondary/10 rounded-lg w-fit">
                      <Icon className="text-secondary" size={32} strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-[1.125rem] text-card-foreground">{tool.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-body text-card-foreground mb-4">
                      {tool.description}
                    </CardDescription>
                    <Button
                      asChild
                      className="bg-primary text-primary-foreground hover:bg-primary/90 w-full font-normal"
                    >
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Access Data
                        <ExternalLinkIcon className="ml-2" size={18} strokeWidth={1.5} />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div ref={imageRef}>
            <img
              src="https://c.animaapp.com/mhqg2e9uqDvHEL/img/ai_4.png"
              alt="data tools visualization"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealWorldTools;
