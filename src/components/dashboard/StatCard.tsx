import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  iconBgColor: string;
  isPositive: boolean;
}

export function StatCard({
  title,
  value,
  change,
  iconBgColor,
  isPositive,
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl p-6"
      style={{
        backgroundColor: iconBgColor,
        border: "1px solid rgba(28, 28, 28, 0.1)",
      }}
    >
      <div className="flex flex-col gap-2">
        {/* Title */}
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-[#1C1C1C]">{title}</h3>
        </div>

        {/* Value and Change Row */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-[#1C1C1C]">{value}</h2>
          </div>

          {/* Change with Icon */}
          <div className="flex items-center gap-1">
            {isPositive ? (
              <TrendingUp className="h-4 w-4 text-[#1C1C1C]" />
            ) : (
              <TrendingDown className="h-4 w-4 text-[#1C1C1C]" />
            )}
            <span className="text-xs font-normal text-[#1C1C1C]">{change}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
