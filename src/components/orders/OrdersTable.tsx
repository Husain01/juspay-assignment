import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Order } from "@/store/useStore";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OrdersTableProps {
  orders: Order[];
}

const statusColors: Record<string, string> = {
  Complete: "bg-green-500/10 text-green-600 dark:text-green-400",
  Pending: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  Rejected: "bg-red-500/10 text-red-600 dark:text-red-400",
  "In Progress": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Approved: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
};

export function OrdersTable({ orders }: OrdersTableProps) {
  if (orders.length === 0) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <p className="text-muted-foreground">No orders found</p>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Project</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Actions</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order, index) => (
          <motion.tr
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group border-b transition-colors hover:bg-muted/50"
          >
            <TableCell className="font-medium">{order.orderId}</TableCell>
            <TableCell className="text-muted-foreground">
              {order.date}
            </TableCell>
            <TableCell>{order.user.name}</TableCell>
            <TableCell>
              <span
                className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${
                  statusColors[order.status]
                }`}
              >
                {order.status}
              </span>
            </TableCell>
            <TableCell className="font-medium">{order.project}</TableCell>
            <TableCell className="text-muted-foreground">
              {order.address}
            </TableCell>
            <TableCell className="text-muted-foreground">
              View Details
            </TableCell>
            <TableCell>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </TableCell>
          </motion.tr>
        ))}
      </TableBody>
    </Table>
  );
}
