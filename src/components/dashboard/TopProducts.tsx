import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'

const products = [
  { name: 'Wireless Headphones', sales: 2453, revenue: '$45,231', trend: '+12%' },
  { name: 'Smart Watch', sales: 1876, revenue: '$35,400', trend: '+8%' },
  { name: 'Laptop Stand', sales: 1543, revenue: '$28,900', trend: '+15%' },
  { name: 'Keyboard', sales: 1234, revenue: '$22,100', trend: '+5%' },
  { name: 'Mouse', sales: 987, revenue: '$18,200', trend: '+3%' },
]

export function TopProducts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between"
            >
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-muted-foreground">
                  {product.sales} sales
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">{product.revenue}</p>
                <p className="text-sm text-green-500">{product.trend}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

