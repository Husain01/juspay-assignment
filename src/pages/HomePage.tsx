import { motion } from "framer-motion";
import { StatCard } from "@/components/dashboard/StatCard";
import { ProjectionsChart } from "@/components/charts/ProjectionsChart";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { OrdersChart } from "@/components/charts/OrdersChart";
import { RevenueByLocation } from "@/components/charts/RevenueByLocation";
import { TopProducts } from "@/components/dashboard/TopProducts";

const stats = [
  {
    title: "Customers",
    value: "3,781",
    change: "+11.01%",
    iconBgColor: "#E3F5FF",
    isPositive: true,
  },
  {
    title: "Orders",
    value: "1,219",
    change: "-0.03%",
    iconBgColor: "#F7F9FB",
    isPositive: false,
  },
  {
    title: "Revenue",
    value: "$695",
    change: "+15.03%",
    iconBgColor: "#F7F9FB",
    isPositive: true,
  },
  {
    title: "Growth",
    value: "30.1%",
    change: "+6.08%",
    iconBgColor: "#E5ECF6",
    isPositive: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export function HomePage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* eCommerce Heading */}
      <motion.div variants={itemVariants}>
        <h1 className="text-sm font-semibold text-[#1C1C1C] px-2 py-1">
          eCommerce
        </h1>
      </motion.div>

      {/* Main Dashboard Grid - 4 columns */}
      <div className="grid grid-cols-4 gap-7">
        {/* First Row: Summary Cards (2x2 grid in first two columns) */}
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-7 h-full">
            <motion.div variants={itemVariants} className="h-full">
              <StatCard
                title={stats[0].title}
                value={stats[0].value}
                change={stats[0].change}
                iconBgColor={stats[0].iconBgColor}
                isPositive={stats[0].isPositive}
              />
            </motion.div>
            <motion.div variants={itemVariants} className="h-full">
              <StatCard
                title={stats[1].title}
                value={stats[1].value}
                change={stats[1].change}
                iconBgColor={stats[1].iconBgColor}
                isPositive={stats[1].isPositive}
              />
            </motion.div>
            <motion.div variants={itemVariants} className="h-full">
              <StatCard
                title={stats[2].title}
                value={stats[2].value}
                change={stats[2].change}
                iconBgColor={stats[2].iconBgColor}
                isPositive={stats[2].isPositive}
              />
            </motion.div>
            <motion.div variants={itemVariants} className="h-full">
              <StatCard
                title={stats[3].title}
                value={stats[3].value}
                change={stats[3].change}
                iconBgColor={stats[3].iconBgColor}
                isPositive={stats[3].isPositive}
              />
            </motion.div>
          </div>
        </div>

        {/* Second Row: Projections vs Actuals Chart (2 columns) */}
        <div className="col-span-2">
          <motion.div variants={itemVariants} className="h-full">
            <ProjectionsChart />
          </motion.div>
        </div>
        {/* Third Row: Revenue Chart (3:1) */}
        <div className="col-span-3">
          <motion.div variants={itemVariants} className="h-full">
            <RevenueChart />
          </motion.div>
        </div>
        <div className="col-span-1">
          <motion.div variants={itemVariants} className="h-full">
            <RevenueByLocation />
          </motion.div>
        </div>

        {/* Fifth Row: Top Selling Products (3:1) */}
        <div className="col-span-3">
          <motion.div variants={itemVariants}>
            <TopProducts />
          </motion.div>
        </div>

        {/* Sixth Row: Total Sales Donut Chart (3:1) */}
        <div className="col-span-1">
          <motion.div variants={itemVariants}>
            <OrdersChart />
          </motion.div>
        </div>
        <div className="col-span-1">{/* Empty space */}</div>
      </div>
    </motion.div>
  );
}