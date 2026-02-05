import "./Level.css";

import { useNavigate, useParams } from "react-router-dom";

import { levels } from "../../data/constants";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import usePreloadAssets from "../../hooks/usePreloadAssets";

function Level() {
    const navigate = useNavigate();
    const { id } = useParams();
    const level = levels[levels.findIndex((l) => l.level === parseInt(id))];
    const pageAssetsLoaded = usePreloadAssets([level.imageUrl]);

    useEffect(() => {
        if (!pageAssetsLoaded) return;

        document.body.style.backgroundImage = `url(${level.imageUrl})`;
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [level.imageUrl, pageAssetsLoaded]);

    const handleDashboardClick = () => {
        navigate(`/levels/${level.level}/play`);
    };

    return (
        <>
            <Loader
                isLoading={!pageAssetsLoaded}
                text={"Entering your level..."}
            />
            <div
                className={`level-page-container app-fade-content ${
                    pageAssetsLoaded ? "content-visible" : ""
                }`}
            >
            <div className="level-form">
                <h1>
                    Welcome to <br /> Level {level.level}: {level.title}
                </h1>
                <h2>Where your journey begins</h2>
                <p>
                    Start your adventure with a quick intro, learn how the game
                    works, and get ready for a smooth, confident beginning.
                </p>
                <button className="login-button" onClick={handleDashboardClick}>
                    Let's get started
                </button>
            </div>
            </div>
        </>
    );
}

export default Level;
