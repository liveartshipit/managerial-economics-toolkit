import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Platforms', id: 'core-platforms' },
    { label: 'Simulators', id: 'simulators' },
    { label: 'Tools', id: 'decision-tools' },
    { label: 'Resources', id: 'free-resources' },
    { label: 'Roadmap', id: 'learning-roadmap' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg' : 'bg-primary/95'
      }`}
      style={{ minHeight: '64px' }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-h3 font-medium text-primary-foreground hover:text-tertiary transition-colors cursor-pointer"
          >
            MBA Economics Toolkit
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-6">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-body text-primary-foreground hover:text-tertiary transition-colors cursor-pointer px-3 py-2"
                    >
                      {item.label}
                    </button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button
              onClick={() => scrollToSection('core-platforms')}
              className="bg-tertiary text-tertiary-foreground hover:bg-tertiary/90 font-normal"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile MenuIcon Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-primary-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <XIcon size={32} /> : <MenuIcon size={32} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-primary border-t border-primary-foreground/20 py-4">
            <NavigationMenu className="w-full">
              <NavigationMenuList className="flex flex-col gap-2 w-full">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.id} className="w-full">
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-body text-primary-foreground hover:text-tertiary transition-colors cursor-pointer px-4 py-3 w-full text-left"
                    >
                      {item.label}
                    </button>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem className="w-full px-4 pt-2">
                  <Button
                    onClick={() => scrollToSection('core-platforms')}
                    className="bg-tertiary text-tertiary-foreground hover:bg-tertiary/90 w-full font-normal"
                  >
                    Get Started
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
