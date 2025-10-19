import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";

// Exact data from Figma analysis
const locations = [
  { name: "New York", revenue: "72K", percentage: 100 },
  { name: "Singapore", revenue: "61K", percentage: 85 },
  { name: "San Francisco", revenue: "39K", percentage: 54 },
  { name: "Sydney", revenue: "25K", percentage: 35 },
];

export function RevenueByLocation() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl w-full h-full"
      style={{
        backgroundColor: isDark ? "rgba(255, 255, 255, 0.05)" : "#F7F9FB",
        border: isDark
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "1px solid rgba(28, 28, 28, 0.1)",
        padding: "24px",
      }}
    >
      <div className="flex flex-col gap-4 h-full">
        {/* Title */}
        <div className="flex flex-col">
          <h3
            className="text-sm font-semibold"
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: isDark ? "#f8fafc" : "#1C1C1C",
            }}
          >
            Revenue by Location
          </h3>
        </div>

        {/* World Map */}
        <div className="relative" style={{ height: "82px", width: "100%" }}>
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            {/* Exact Figma World Map */}
            <img
              src="/world-map.png"
              alt="World Map"
              className="w-full h-full object-cover"
              style={{ opacity: 0.5 }}
            />
          </div>
        </div>

        {/* Location List */}
        <div className="space-y-3">
          {locations.map((location) => (
            <div key={location.name} className="flex flex-col gap-1">
              {/* Location Name and Revenue */}
              <div className="flex justify-between items-center">
                <span
                  className="text-xs font-normal"
                  style={{
                    fontSize: "12px",
                    color: isDark ? "#f8fafc" : "#1C1C1C",
                  }}
                >
                  {location.name}
                </span>
                <span
                  className="text-xs font-normal"
                  style={{
                    fontSize: "12px",
                    color: isDark ? "#f8fafc" : "#1C1C1C",
                  }}
                >
                  {location.revenue}
                </span>
              </div>

              {/* Progress Bar - Exact Figma gradient */}
              <div
                className="w-full rounded-full"
                style={{
                  height: "4px",
                  backgroundColor: isDark ? "#0f172a" : "#FFFFFF",
                  padding:
                    location.name === "New York"
                      ? "0px 40px 0px 0px"
                      : location.name === "Singapore"
                      ? "0px 60px 0px 0px"
                      : location.name === "San Francisco"
                      ? "0px 90px 0px 0px"
                      : "0px 80px 0px 0px", // Sydney
                }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${location.percentage}%`,
                    background: "#A8C5DA",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
