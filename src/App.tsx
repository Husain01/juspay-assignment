import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { PageLayout } from "@/components/layout/PageLayout";
import { HomePage } from "@/pages/HomePage";
import { OrderListPage } from "@/pages/OrderListPage";

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "orders">("home");

  return (
    <ThemeProvider defaultTheme="system" storageKey="juspay-ui-theme">
      <PageLayout currentPage={currentPage} onNavigate={setCurrentPage}>
        {currentPage === "home" ? <HomePage /> : <OrderListPage />}
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;
