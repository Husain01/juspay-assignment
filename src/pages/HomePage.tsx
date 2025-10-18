import { motion } from "framer-motion";
import { Users, ShoppingBag, DollarSign, TrendingUp } from "lucide-react";
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
    icon: Users,
    iconColor: "#1C1C1C",
    iconBgColor: "#E3F5FF",
    isPositive: true,
  },
  {
    title: "Orders",
    value: "1,219",
    change: "-0.03%",
    icon: ShoppingBag,
    iconColor: "#1C1C1C",
    iconBgColor: "#F7F9FB",
    isPositive: false,
  },
  {
    title: "Revenue",
    value: "$695",
    change: "+15.03%",
    icon: DollarSign,
    iconColor: "#1C1C1C",
    iconBgColor: "#E5ECF6",
    isPositive: true,
  },
  {
    title: "Growth",
    value: "30.1%",
    change: "+6.08%",
    icon: TrendingUp,
    iconColor: "#1C1C1C",
    iconBgColor: "#E3F5FF",
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
      {/* eCommerce Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <motion.div key={stat.title} variants={itemVariants}>
            <StatCard
              title={stat.title}
              value={stat.value}
              change={stat.change}
              icon={stat.icon}
              iconColor={stat.iconColor}
              iconBgColor={stat.iconBgColor}
              isPositive={stat.isPositive}
            />
          </motion.div>
        ))}
      </div>

      {/* Projections vs Actuals Chart */}
      <motion.div variants={itemVariants}>
        <ProjectionsChart />
      </motion.div>

      {/* Revenue & Total Sales Row */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={itemVariants}>
          <RevenueChart />
        </motion.div>
        <motion.div variants={itemVariants}>
          <OrdersChart />
        </motion.div>
      </div>

      {/* Revenue by Location & Top Products Row */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={itemVariants}>
          <RevenueByLocation />
        </motion.div>
        <motion.div variants={itemVariants}>
          <TopProducts />
        </motion.div>
      </div>
    </motion.div>
  );
}
