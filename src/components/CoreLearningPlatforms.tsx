import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, BookOpenIcon, GraduationCapIcon, TrendingUpIcon, UsersIcon, AwardIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const platforms = [
  {
    name: 'Khan Academy Economics',
    focus: 'Microeconomics & Macroeconomics Fundamentals',
    description: 'Free comprehensive courses covering supply and demand, market structures, GDP, inflation, and monetary policy with interactive exercises.',
    icon: BookOpenIcon,
    url: 'https://www.khanacademy.org/economics-finance-domain',
  },
  {
    name: 'Coursera Business Economics',
    focus: 'MBA-Level Economic Analysis',
    description: 'University-backed courses from top institutions covering managerial economics, game theory, and strategic decision-making.',
    icon: GraduationCapIcon,
    url: 'https://www.coursera.org/courses?query=managerial%20economics',
  },
  {
    name: 'edX Economics Programs',
    focus: 'Applied Economics & Data Analysis',
    description: 'Professional certificates and MicroMasters programs in economics, econometrics, and business analytics from leading universities.',
    icon: TrendingUpIcon,
    url: 'https://www.edx.org/learn/economics',
  },
  {
    name: 'MIT OpenCourseWare',
    focus: 'Advanced Economic Theory',
    description: 'Free access to MIT course materials including lectures, problem sets, and exams for microeconomic theory and industrial organization.',
    icon: AwardIcon,
    url: 'https://ocw.mit.edu/courses/economics/',
  },
  {
    name: 'LinkedIn Learning Economics',
    focus: 'Business Economics Skills',
    description: 'Practical courses on economic thinking for business leaders, pricing strategies, and market analysis for professionals.',
    icon: UsersIcon,
    url: 'https://www.linkedin.com/learning/topics/economics',
  },
];

const CoreLearningPlatforms = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.card-animate'),
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
      id="core-platforms"
      ref={sectionRef}
      className="py-24 lg:py-32 px-4 lg:px-8 bg-background"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-h2 md:text-[2.5rem] font-medium mb-4 text-foreground">
            Core Learning Platforms
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-body text-foreground max-w-3xl mx-auto">
            Start your economics journey with these foundational course platforms offering structured learning paths from basic principles to advanced theory.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <Card
                key={index}
                className="card-animate hover:shadow-lg transition-all duration-300 hover:scale-[1.03] border-border bg-card"
              >
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                    <Icon className="text-primary" size={32} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-h3 text-card-foreground">{platform.name}</CardTitle>
                  <CardDescription className="text-small text-secondary font-medium">
                    {platform.focus}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-body text-card-foreground mb-6">{platform.description}</p>
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
                      Learn More
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

export default CoreLearningPlatforms;
