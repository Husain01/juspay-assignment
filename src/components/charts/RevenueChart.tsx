import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Exact data from Figma analysis
const data = [
  { month: "Jan", currentWeek: 12, previousWeek: 6 },
  { month: "Feb", currentWeek: 8, previousWeek: 17 },
  { month: "Mar", currentWeek: 7, previousWeek: 12 },
  { month: "Apr", currentWeek: 16, previousWeek: 10 },
  { month: "May", currentWeek: 19, previousWeek: 18 },
  { month: "Jun", currentWeek: 18.5, previousWeek: 22 },
];

export function RevenueChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl w-full h-full col-span-3 col-start-1"
      style={{
        backgroundColor: "#F7F9FB", // fill_NTW6P5
        border: "1px solid rgba(28, 28, 28, 0.1)",
        padding: "24px", // layout_AZW9ST padding
        // width: "662px", // layout_AZW9ST width
        // height: "318px", // layout_AZW9ST height
      }}
    >
      <div className="flex flex-col gap-4 h-full">
        {/* Header with Title and Legend - Exact Figma Layout */}
        <div className="flex items-center gap-4">
          {/* Title */}
          <div className="flex flex-col">
            <h3
              className="text-sm font-semibold text-[#1C1C1C]"
              style={{ fontSize: "14px", fontWeight: 600 }}
            >
              Revenue
            </h3>
          </div>

          {/* Separator */}
          <span
            className="text-sm font-normal"
            style={{ color: "rgba(28, 28, 28, 0.2)", fontSize: "14px" }}
          >
            |
          </span>

          {/* Current Week Tag */}
          <div
            className="flex items-center gap-2"
            style={{ padding: "2px 8px 2px 4px" }}
          >
            <div className="w-4 h-4 bg-[#1C1C1C] rounded-full"></div>
            <span
              className="text-xs font-normal text-[#1C1C1C]"
              style={{ fontSize: "12px" }}
            >
              Current Week <span className="font-semibold">$58,211</span>
            </span>
          </div>

          {/* Previous Week Tag */}
          <div
            className="flex items-center gap-2"
            style={{ padding: "2px 8px 2px 4px" }}
          >
            <div className="w-4 h-4 bg-[#A8C5DA] rounded-full"></div>
            <span
              className="text-xs font-normal text-[#1C1C1C]"
              style={{ fontSize: "12px" }}
            >
              Previous Week <span className="font-semibold">$68,768</span>
            </span>
          </div>
        </div>

        {/* Chart */}
        <div style={{ height: "232px", width: "100%" }}>
          <ResponsiveContainer width="100%" height={232}>
            <LineChart
              data={data}
              margin={{ top: 20, right: 20, left: -20, bottom: 20 }}
            >
              <CartesianGrid
                strokeDasharray="1 1"
                stroke="rgba(28, 28, 28, 0.05)"
                vertical={false}
                horizontal={true}
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "rgba(28, 28, 28, 0.4)",
                  fontSize: 12,
                  fontWeight: 400,
                }}
                interval={0}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "rgba(28, 28, 28, 0.4)",
                  fontSize: 12,
                  fontWeight: 400,
                }}
                domain={[0, 30]}
                ticks={[0, 10, 20, 30]}
                tickFormatter={(value) => (value === 0 ? "0" : `${value}M`)}
              />
              <Line
                type="monotone"
                dataKey="currentWeek"
                stroke="#1C1C1C"
                strokeWidth={3}
                dot={{
                  fill: "#FFFFFF",
                  stroke: "#1C1C1C",
                  strokeWidth: 1,
                  r: 4,
                }}
                activeDot={{ r: 6, fill: "#1C1C1C" }}
                connectNulls={false}
              />
              <Line
                type="monotone"
                dataKey="previousWeek"
                stroke="#A8C5DA"
                strokeWidth={3}
                strokeDasharray="3 10"
                dot={false}
                activeDot={{ r: 6, fill: "#A8C5DA" }}
                connectNulls={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}
