import { motion } from "framer-motion";

const locations = [
  { city: "New York", revenue: "72K", percentage: 72, color: "#1C1C1C" },
  { city: "San Francisco", revenue: "39K", percentage: 39, color: "#A8C5DA" },
  { city: "Sydney", revenue: "25K", percentage: 25, color: "#E5ECF6" },
  { city: "Singapore", revenue: "61K", percentage: 61, color: "#E3F5FF" },
];

export function RevenueByLocation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl p-6"
      style={{
        backgroundColor: "#F7F9FB",
        border: "1px solid rgba(28, 28, 28, 0.1)",
      }}
    >
      <div className="flex flex-col gap-4">
        {/* Title */}
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-[#1C1C1C]">
            Revenue by Location
          </h3>
        </div>

        {/* Simplified World Map Representation */}
        <div
          className="relative flex items-center justify-center rounded-xl"
          style={{
            backgroundColor: "#FFFFFF",
            height: "120px",
          }}
        >
          {/* Map Dots representing locations */}
          <div className="relative h-full w-full">
            {/* New York - Right side, upper */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute"
              style={{ top: "30%", right: "25%" }}
            >
              <div className="relative">
                <div className="h-3 w-3 rounded-full bg-[#1C1C1C]" />
                <div className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-[#1C1C1C] opacity-30" />
              </div>
            </motion.div>

            {/* San Francisco - Right side, middle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute"
              style={{ top: "40%", right: "35%" }}
            >
              <div className="relative">
                <div className="h-3 w-3 rounded-full bg-[#A8C5DA]" />
                <div className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-[#A8C5DA] opacity-30" />
              </div>
            </motion.div>

            {/* Sydney - Left side, lower */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute"
              style={{ bottom: "25%", left: "30%" }}
            >
              <div className="relative">
                <div className="h-3 w-3 rounded-full bg-[#E5ECF6]" />
                <div className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-[#E5ECF6] opacity-30" />
              </div>
            </motion.div>

            {/* Singapore - Center-right, middle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute"
              style={{ top: "50%", left: "55%" }}
            >
              <div className="relative">
                <div className="h-3 w-3 rounded-full bg-[#E3F5FF]" />
                <div className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-[#E3F5FF] opacity-30" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Location List */}
        <div className="space-y-3">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-normal text-[#1C1C1C]">
                  {location.city}
                </span>
                <span className="text-sm font-semibold text-[#1C1C1C]">
                  {location.revenue}
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#FFFFFF]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${location.percentage}%` }}
                  transition={{ duration: 0.8, delay: 0.2 + 0.1 * index }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: location.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
