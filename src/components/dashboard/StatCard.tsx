import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  isPositive: boolean;
}

export function StatCard({
  title,
  value,
  change,
  icon: Icon,
  iconColor,
  iconBgColor,
  isPositive,
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl bg-white p-6"
      style={{ border: "1px solid rgba(28, 28, 28, 0.1)" }}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p
            className="text-sm font-normal"
            style={{ color: "rgba(28, 28, 28, 0.4)" }}
          >
            {title}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-[#1C1C1C]">
            {value}
          </h3>
          <div className="mt-2 flex items-center gap-1">
            {isPositive ? (
              <TrendingUp className="h-3.5 w-3.5 text-green-600" />
            ) : (
              <TrendingDown className="h-3.5 w-3.5 text-red-600" />
            )}
            <span
              className={`text-xs font-normal ${
                isPositive ? "text-green-600" : "text-red-600"
              }`}
            >
              {change}
            </span>
          </div>
        </div>
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full"
          style={{ backgroundColor: iconBgColor }}
        >
          <Icon className="h-6 w-6" style={{ color: iconColor }} />
        </div>
      </div>
    </motion.div>
  );
}
