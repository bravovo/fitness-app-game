import "./BackAndPlay.css";

import arrow from "/icons/arrow-left.svg";

function BackAndPlay({ onBack, children, className }) {
    return (
        <div className="play-buttons">
            <button className="button-back" onClick={onBack}>
                <label htmlFor="" className="button-back-icon">
                    <img src={arrow} alt="Back" />
                </label>
                Back
            </button>
            <div className="level-buttons-container">
                <div className={`card-button-container ${className}`}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default BackAndPlay;
