import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLinkIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const tools = [
  {
    name: 'Break-Even Analysis Calculator',
    platform: 'Corporate Finance Institute',
    description: 'Calculate break-even points with fixed costs, variable costs, and pricing scenarios.',
    url: 'https://corporatefinanceinstitute.com/resources/financial-modeling/break-even-analysis/',
  },
  {
    name: 'NPV & IRR Calculator',
    platform: 'Investopedia',
    description: 'Evaluate investment decisions with net present value and internal rate of return tools.',
    url: 'https://www.investopedia.com/calculator/netpresentvalue.aspx',
  },
  {
    name: 'Price Elasticity Calculator',
    platform: 'Economics Help',
    description: 'Measure demand elasticity and predict revenue impacts from price changes.',
    url: 'https://www.economicshelp.org/blog/glossary/price-elasticity-demand/',
  },
  {
    name: 'Cost-Benefit Analysis Tool',
    platform: 'Project Management Institute',
    description: 'Quantify costs and benefits for strategic business decisions.',
    url: 'https://www.pmi.org/',
  },
  {
    name: 'Marginal Analysis Calculator',
    platform: 'Khan Academy',
    description: 'Optimize production decisions using marginal cost and marginal revenue analysis.',
    url: 'https://www.khanacademy.org/economics-finance-domain',
  },
  {
    name: 'Pricing Strategy Optimizer',
    platform: 'ProfitWell',
    description: 'Model different pricing strategies and forecast revenue outcomes.',
    url: 'https://www.profitwell.com/',
  },
];

const DecisionTools = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.tool-row'),
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
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
      id="decision-tools"
      ref={sectionRef}
      className="py-24 lg:py-32 px-4 lg:px-8 bg-background"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-h2 md:text-[2.5rem] font-medium mb-4 text-foreground">
            Decision & Pricing Tools
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-body text-foreground max-w-3xl mx-auto">
            Practical calculators and analytical tools for making data-driven business decisions and optimizing pricing strategies.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`tool-row grid md:grid-cols-3 gap-4 p-6 rounded-lg border border-border ${
                  index % 2 === 0 ? 'bg-neutral' : 'bg-card'
                } hover:shadow-md transition-all duration-300`}
              >
                <div className="md:col-span-1">
                  <h3 className="text-[1.125rem] font-medium text-foreground mb-1">{tool.name}</h3>
                  <p className="text-small text-secondary font-medium">{tool.platform}</p>
                </div>
                <div className="md:col-span-2 flex items-center justify-between gap-4">
                  <p className="text-body text-foreground">{tool.description}</p>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors flex-shrink-0"
                    aria-label={`Visit ${tool.name}`}
                  >
                    <ExternalLinkIcon size={24} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecisionTools;
