import { Button } from "@/components/ui/button";
import { Mail, Instagram } from "lucide-react";
import { FaDiscord, FaTiktok } from "react-icons/fa";
import { useDiscordStatus } from "@/hooks/useDiscordStatus";
import profilePhoto from "@/assets/profile-picture.jpg";

const ProfileSection = () => {
  const { avatarUrl, statusColor, statusText, loading } = useDiscordStatus('852601534759567410');
  
  const socialLinks = [
    { icon: Mail, href: "mailto:hello@example.com", label: "Email", isReactIcon: false },
    { icon: FaDiscord, href: "#", label: "Discord", isReactIcon: true },
    { icon: FaTiktok, href: "#", label: "TikTok", isReactIcon: true },
    { icon: Instagram, href: "#", label: "Instagram", isReactIcon: false }
  ];

  return (
    <div className="flex flex-col items-center text-center animate-scale-in">
      {/* Profile Photo */}
      <div className="relative mb-8">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden glass-card p-2">
          <img 
            src={avatarUrl || profilePhoto} 
            alt="Profile" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-70 animate-pulse" />
        
        {/* Discord Status Indicator */}
        {!loading && (
          <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
            <div 
              className="w-3 h-3 rounded-full animate-pulse" 
              style={{ backgroundColor: statusColor }}
            />
            <span className="text-xs text-white font-medium">{statusText}</span>
          </div>
        )}
      </div>

      {/* Name and Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 moving-gradient">
        vexirale
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-2">
        idk what to put here yet
      </p>
      <p className="text-lg text-muted-foreground/80 mb-8 max-w-md">
        im slow so i like when people explain stuff, 2008, something something
      </p>

      {/* Social Links */}
      <div className="flex flex-wrap gap-4 justify-center">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <Button
              key={social.label}
              variant="outline"
              size="lg"
              className="btn-social rounded-full p-3"
              asChild
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <Icon className="w-6 h-6" />
              </a>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileSection;
