import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useState } from "react";

// Exact data from Figma design
const data = [
  { name: "Direct", value: 300.56, color: "#1C1C1C", percentage: 46.8 },
  { name: "Affilliate", value: 135.18, color: "#BAEDBD", percentage: 21.1 },
  { name: "Sponsored", value: 154.02, color: "#95A4FC", percentage: 24.0 },
  { name: "E-mail", value: 48.96, color: "#B1E3FF", percentage: 7.6 },
];

export function OrdersChart() {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);

  const handleMouseEnter = (data: any, index: number) => {
    setHoveredSegment(index);
  };

  const handleMouseLeave = () => {
    setHoveredSegment(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl w-full h-full"
      style={{
        backgroundColor: "#F7F9FB", // fill_EQKIYY
        border: "1px solid rgba(28, 28, 28, 0.1)",
        padding: "24px", // layout_9C8NXP padding
      }}
    >
      <div className="flex flex-col items-center gap-4 h-full">
        {/* Title - Exact Figma styling */}
        <div className="flex flex-col">
          <h3
            className="text-sm font-semibold text-[#1C1C1C]"
            style={{ fontSize: "14px", fontWeight: 600 }}
          >
            Total Sales
          </h3>
        </div>

        {/* Chart and Legend Container - Vertical layout */}
        <div className="flex flex-col items-center justify-center gap-6 w-full">
          {/* Donut Chart - Exact Figma dimensions */}
          <div
            className="relative flex-shrink-0 group cursor-pointer"
            style={{ width: "120px", height: "120px" }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={56}
                  paddingAngle={0}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      onMouseEnter={() => handleMouseEnter(entry, index)}
                      onMouseLeave={handleMouseLeave}
                    />
                  ))}
                </Pie>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0];
                      return (
                        <div
                          style={{
                            backgroundColor: "rgba(28, 28, 28, 0.8)",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "12px",
                            color: "#FFFFFF",
                            backdropFilter: "blur(40px)",
                            padding: "4px 8px",
                          }}
                        >
                          {data.payload?.percentage}%
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend - Compact layout to prevent overflow */}
          <div className="flex flex-col gap-3 w-full max-w-xs">
            {data.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between w-full"
                style={{ gap: "12px" }}
              >
                <div className="flex items-center" style={{ gap: "8px" }}>
                  <div
                    className="rounded-full flex-shrink-0"
                    style={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: item.color,
                    }}
                  />
                  <span
                    className="text-xs font-normal text-[#1C1C1C]"
                    style={{ fontSize: "12px", fontWeight: 400 }}
                  >
                    {item.name}
                  </span>
                </div>
                <span
                  className="text-xs font-normal text-[#1C1C1C] flex-shrink-0"
                  style={{ fontSize: "12px", fontWeight: 400 }}
                >
                  ${item.value.toFixed(2)}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
