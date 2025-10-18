import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const orders = [
  { id: 'ORD-1001', customer: 'John Doe', amount: '$234.00', status: 'Completed' },
  { id: 'ORD-1002', customer: 'Jane Smith', amount: '$156.00', status: 'Pending' },
  { id: 'ORD-1003', customer: 'Bob Johnson', amount: '$389.00', status: 'Completed' },
  { id: 'ORD-1004', customer: 'Alice Williams', amount: '$445.00', status: 'Shipped' },
  { id: 'ORD-1005', customer: 'Charlie Brown', amount: '$178.00', status: 'Processing' },
]

const statusColors: Record<string, string> = {
  Completed: 'bg-green-500/10 text-green-500',
  Pending: 'bg-yellow-500/10 text-yellow-500',
  Shipped: 'bg-blue-500/10 text-blue-500',
  Processing: 'bg-purple-500/10 text-purple-500',
}

export function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarFallback>
                    {order.customer.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{order.customer}</p>
                  <p className="text-xs text-muted-foreground">{order.id}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{order.amount}</p>
                <span
                  className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                    statusColors[order.status]
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

