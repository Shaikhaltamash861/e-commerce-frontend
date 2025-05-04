
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import Login from "@/pages/auth/Login";
import Dashboard from "@/pages/Dashboard";
import Products from "@/pages/Products";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Auth Routes */}
                <Route path="/" element={<MainLayout />}>
                    <Route path="" element={<Dashboard/>}/>
                    <Route path="/products" element={<Products/>}/>

                </Route>
                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="" element={<Login />} />
                </Route>


            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute;