import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const concepts = [
  {
    name: 'Supply & Demand Visualizer',
    description: 'Interactive graphs showing how shifts in supply and demand affect market equilibrium, with real-time price and quantity adjustments.',
  },
  {
    name: 'Elasticity Explorer',
    description: 'Visual demonstrations of price elasticity, income elasticity, and cross-price elasticity with practical business examples.',
  },
  {
    name: 'Production Function Mapper',
    description: 'Explore short-run and long-run production functions, diminishing returns, and optimal input combinations.',
  },
  {
    name: 'Market Structure Comparator',
    description: 'Side-by-side comparison of perfect competition, monopoly, oligopoly, and monopolistic competition characteristics.',
  },
  {
    name: 'Game Theory Visualizer',
    description: 'Interactive payoff matrices, decision trees, and Nash equilibrium solvers for strategic business scenarios.',
  },
  {
    name: 'Externalities & Public Goods',
    description: 'Visual models of positive and negative externalities, market failures, and policy interventions.',
  },
];

const ConceptBuilders = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.concept-card'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
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
      id="concept-builders"
      ref={sectionRef}
      className="py-24 lg:py-32 px-4 lg:px-8 bg-background"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-h2 md:text-[2.5rem] font-medium mb-4 text-foreground">
            Concept Builders (Visual Learning)
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-body text-foreground max-w-3xl mx-auto">
            Build intuition through visual representations of core economic concepts with interactive diagrams and dynamic models.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {concepts.map((concept, index) => (
            <Card
              key={index}
              className="concept-card border-border bg-card cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-[1.125rem] text-card-foreground pr-2">
                    {concept.name}
                  </CardTitle>
                  {expandedIndex === index ? (
                    <ChevronUpIcon className="text-primary flex-shrink-0" size={24} strokeWidth={1.5} />
                  ) : (
                    <ChevronDownIcon className="text-primary flex-shrink-0" size={24} strokeWidth={1.5} />
                  )}
                </div>
              </CardHeader>
              {expandedIndex === index && (
                <CardContent>
                  <p className="text-body text-card-foreground">{concept.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConceptBuilders;
