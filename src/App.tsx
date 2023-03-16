import { theme } from "antd";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { MainLayout } from "./layouts";
import { OrdersPage, ProductsPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "orders",
        element: <OrdersPage />,
      },
    ],
  },
]);

const App: React.FC = () => {
  const { token } = theme.useToken();

  return (
    <ThemeProvider theme={{ antd: { token } }}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
