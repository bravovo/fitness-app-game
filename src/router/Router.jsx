import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import InfoPage from "../pages/infoPage/InfoPage";
import ForgotPassword from "../pages/forgotPass/ForgotPassword";

function Router() {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/info" element={<InfoPage />} />
        </Routes>
    );
}

export default Router;
