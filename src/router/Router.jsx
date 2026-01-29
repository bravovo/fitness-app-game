import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import RouteTransition from "../components/RouteTransition/RouteTransition";

const Login = lazy(() => import("../pages/login/Login"));
const Register = lazy(() => import("../pages/register/Register"));
const InfoPage = lazy(() => import("../pages/infoPage/InfoPage"));
const ForgotPassword = lazy(() => import("../pages/forgotPass/ForgotPassword"));
const Start = lazy(() => import("../pages/start/Start"));
const LevelsLayout = lazy(() =>
    import("../components/LevelsLayout/LevelsLayout")
);
const Level = lazy(() => import("../pages/level/Level"));

function Router() {
    return (
        <RouteTransition>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/info" element={<InfoPage />} />
                <Route path="levels" element={<LevelsLayout />}>
                    <Route index element={<Start />} />
                    <Route path=":id" element={<Level />} />
                </Route>
            </Routes>
        </RouteTransition>
    );
}

export default Router;
