import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", currentWeek: 8500, previousWeek: 9800 },
  { month: "Feb", currentWeek: 9200, previousWeek: 10200 },
  { month: "Mar", currentWeek: 7800, previousWeek: 9500 },
  { month: "Apr", currentWeek: 8800, previousWeek: 9200 },
  { month: "May", currentWeek: 7600, previousWeek: 10100 },
  { month: "Jun", currentWeek: 7200, previousWeek: 8900 },
];

export function RevenueChart() {
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
        {/* Header with Title and Legend */}
        <div className="flex flex-col gap-4">
          {/* Title */}
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-[#1C1C1C]">Revenue</h3>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#1C1C1C]" />
              <span className="text-xs font-normal text-[#1C1C1C]">
                Current Week <span className="font-semibold">$58,211</span>
              </span>
            </div>
            <span className="text-sm font-normal text-[rgba(28,28,28,0.2)]">
              |
            </span>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#1C1C1C]" />
              <span className="text-xs font-normal text-[#1C1C1C]">
                Previous Week <span className="font-semibold">$68,768</span>
              </span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="flex flex-row gap-4">
          {/* Left Text (Y-axis labels) */}
          <div className="flex flex-col justify-between text-xs font-normal text-[rgba(28,28,28,0.4)]">
            <div>30M</div>
            <div>20M</div>
            <div>10M</div>
            <div>0</div>
          </div>

          {/* Chart Area */}
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(28, 28, 28, 0.1)"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "rgba(28, 28, 28, 0.4)", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "rgba(28, 28, 28, 0.4)", fontSize: 12 }}
                  tickFormatter={(value) => `${value / 1000}k`}
                  domain={[0, 30000]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(28, 28, 28, 0.1)",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                  formatter={(value: number) => [
                    `$${value.toLocaleString()}`,
                    "",
                  ]}
                />
                <Line
                  type="monotone"
                  dataKey="currentWeek"
                  stroke="#1C1C1C"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="previousWeek"
                  stroke="#1C1C1C"
                  strokeWidth={3}
                  strokeDasharray="3 10"
                  dot={false}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
