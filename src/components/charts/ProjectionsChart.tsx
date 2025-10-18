import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", projections: 20000000, actuals: 18000000 },
  { month: "Feb", projections: 22000000, actuals: 20000000 },
  { month: "Mar", projections: 25000000, actuals: 23000000 },
  { month: "Apr", projections: 23000000, actuals: 21000000 },
  { month: "May", projections: 28000000, actuals: 26000000 },
  { month: "Jun", projections: 26000000, actuals: 24000000 },
];

export function ProjectionsChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl bg-white p-6"
      style={{ border: "1px solid rgba(28, 28, 28, 0.1)" }}
    >
      <div className="mb-6">
        <h3 className="text-base font-semibold text-[#1C1C1C]">
          Projections vs Actuals
        </h3>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barGap={8}>
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
            tickFormatter={(value) => `${value / 1000000}M`}
            domain={[0, 30000000]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(28, 28, 28, 0.1)",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            formatter={(value: number) => [`${value}M`, ""]}
          />
          <Legend
            wrapperStyle={{ paddingTop: "20px" }}
            iconType="circle"
            iconSize={8}
            formatter={(value) => (
              <span style={{ color: "#1C1C1C", fontSize: "12px" }}>
                {value === "projections" ? "Projections" : "Actuals"}
              </span>
            )}
          />
          <Bar
            dataKey="projections"
            fill="#A8C5DA"
            radius={[8, 8, 0, 0]}
            barSize={20}
          />
          <Bar
            dataKey="actuals"
            fill="#1C1C1C"
            radius={[8, 8, 0, 0]}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
