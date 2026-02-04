import "./Controls.css";

function Controls({ onSubmit, onBack, buttonTitle = "", addStyles }) {
    return (
        <div className="controls" style={addStyles}>
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
