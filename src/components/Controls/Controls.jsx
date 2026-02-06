import "./Controls.css";

function Controls({ onSubmit, onBack, buttonTitle = "", addStyles, isHiding }) {
    return (
        <div className={`controls ${isHiding ? "hide" : ""}`} style={addStyles}>
            <button className="back-button" onClick={onBack}>
                Back
            </button>
            <button className="continue-button" onClick={onSubmit}>
                {buttonTitle ? buttonTitle : "Continue"}
            </button>
        </div>
    );
}

export default Controls;
