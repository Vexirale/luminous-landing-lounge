import { useState, useRef, MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  gradient: string;
  animationDelay: string;
}

const ProjectCard = ({ title, description, technologies, liveUrl, githubUrl, gradient, animationDelay }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateXValue = (mouseY / rect.height) * -20;
    const rotateYValue = (mouseX / rect.width) * 20;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <Card 
      ref={cardRef}
      className="glass-card border-0 animate-slide-in transition-all duration-300 ease-out cursor-pointer"
      style={{ 
        animationDelay,
        transform: isHovered 
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)` 
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        boxShadow: isHovered ? 'var(--shadow-glow)' : 'var(--shadow-card)'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardHeader>
        <div className={`h-32 rounded-lg bg-gradient-to-br ${gradient} mb-4 flex items-center justify-center overflow-hidden`}>
          <img 
            src="https://cdn.discordapp.com/attachments/1207129832572330044/1414233132168642621/image.png?ex=68bed2bd&is=68bd813d&hm=5ddfabcf84db8788d5e3250ac9f7613748b7754113d3f95886e08da6a70eb0b5&" 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      
      <CardContent>
        <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </CardDescription>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-3">
        <Button 
          variant="outline" 
          className="btn-social flex-1"
          asChild
        >
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            visit
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
