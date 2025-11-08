import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IntroductionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.animate-in'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="introduction"
      ref={sectionRef}
      className="py-24 lg:py-32 px-4 lg:px-8 bg-neutral"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-in">
            <h2 className="text-h2 md:text-[2.25rem] font-medium mb-6 text-foreground">
              Your Complete MBA Economics Toolkit
            </h2>
            <p className="text-body mb-4 text-foreground">
              This comprehensive resource hub brings together the most powerful tools, simulators, and learning platforms for mastering Managerial Economics. Whether you're an MBA student, founder, or business professional, you'll find everything you need to understand economic decision-making in real-world contexts.
            </p>
            <p className="text-body mb-4 text-foreground">
              From interactive market simulations to AI-powered analytical tools, from foundational course platforms to advanced pricing models — this toolkit provides structured pathways for developing economic intuition and practical business acumen.
            </p>
            <p className="text-body text-foreground">
              Explore hands-on learning experiences that transform abstract economic concepts into actionable business strategies.
            </p>
          </div>
          <div className="animate-in">
            <img
              src="https://c.animaapp.com/mhqg2e9uqDvHEL/img/ai_2.png"
              alt="market network illustration"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
