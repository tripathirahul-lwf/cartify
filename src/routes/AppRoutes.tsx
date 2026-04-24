import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import PrivateRoute from "./PrivateRoutes";
import MainLayout from "../components/MainLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes */}
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <MainLayout>
                <Products />
              </MainLayout>
            </PrivateRoute>
          }
        />
        
        {/* Public with Layout */}
        <Route
          path="/cart"
          element={
            <MainLayout>
              <Cart />
            </MainLayout>
          }
        />
        
        {/* Default redirect */}
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;