import { useState } from "react";
import LandingPage from "@/components/LandingPage";
import PortfolioPage from "@/components/PortfolioPage";

const Index = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleEnterPortfolio = () => {
    setShowPortfolio(true);
  };

  return (
    <div className="min-h-screen">
      {!showPortfolio ? (
        <LandingPage onEnter={handleEnterPortfolio} />
      ) : (
        <PortfolioPage />
      )}
    </div>
  );
};

export default Index;
