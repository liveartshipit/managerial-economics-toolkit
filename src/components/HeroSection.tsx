import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowDownIcon } from 'lucide-react';

const HeroSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.3,
        }
      );
    }
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById('introduction');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://c.animaapp.com/mhqg2e9uqDvHEL/img/ai_1-poster.png"
        >
          <source src="https://c.animaapp.com/mhqg2e9uqDvHEL/img/ai_1.mp4" type="video/mp4" />
        </video>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/60 to-primary"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 lg:px-8">
        <div ref={contentRef} className="text-center max-w-5xl mx-auto">
          <h1 className="text-h1 md:text-[3.5rem] lg:text-[4rem] font-medium mb-6 text-neutral">
            Managerial Economics — Tools, Simulators & Learning Resources
          </h1>
          <p className="text-h3 md:text-[1.75rem] mb-8 text-neutral font-light max-w-3xl mx-auto">
            Master economic decision-making with interactive tools, real-world simulations, and comprehensive learning resources designed for MBA students and professionals.
          </p>
          <Button
            onClick={scrollToContent}
            className="bg-tertiary text-tertiary-foreground hover:bg-tertiary/90 text-button uppercase px-8 py-6 font-normal"
            size="lg"
          >
            Explore Toolkit
            <ArrowDownIcon className="ml-2" size={20} strokeWidth={1.5} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
