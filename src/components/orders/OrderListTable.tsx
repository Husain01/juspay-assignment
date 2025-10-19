import { motion } from "framer-motion";
import { Check, MoreHorizontal, Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Order } from "@/store/useStore";

interface OrderListTableProps {
  orders: Order[];
  selectedOrders: string[];
  onToggleSelection: (orderId: string) => void;
}

const statusColors: Record<string, { bg: string; text: string; dot: string }> =
  {
    "In Progress": {
      bg: "bg-blue-500/10",
      text: "text-blue-600 dark:text-blue-400",
      dot: "bg-blue-500",
    },
    Complete: {
      bg: "bg-green-500/10",
      text: "text-green-600 dark:text-green-400",
      dot: "bg-green-500",
    },
    Pending: {
      bg: "bg-orange-500/10",
      text: "text-orange-600 dark:text-orange-400",
      dot: "bg-orange-500",
    },
    Approved: {
      bg: "bg-yellow-500/10",
      text: "text-yellow-600 dark:text-yellow-400",
      dot: "bg-yellow-500",
    },
    Rejected: {
      bg: "bg-red-500/10",
      text: "text-red-600 dark:text-red-400",
      dot: "bg-red-500",
    },
  };

export function OrderListTable({
  orders,
  selectedOrders,
  onToggleSelection,
}: OrderListTableProps) {
  if (orders.length === 0) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <p className="text-muted-foreground">No orders found</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Table Header */}
      <div className="grid grid-cols-7 gap-4 px-4 py-3 text-sm font-medium text-muted-foreground border-b border-border">
        <div className="flex items-center">
          <div className="w-4 h-4 border border-border rounded-sm" />
        </div>
        <div>Order ID</div>
        <div>User</div>
        <div>Project</div>
        <div>Address</div>
        <div>Date</div>
        <div>Status</div>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-border">
        {orders.map((order, index) => {
          const isSelected = selectedOrders.includes(order.id);
          const statusColor =
            statusColors[order.status] || statusColors["Pending"];

          return (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`grid grid-cols-7 gap-4 px-4 py-4 text-sm transition-colors hover:bg-muted/50 ${
                isSelected
                  ? "bg-foreground text-background"
                  : "bg-background text-foreground"
              }`}
            >
              {/* Checkbox */}
              <div className="flex items-center">
                <button
                  onClick={() => onToggleSelection(order.id)}
                  className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${
                    isSelected
                      ? "bg-foreground border-foreground text-background"
                      : "border-border hover:border-foreground"
                  }`}
                >
                  {isSelected && <Check className="h-3 w-3" />}
                </button>
              </div>

              {/* Order ID */}
              <div
                className={`font-medium ${
                  isSelected ? "text-background" : "text-foreground"
                }`}
              >
                {order.orderId}
              </div>

              {/* User */}
              <div className="flex items-center gap-2">
                <img
                  src={order.user.avatar}
                  alt={order.user.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span
                  className={isSelected ? "text-background" : "text-foreground"}
                >
                  {order.user.name}
                </span>
              </div>

              {/* Project */}
              <div
                className={isSelected ? "text-background" : "text-foreground"}
              >
                {order.project}
              </div>

              {/* Address */}
              <div className="flex items-center gap-2">
                <span
                  className={isSelected ? "text-background" : "text-foreground"}
                >
                  {order.address}
                </span>
                {order.address === "Nest Lane Olivette" && (
                  <FileText className="h-4 w-4 text-muted-foreground" />
                )}
              </div>

              {/* Date */}
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span
                  className={isSelected ? "text-background" : "text-foreground"}
                >
                  {order.date}
                </span>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${statusColor.dot}`} />
                <span
                  className={`${
                    isSelected ? "text-background" : statusColor.text
                  }`}
                >
                  {order.status}
                </span>
                {order.status === "Rejected" && (
                  <MoreHorizontal className="h-4 w-4 text-muted-foreground ml-auto" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
