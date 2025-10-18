import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Direct", value: 300.56, color: "#1C1C1C" },
  { name: "Affiliate", value: 135.18, color: "#BAEDBD" },
  { name: "Sponsored", value: 154.02, color: "#95A4FC" },
  { name: "E-mail", value: 48.96, color: "#B1E3FF" },
];

const TOTAL = data.reduce((sum, item) => sum + item.value, 0);

export function OrdersChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl bg-white p-6"
      style={{ border: "1px solid rgba(28, 28, 28, 0.1)" }}
    >
      <div className="mb-6">
        <h3 className="text-base font-semibold text-[#1C1C1C]">Total Sales</h3>
      </div>

      <div className="flex items-center justify-between">
        {/* Donut Chart */}
        <div className="relative" style={{ width: "200px", height: "200px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(28, 28, 28, 0.1)",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
                formatter={(value: number) => [`$${value.toFixed(2)}`, ""]}
              />
            </PieChart>
          </ResponsiveContainer>
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-semibold text-[#1C1C1C]">
              {((data[0].value / TOTAL) * 100).toFixed(1)}%
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-3 pl-6">
          {data.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded-sm"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-normal text-[#1C1C1C]">
                  {item.name}
                </span>
              </div>
              <span className="text-sm font-semibold text-[#1C1C1C]">
                ${item.value.toFixed(2)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
