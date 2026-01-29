import "./LevelCard.css";

import timer from "/icons/header/timer.png";
import lock from "/icons/lock.svg";

function LevelCard({
    level,
    title,
    imageUrl,
    isAvalilable,
    children,
    onClick,
}) {
    return (
        <div
            className={`level-card-container ${
                isAvalilable ? "level-active" : ""
            }`}
            style={{
                backgroundImage: `url(${imageUrl})`,
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
