import { useEffect, useRef, useState } from "react";
import "./OneFieldForm.css";

import pencil from "/icons/pencil.svg";

import Tooltip from "../Tooltip/Tooltip";
import SilhouetteImg from "../SilhouetteImg/SilhouetteImg";
import Controls from "../Controls/Controls";

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
    const [isEditing, setIsEditing] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditing) {
            inputRef.current?.focus();
        }
    }, [isEditing]);

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
                                disabled={!isEditing}
                                ref={inputRef}
                            />
                            <button
                                className="stage3-button"
                                type="button"
                                onClick={() => setIsEditing(true)}
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
                <SilhouetteImg />
            </div>
            <Controls onSubmit={onSubmit} onBack={onBackClick} />
        </div>
    );
}

export default OneFieldForm;
