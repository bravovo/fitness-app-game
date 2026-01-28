import React, { useState } from "react";
import "./RangeInput.css";

const RangeInput = ({
    initialValue = 75,
    min = 0,
    max = 300,
    onChange,
    title,
}) => {
    const [value, setValue] = useState(initialValue);

    const updateValue = (newValue) => {
        if (newValue >= min && newValue <= max) {
            setValue(newValue);
            onChange(newValue);
        }
    };

    const handleDecrement = (e) => {
        e.preventDefault();
        updateValue(value - 1);
    };

    const handleIncrement = (e) => {
        e.preventDefault();
        updateValue(value + 1);
    };

    const handleInputChange = (e) => {
        const val = parseInt(e.target.value, 10);
        if (!isNaN(val)) {
            if (val > max) updateValue(max);
            else updateValue(val);
        } else {
            setValue(min);
        }
    };

    return (
        <div className="value-control-container">
            <label className="value-label">{title}</label>
            <div className="value-input-wrapper">
                <button
                    className="value-btn"
                    onClick={handleDecrement}
                    disabled={value <= min}
                >
                    -
                </button>
                <input
                    type="number"
                    className="value-input"
                    value={value}
                    onChange={handleInputChange}
                    min={min}
                    max={max}
                />
                <button
                    className="value-btn"
                    onClick={handleIncrement}
                    disabled={value >= max}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default RangeInput;
