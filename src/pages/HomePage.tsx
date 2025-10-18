import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Package } from 'lucide-react'
import { RevenueChart } from '@/components/charts/RevenueChart'
import { OrdersChart } from '@/components/charts/OrdersChart'
import { TopProducts } from '@/components/dashboard/TopProducts'
import { RecentOrders } from '@/components/dashboard/RecentOrders'

const stats = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    trend: 'up',
    icon: DollarSign,
  },
  {
    title: 'Orders',
    value: '2,345',
    change: '+15.3%',
    trend: 'up',
    icon: ShoppingCart,
  },
  {
    title: 'Customers',
    value: '1,234',
    change: '+8.5%',
    trend: 'up',
    icon: Users,
  },
  {
    title: 'Products',
    value: '456',
    change: '-2.4%',
    trend: 'down',
    icon: Package,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
    },
  },
}

export function HomePage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <motion.div key={stat.title} variants={itemVariants}>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-xs">
                  {stat.trend === 'up' ? (
                    <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
                  )}
                  <span
                    className={
                      stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }
                  >
                    {stat.change}
                  </span>
                  <span className="ml-1 text-muted-foreground">
                    from last month
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 md:grid-cols-2">
        <motion.div variants={itemVariants}>
          <RevenueChart />
        </motion.div>
        <motion.div variants={itemVariants}>
          <OrdersChart />
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="grid gap-4 md:grid-cols-2">
        <motion.div variants={itemVariants}>
          <TopProducts />
        </motion.div>
        <motion.div variants={itemVariants}>
          <RecentOrders />
        </motion.div>
      </div>
    </motion.div>
  )
}

