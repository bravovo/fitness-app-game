import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function LevelsLayout() {
    return (
        <div className="levels-layout">
            <Header />
            <Outlet />
        </div>
    );
}

export default LevelsLayout;
