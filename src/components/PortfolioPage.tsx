import ProfileSection from "./ProfileSection";
import ProjectsSection from "./ProjectsSection";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Slow moving upward stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-muted-foreground/60 rounded-full portfolio-star"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Profile Section */}
        <section className="mb-20">
          <ProfileSection />
        </section>
        
        {/* Projects Section */}
        <section>
          <ProjectsSection />
        </section>
      </div>
    </div>
  );
};

export default PortfolioPage;