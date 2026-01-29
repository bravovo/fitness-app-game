import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

function LevelsLayout() {
    return (
        <div className="levels-layout">
            <Header />
            <Suspense fallback={<Loader isLoading={true} />}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default LevelsLayout;
