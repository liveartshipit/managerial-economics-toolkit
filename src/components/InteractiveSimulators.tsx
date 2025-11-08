import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayIcon, BarChart3Icon, ZapIcon, TargetIcon, TrendingUpIcon, DollarSignIcon, UsersIcon, GlobeIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const simulators = [
  {
    name: 'Market Equilibrium Simulator',
    description: 'Interactive supply and demand curves with real-time price discovery and elasticity analysis.',
    icon: BarChart3Icon,
    url: '#',
  },
  {
    name: 'Monopoly Pricing Game',
    description: 'Set prices and quantities as a monopolist, observe profit maximization and deadweight loss.',
    icon: DollarSignIcon,
    url: '#',
  },
  {
    name: 'Oligopoly Strategy Simulator',
    description: 'PlayIcon Cournot and Bertrand competition scenarios with multiple firms and strategic interactions.',
    icon: UsersIcon,
    url: '#',
  },
  {
    name: 'Price Discrimination Lab',
    description: 'Experiment with first, second, and third-degree price discrimination strategies.',
    icon: TargetIcon,
    url: '#',
  },
  {
    name: 'Game Theory Matrix',
    description: 'Solve prisoner\'s dilemma, Nash equilibrium, and dominant strategy problems interactively.',
    icon: ZapIcon,
    url: '#',
  },
  {
    name: 'International Trade Simulator',
    description: 'Model comparative advantage, tariffs, quotas, and trade policy impacts on welfare.',
    icon: GlobeIcon,
    url: '#',
  },
  {
    name: 'Cost Curve Builder',
    description: 'Visualize marginal cost, average cost, and economies of scale with production functions.',
    icon: TrendingUpIcon,
    url: '#',
  },
  {
    name: 'Auction Mechanism Designer',
    description: 'Compare first-price, second-price, and English auctions with bidding strategies.',
    icon: TargetIcon,
    url: '#',
  },
  {
    name: 'Consumer Choice Simulator',
    description: 'Explore utility maximization, budget constraints, and indifference curves interactively.',
    icon: UsersIcon,
    url: '#',
  },
];

const InteractiveSimulators = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.sim-card'),
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
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
      id="simulators"
      ref={sectionRef}
      className="py-24 lg:py-32 px-4 lg:px-8 bg-neutral"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-h2 md:text-[2.5rem] font-medium mb-4 text-foreground">
            Interactive Economic Simulators & Games
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-body text-foreground max-w-3xl mx-auto">
            Learn by doing with hands-on simulations that bring economic theory to life through interactive experimentation and real-time feedback.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {simulators.map((sim, index) => {
            const Icon = sim.icon;
            return (
              <Card
                key={index}
                className="sim-card hover:shadow-lg transition-all duration-300 hover:scale-[1.03] border-border bg-card"
              >
                <CardHeader>
                  <div className="mb-3 p-2 bg-secondary/10 rounded-lg w-fit">
                    <Icon className="text-secondary" size={28} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-[1.25rem] text-card-foreground">{sim.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-body text-card-foreground mb-4">
                    {sim.description}
                  </CardDescription>
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90 w-full font-normal"
                  >
                    <a href={sim.url} className="flex items-center justify-center">
                      Try Simulation
                      <PlayIcon className="ml-2" size={18} strokeWidth={1.5} />
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

export default InteractiveSimulators;
