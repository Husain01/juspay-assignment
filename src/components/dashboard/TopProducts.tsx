import { motion } from "framer-motion";

const products = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: "82",
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: "37",
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: "64",
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: "184",
    amount: "$3,680.00",
  },
  { name: "Marco Shoes", price: "$79.49", quantity: "64", amount: "$5,087.36" },
];

export function TopProducts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl p-6"
      style={{
        backgroundColor: "#F7F9FB",
        border: "1px solid rgba(28, 28, 28, 0.1)",
      }}
    >
      <div className="flex flex-col gap-4">
        {/* Title */}
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-[#1C1C1C]">
            Top Selling Products
          </h3>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr
                className="border-b"
                style={{ borderColor: "rgba(28, 28, 28, 0.1)" }}
              >
                <th
                  className="pb-3 text-left text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "rgba(28, 28, 28, 0.4)" }}
                >
                  Name
                </th>
                <th
                  className="pb-3 text-left text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "rgba(28, 28, 28, 0.4)" }}
                >
                  Price
                </th>
                <th
                  className="pb-3 text-left text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "rgba(28, 28, 28, 0.4)" }}
                >
                  Quantity
                </th>
                <th
                  className="pb-3 text-right text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "rgba(28, 28, 28, 0.4)" }}
                >
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <motion.tr
                  key={product.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b"
                  style={{ borderColor: "rgba(28, 28, 28, 0.1)" }}
                >
                  <td className="py-3 text-sm font-normal text-[#1C1C1C]">
                    {product.name}
                  </td>
                  <td className="py-3 text-sm font-normal text-[#1C1C1C]">
                    {product.price}
                  </td>
                  <td className="py-3 text-sm font-normal text-[#1C1C1C]">
                    {product.quantity}
                  </td>
                  <td className="py-3 text-right text-sm font-normal text-[#1C1C1C]">
                    {product.amount}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
