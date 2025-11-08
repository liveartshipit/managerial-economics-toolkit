import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLinkIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const platforms = [
  {
    name: 'Harvard Business Review',
    focus: 'Strategic Management Cases',
    description: 'Real-world business cases analyzing economic decisions, competitive strategy, and market dynamics.',
    url: 'https://hbr.org/',
  },
  {
    name: 'McKinsey Insights',
    focus: 'Industry Analysis',
    description: 'In-depth reports on economic trends, market structures, and business strategy across industries.',
    url: 'https://www.mckinsey.com/featured-insights',
  },
  {
    name: 'The Case Centre',
    focus: 'Academic Case Studies',
    description: 'Global repository of teaching cases covering economics, strategy, and managerial decision-making.',
    url: 'https://www.thecasecentre.org/',
  },
  {
    name: 'MIT Sloan Management Review',
    focus: 'Research & Practice',
    description: 'Evidence-based insights on management practices, economic strategy, and organizational behavior.',
    url: 'https://sloanreview.mit.edu/',
  },
];

const CaseBasedPlatforms = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.case-row'),
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
      id="case-platforms"
      ref={sectionRef}
      className="py-24 lg:py-32 px-4 lg:px-8 bg-background"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-h2 md:text-[2.5rem] font-medium mb-4 text-foreground">
            Case-Based & Managerial Application Platforms
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-body text-foreground max-w-3xl mx-auto">
            Learn from real-world business cases and strategic analyses that demonstrate economic principles in action.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-4">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`case-row grid md:grid-cols-3 gap-4 p-6 rounded-lg border border-border ${
                  index % 2 === 0 ? 'bg-neutral' : 'bg-card'
                } hover:shadow-md transition-all duration-300`}
              >
                <div className="md:col-span-1">
                  <h3 className="text-[1.125rem] font-medium text-foreground mb-1">{platform.name}</h3>
                  <p className="text-small text-secondary font-medium">{platform.focus}</p>
                </div>
                <div className="md:col-span-2 flex items-center justify-between gap-4">
                  <p className="text-body text-foreground">{platform.description}</p>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors flex-shrink-0"
                    aria-label={`Visit ${platform.name}`}
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

export default CaseBasedPlatforms;
