import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, BookOpenIcon, FileTextIcon, VideoIcon, HeadphonesIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const resources = [
  {
    name: 'Principles of Economics (OpenStax)',
    type: 'Free Textbook',
    description: 'Comprehensive open-source economics textbook covering micro and macroeconomics with real-world applications.',
    icon: BookOpenIcon,
    url: 'https://openstax.org/details/books/principles-economics-2e',
  },
  {
    name: 'Marginal Revolution University',
    type: 'VideoIcon Courses',
    description: 'Free economics education through engaging videos covering principles, development, and econometrics.',
    icon: VideoIcon,
    url: 'https://mru.org/',
  },
  {
    name: 'EconTalk Podcast',
    type: 'Audio Learning',
    description: 'Weekly economics podcast featuring conversations with leading economists and thought leaders.',
    icon: HeadphonesIcon,
    url: 'https://www.econtalk.org/',
  },
  {
    name: 'The Economist Explainers',
    type: 'Articles & Analysis',
    description: 'In-depth explanations of economic concepts, current events, and business trends.',
    icon: FileTextIcon,
    url: 'https://www.economist.com/explainers',
  },
  {
    name: 'Core Economics',
    type: 'Interactive Textbook',
    description: 'Free online economics textbook with interactive graphs, quizzes, and real-world case studies.',
    icon: BookOpenIcon,
    url: 'https://www.core-econ.org/',
  },
  {
    name: 'Investopedia Economics',
    type: 'Reference Library',
    description: 'Comprehensive dictionary of economic terms, concepts, and practical business applications.',
    icon: FileTextIcon,
    url: 'https://www.investopedia.com/economics-4689800',
  },
];

const FreeResources = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.resource-card'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
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
      id="free-resources"
      ref={sectionRef}
      className="py-24 lg:py-32 px-4 lg:px-8 bg-background"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-h2 md:text-[2.5rem] font-medium mb-4 text-foreground">
            Free Resources, Texts & Explainers
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-body text-foreground max-w-3xl mx-auto">
            High-quality educational materials, textbooks, and learning resources available at no cost for self-directed study.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card
                key={index}
                className="resource-card hover:shadow-lg transition-all duration-300 hover:scale-[1.03] border-border bg-card"
              >
                <CardHeader>
                  <div className="mb-4 p-3 bg-tertiary/20 rounded-lg w-fit">
                    <Icon className="text-tertiary-foreground" size={32} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-[1.25rem] text-card-foreground">{resource.name}</CardTitle>
                  <CardDescription className="text-small text-secondary font-medium">
                    {resource.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-body text-card-foreground mb-6">{resource.description}</p>
                  <Button
                    asChild
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full font-normal"
                  >
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      Explore
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

export default FreeResources;
