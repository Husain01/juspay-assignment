import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { PageLayout } from "@/components/layout/PageLayout";
import { HomePage } from "@/pages/HomePage";
import { OrdersPage } from "@/pages/OrdersPage";

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "orders">("home");

  return (
    <ThemeProvider defaultTheme="light" storageKey="juspay-ui-theme">
      <PageLayout currentPage={currentPage} onNavigate={setCurrentPage}>
        {currentPage === "home" ? <HomePage /> : <OrdersPage />}
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;
