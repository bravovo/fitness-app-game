import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import "../../styles/pageTransitions.css";

function RouteTransition({ children }) {
    const location = useLocation();

    return (
        <Suspense fallback={<Loader isLoading={true} />}>
            <div className="page-enter" key={location.pathname}>
                {children}
            </div>
        </Suspense>
    );
}

export default RouteTransition;
