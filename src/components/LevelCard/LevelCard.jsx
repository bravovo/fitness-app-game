import "./LevelCard.css";

import timer from "/icons/header/timer.png";
import lock from "/icons/lock.svg";
import usePreloadAssets from "../../hooks/usePreloadAssets";

function LevelCard({
    level,
    title,
    imageUrl,
    isAvalilable,
    children,
    onClick,
}) {
    const cardImageLoaded = usePreloadAssets([imageUrl]);

    return (
        <div
            className={`level-card-container ${
                isAvalilable ? "level-active" : ""
            } ${cardImageLoaded ? "card-ready" : ""}`}
            style={{
                backgroundImage: cardImageLoaded ? `url(${imageUrl})` : "none",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
            onClick={onClick}
        >
            <img
                src={isAvalilable ? timer : lock}
                alt="Availability"
                className={`${
                    isAvalilable ? "absolute-timer-icon" : "absolute-lock-icon"
                }`}
            />
            <div
                className={`level-card-text ${
                    isAvalilable ? "card-text-active" : ""
                }`}
            >
                <p>Level {level}</p>
                <h1>{title}</h1>
            </div>
            <div className="level-card-buttons">
                <div className="card-button-container">{children}</div>
            </div>
            {!isAvalilable && <div className="card-overlay"></div>}
        </div>
    );
}

export default LevelCard;
