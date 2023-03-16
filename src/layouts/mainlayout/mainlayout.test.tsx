import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MainLayout from "./index";

describe("MainLayout", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );

    expect(screen.getByTestId("main-layout")).toBeInTheDocument();
  });

  it("should toggle the sider when clicked", () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );

    const siderToggle = screen.getByTestId("sider-toggle");
    fireEvent.click(siderToggle);

    expect(screen.getByTestId("sider")).toHaveClass(
      "ant-layout-sider-collapsed"
    );

    fireEvent.click(siderToggle);

    expect(screen.getByTestId("sider")).not.toHaveClass(
      "ant-layout-sider-collapsed"
    );
  });

//   it("should render the correct menu items", () => {
//     render(
//       <MemoryRouter>
//         <MainLayout />
//       </MemoryRouter>
//     );

//     expect(screen.getByText("Pedidos")).toBeInTheDocument();
//     expect(screen.getByText("Produtos")).toBeInTheDocument();
//   });

//   it("should navigate to the correct route when menu item is clicked", () => {
//     render(
//       <MemoryRouter>
//         <MainLayout />
//       </MemoryRouter>
//     );

//     const produtosMenuItem = screen.getByText("Produtos");
//     fireEvent.click(produtosMenuItem);

//     expect(window.location.pathname).toBe("/products");
//   });

//   it("should render the correct breadcrumb items", () => {
//     render(
//       <MemoryRouter>
//         <MainLayout />
//       </MemoryRouter>
//     );

//     expect(screen.getByText("Produtos")).toBeInTheDocument();
//     expect(screen.getByText("Novo produto")).toBeInTheDocument();
//   });

//   it("should render the outlet correctly", () => {
//     render(
//       <MemoryRouter>
//         <MainLayout>
//           <div data-testid="outlet">Outlet content</div>
//         </MainLayout>
//       </MemoryRouter>
//     );

//     expect(screen.getByTestId("outlet")).toBeInTheDocument();
//   });
});
