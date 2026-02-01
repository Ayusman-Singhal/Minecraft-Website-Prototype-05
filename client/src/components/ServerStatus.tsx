import { useServerStats } from "@/hooks/use-content";
import { cn } from "@/lib/utils";
import { Users, Wifi } from "lucide-react";

export function ServerStatus({ className }: { className?: string }) {
  const { data: stats, isLoading } = useServerStats();

  if (isLoading || !stats) return (
    <div className={cn("animate-pulse h-12 bg-card/50 rounded", className)} />
  );

  const percentage = Math.min(100, Math.round((stats.onlinePlayers! / stats.maxPlayers!) * 100));

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-center justify-between text-xs font-display uppercase tracking-widest mb-1">
        <div className="flex items-center gap-2 text-secondary">
          <Wifi size={14} className={stats.serverStatus === 'online' ? "text-green-500" : "text-red-500"} />
          <span>{stats.serverStatus}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users size={14} />
          <span>{stats.onlinePlayers} / {stats.maxPlayers}</span>
        </div>
      </div>
      
      {/* Progress Bar Container */}
      <div className="h-4 bg-black/40 border-2 border-border relative overflow-hidden">
        {/* Progress Fill */}
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
        {/* Striped Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,rgba(255,255,255,.15)25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)50%,rgba(255,255,255,.15)75%,transparent_75%,transparent)] bg-[length:1rem_1rem]" />
      </div>
    </div>
  );
}
