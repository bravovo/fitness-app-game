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
const PlayGround = lazy(() => import("../pages/playGround/PlayGround"));
const Reward = lazy(() => import("../pages/reward/Reward"));
const Assignment = lazy(() => import("../pages/assignment/Assignment"));

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
                    <Route path=":id/play" element={<PlayGround />} />
                    <Route path=":id/reward" element={<Reward />} />
                    <Route path=":id/assignment" element={<Assignment />} />
                </Route>
                <Route path="*" element={<h2>404 | Page not found</h2>} />
            </Routes>
        </RouteTransition>
    );
}

export default Router;
