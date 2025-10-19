import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "@/components/theme-provider";

const data = [
  { month: "Jan", actuals: 16, projections: 4 },
  { month: "Feb", actuals: 20, projections: 5 },
  { month: "Mar", actuals: 17, projections: 4 },
  { month: "Apr", actuals: 21, projections: 6 },
  { month: "May", actuals: 14, projections: 3 },
  { month: "Jun", actuals: 19, projections: 5 },
];

export function ProjectionsChart() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl p-4 w-full h-full"
      style={{
        backgroundColor: isDark ? "rgba(255, 255, 255, 0.05)" : "#F7F9FB",
        border: isDark
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "1px solid rgba(28, 28, 28, 0.1)",
      }}
    >
      <div className="flex flex-col gap-2 h-full">
        {/* Title */}
        <div className="flex flex-col">
          <h3
            className={`text-sm font-semibold ${
              isDark ? "text-white" : "text-[#1C1C1C]"
            }`}
          >
            Projections vs Actuals
          </h3>
        </div>

        {/* Chart */}
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              barGap={4}
              margin={{ top: 10, right: 10, left: -20, bottom: -10 }}
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
                  fill: isDark
                    ? "rgba(255, 255, 255, 0.4)"
                    : "rgba(28, 28, 28, 0.4)",
                  fontSize: 12,
                  fontWeight: 400,
                }}
                interval={0}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: isDark
                    ? "rgba(255, 255, 255, 0.4)"
                    : "rgba(28, 28, 28, 0.4)",
                  fontSize: 12,
                  fontWeight: 400,
                }}
                domain={[0, 30]}
                tickFormatter={(value) => `${value}M`}
                ticks={[0, 10, 20, 30]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(28, 28, 28, 0.1)",
                  borderRadius: "8px",
                  fontSize: "12px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                formatter={(value: number, name: string) => [
                  `${value}M`,
                  name === "actuals" ? "Actuals" : "Projections",
                ]}
              />
              <Bar
                dataKey="actuals"
                stackId="a"
                fill="#A8C5DA"
                radius={[0, 0, 2, 2]}
                maxBarSize={24}
              />
              <Bar
                dataKey="projections"
                stackId="a"
                fill="#A8C5DA"
                fillOpacity={0.5}
                radius={[2, 2, 0, 0]}
                maxBarSize={24}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}
