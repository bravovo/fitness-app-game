import { useRef } from "react";
import "./OneFieldForm.css";

import silhouette from "/images/silhouette.png";
import pencil from "/icons/pencil.svg";

import Tooltip from "../Tooltip/Tooltip";

function OneFieldForm({
    title,
    tooltip = "",
    onSubmit,
    value,
    setValue,
    onBackClick,
    placeholder,
    hasEdit = false,
    type = "text",
}) {
    const stageInputRef = useRef(null);

    return (
        <div className="stage2-container">
            <div className="stage2-main-content-container">
                <div className="form-container stage2-form-container">
                    <div className="form-text-container stage-text-container">
                        <h2>{title}</h2>
                        {tooltip.length > 0 && (
                            <Tooltip text={tooltip}>
                                <span className="stage-text-tooltip">i</span>
                            </Tooltip>
                        )}
                    </div>
                    {hasEdit ? (
                        <label className={`stage2-input-label`}>
                            <input
                                type={type}
                                value={value}
                                onChange={setValue}
                                placeholder="Enter your email"
                                className="stage2-input stage3-input"
                                required
                                disabled
                                ref={stageInputRef}
                            />
                            <button
                                className="stage3-button"
                                onClick={() => {
                                    stageInputRef.current.disabled = false;
                                    stageInputRef.current.focus();
                                }}
                            >
                                <img src={pencil} alt="Edit" />
                            </button>
                        </label>
                    ) : (
                        <label
                            className={`stage2-input-label ${
                                value.length > 20 && type !== "email"
                                    ? "input-error"
                                    : ""
                            }`}
                        >
                            <input
                                type={type}
                                value={value}
                                onChange={setValue}
                                placeholder={placeholder}
                                className="stage2-input"
                                required
                            />
                            <span>{value.length}/20</span>
                        </label>
                    )}
                </div>
                <div>
                    <img
                        src={silhouette}
                        alt="Silhouette"
                        className="info-page-image"
                    />
                </div>
            </div>
            <div className="stage-controls">
                <button className="back-button" onClick={onBackClick}>
                    Back
                </button>
                <button className="continue-button" onClick={onSubmit}>
                    Continue
                </button>
            </div>
        </div>
    );
}

export default OneFieldForm;
