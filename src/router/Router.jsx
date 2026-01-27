import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import DetailsPage from "../pages/details/DetailsPage";

function Router() {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/details" element={<DetailsPage />} />
        </Routes>
    );
}

export default Router;
