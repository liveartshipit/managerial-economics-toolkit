import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CheckCircle2Icon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const roadmapSteps = [
  {
    step: 1,
    title: 'Foundation: Core Economic Principles',
    duration: '4-6 weeks',
    description: 'Build a solid understanding of fundamental economic concepts and theories.',
    tools: [
      'Khan Academy Economics (Micro & Macro basics)',
      'OpenStax Principles of Economics textbook',
      'Supply & Demand Visualizer',
      'Market Equilibrium Simulator',
    ],
  },
  {
    step: 2,
    title: 'Intermediate: Market Structures & Strategy',
    duration: '6-8 weeks',
    description: 'Explore different market types and strategic decision-making frameworks.',
    tools: [
      'Monopoly Pricing Game',
      'Oligopoly Strategy Simulator',
      'Game Theory Matrix',
      'Coursera Business Economics courses',
    ],
  },
  {
    step: 3,
    title: 'Applied: Business Simulations',
    duration: '4-6 weeks',
    description: 'Practice making business decisions in realistic competitive environments.',
    tools: [
      'Harvard Business Simulations',
      'Capsim Business Simulations',
      'Price Discrimination Lab',
      'Cost-Benefit Analysis Tool',
    ],
  },
  {
    step: 4,
    title: 'Analytical: Data & Tools Mastery',
    duration: '4-6 weeks',
    description: 'Learn to analyze real economic data and use professional analytical tools.',
    tools: [
      'FRED Economic Data',
      'Trading Economics',
      'WolframAlpha for calculations',
      'NPV & IRR Calculator',
    ],
  },
  {
    step: 5,
    title: 'Advanced: Case Studies & Applications',
    duration: '6-8 weeks',
    description: 'Apply economic principles to real-world business cases and strategic scenarios.',
    tools: [
      'Harvard Business Review cases',
      'McKinsey Insights reports',
      'MIT Sloan Management Review',
      'International Trade Simulator',
    ],
  },
  {
    step: 6,
    title: 'Mastery: Integration & Specialization',
    duration: 'Ongoing',
    description: 'Synthesize knowledge across domains and develop specialized expertise.',
    tools: [
      'Advanced business simulations',
      'AI tools for economic modeling',
      'Industry-specific case studies',
      'Research with OECD & World Bank data',
    ],
  },
];

const LearningRoadmap = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.roadmap-step'),
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
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
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
      id="learning-roadmap"
      ref={sectionRef}
      className="py-24 lg:py-32 px-4 lg:px-8 bg-neutral"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-h2 md:text-[2.5rem] font-medium mb-4 text-foreground">
            Suggested Learning Path (MBA Roadmap)
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-body text-foreground max-w-3xl mx-auto">
            A structured six-stage journey from foundational concepts to advanced mastery, with recommended tools and resources for each phase.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {roadmapSteps.map((step, index) => (
                <AccordionItem
                  key={index}
                  value={`step-${index}`}
                  className="roadmap-step border border-border rounded-lg mb-4 bg-card"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-start gap-4 text-left">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[1.125rem] font-medium text-card-foreground mb-1">
                          {step.title}
                        </h3>
                        <p className="text-small text-secondary">{step.duration}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-body text-card-foreground mb-4">{step.description}</p>
                    <div className="space-y-2">
                      <p className="text-small font-medium text-card-foreground mb-2">
                        Recommended Tools:
                      </p>
                      {step.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="flex items-start gap-2">
                          <CheckCircle2Icon
                            className="text-success flex-shrink-0 mt-0.5"
                            size={20}
                            strokeWidth={1.5}
                          />
                          <span className="text-body text-card-foreground">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div ref={imageRef} className="lg:sticky lg:top-24">
            <img
              src="https://c.animaapp.com/mhqg2e9uqDvHEL/img/ai_5.png"
              alt="learning roadmap illustration"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningRoadmap;
