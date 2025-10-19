import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function NavLink({ icon: Icon, label, active, onClick }: NavLinkProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className={cn(
        "relative w-full flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-normal transition-colors",
        active
          ? "bg-accent text-accent-foreground"
          : "text-foreground hover:bg-accent"
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </motion.button>
  );
}
