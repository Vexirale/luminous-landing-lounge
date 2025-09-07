import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage = ({ onEnter }: LandingPageProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleEnter = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onEnter();
    }, 800);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-1000 bg-black ${
      isAnimating ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
    }`}>
      {/* Moving white stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full moving-star"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 animate-fade-in-up">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-bold mb-4 moving-gradient">
            vexirale
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-8">
            discover me and my projects
          </p>
        </div>
        
        <Button 
          onClick={handleEnter}
          size="lg"
          className="bg-white text-black hover:bg-white/90 text-lg px-8 py-4 rounded-full font-semibold group transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
          disabled={isAnimating}
        >
          enter
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
        
        <p className="text-sm text-white/50 mt-6 opacity-70">
          click to enter
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
