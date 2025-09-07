import { useState, useEffect } from 'react';

interface DiscordStatus {
  discord_user?: {
    id: string;
    username: string;
    avatar: string;
  };
  discord_status?: 'online' | 'idle' | 'dnd' | 'offline';
  activities?: Array<{
    name: string;
    type: number;
    details?: string;
    state?: string;
  }>;
}

interface LanyardData {
  success: boolean;
  data: DiscordStatus;
}

export const useDiscordStatus = (userId: string) => {
  const [data, setData] = useState<DiscordStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDiscordStatus = async () => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
        const result: LanyardData = await response.json();
        
        if (result.success) {
          setData(result.data);
        } else {
          setError('Failed to fetch Discord status');
        }
      } catch (err) {
        setError('Network error');
      } finally {
        setLoading(false);
      }
    };

    fetchDiscordStatus();
    
    // Refresh every 30 seconds
    const interval = setInterval(fetchDiscordStatus, 30000);
    
    return () => clearInterval(interval);
  }, [userId]);

  const getAvatarUrl = () => {
    if (!data?.discord_user?.avatar || !data?.discord_user?.id) return null;
    return `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png?size=256`;
  };

  const getStatusColor = () => {
    switch (data?.discord_status) {
      case 'online': return '#43b581';
      case 'idle': return '#faa61a';
      case 'dnd': return '#f04747';
      case 'offline': return '#747f8d';
      default: return '#747f8d';
    }
  };

  const getStatusText = () => {
    switch (data?.discord_status) {
      case 'online': return 'Online';
      case 'idle': return 'Away';
      case 'dnd': return 'Do Not Disturb';
      case 'offline': return 'Offline';
      default: return 'Unknown';
    }
  };

  return {
    data,
    loading,
    error,
    avatarUrl: getAvatarUrl(),
    statusColor: getStatusColor(),
    statusText: getStatusText(),
  };
};