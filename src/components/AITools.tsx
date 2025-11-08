import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, SparklesIcon, CalculatorIcon, SearchIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const aiTools = [
  {
    name: 'ChatGPT',
    description: 'AI assistant for explaining economic concepts, solving problems, and generating study materials with conversational interface.',
    icon: SparklesIcon,
    url: 'https://chat.openai.com/',
  },
  {
    name: 'WolframAlpha',
    description: 'Computational knowledge engine for economic calculations, data analysis, and mathematical modeling.',
    icon: CalculatorIcon,
    url: 'https://www.wolframalpha.com/',
  },
  {
    name: 'Perplexity.ai',
    description: 'AI-powered research assistant providing cited answers to economics questions with source verification.',
    icon: SearchIcon,
    url: 'https://www.perplexity.ai/',
  },
];

const AITools = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.ai-card'),
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
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

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 40 },
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
      id="ai-tools"
      ref={sectionRef}
      className="py-24 lg:py-32 px-4 lg:px-8 bg-neutral"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-h2 md:text-[2.5rem] font-medium mb-4 text-foreground">
            AI & Analytical Tools for Economics
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-body text-foreground max-w-3xl mx-auto">
            Leverage artificial intelligence and computational tools to enhance your understanding of economic models and accelerate problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {aiTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card
                  key={index}
                  className="ai-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-border bg-card"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Icon className="text-primary" size={32} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-h3 text-card-foreground mb-2">{tool.name}</CardTitle>
                        <CardDescription className="text-body text-card-foreground">
                          {tool.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
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
                        Try Tool
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
              src="https://c.animaapp.com/mhqg2e9uqDvHEL/img/ai_3.png"
              alt="interactive simulator visuals"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITools;
