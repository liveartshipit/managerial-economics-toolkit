import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import CoreLearningPlatforms from './components/CoreLearningPlatforms';
import InteractiveSimulators from './components/InteractiveSimulators';
import DecisionTools from './components/DecisionTools';
import BusinessSimulations from './components/BusinessSimulations';
import ConceptBuilders from './components/ConceptBuilders';
import RealWorldTools from './components/RealWorldTools';
import FreeResources from './components/FreeResources';
import AITools from './components/AITools';
import CaseBasedPlatforms from './components/CaseBasedPlatforms';
import LearningRoadmap from './components/LearningRoadmap';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <IntroductionSection />
          <CoreLearningPlatforms />
          <InteractiveSimulators />
          <DecisionTools />
          <BusinessSimulations />
          <ConceptBuilders />
          <RealWorldTools />
          <FreeResources />
          <AITools />
          <CaseBasedPlatforms />
          <LearningRoadmap />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
