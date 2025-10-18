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
  { day: "Mon", currentWeek: 8500, previousWeek: 9800 },
  { day: "Tue", currentWeek: 9200, previousWeek: 10200 },
  { day: "Wed", currentWeek: 7800, previousWeek: 9500 },
  { day: "Thu", currentWeek: 8800, previousWeek: 9200 },
  { day: "Fri", currentWeek: 7600, previousWeek: 10100 },
  { day: "Sat", currentWeek: 7200, previousWeek: 8900 },
  { day: "Sun", currentWeek: 8100, previousWeek: 9300 },
];

export function RevenueChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl bg-white p-6"
      style={{ border: "1px solid rgba(28, 28, 28, 0.1)" }}
    >
      <div className="mb-6">
        <h3 className="text-base font-semibold text-[#1C1C1C]">Revenue</h3>
        <div className="mt-4 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#1C1C1C]" />
            <span
              className="text-xs font-normal"
              style={{ color: "rgba(28, 28, 28, 0.4)" }}
            >
              Current Week{" "}
              <span className="font-semibold text-[#1C1C1C]">$58,211</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#A8C5DA]" />
            <span
              className="text-xs font-normal"
              style={{ color: "rgba(28, 28, 28, 0.4)" }}
            >
              Previous Week{" "}
              <span className="font-semibold text-[#1C1C1C]">$68,768</span>
            </span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(28, 28, 28, 0.1)"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "rgba(28, 28, 28, 0.4)", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "rgba(28, 28, 28, 0.4)", fontSize: 12 }}
            tickFormatter={(value) => `${value / 1000}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(28, 28, 28, 0.1)",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
          />
          <Line
            type="monotone"
            dataKey="currentWeek"
            stroke="#1C1C1C"
            strokeWidth={2}
            dot={{ fill: "#1C1C1C", r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="previousWeek"
            stroke="#A8C5DA"
            strokeWidth={2}
            dot={{ fill: "#A8C5DA", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
