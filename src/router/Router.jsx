import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

function Router() {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default Router;
