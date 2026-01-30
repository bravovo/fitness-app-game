import { useNavigate } from "react-router-dom";
import "./Assignment.css";

import arrow from "/icons/arrow-left.svg";
import button from "/images/levels/button.png";
import taskBoard from "/images/levels/task-board.png";
import { useRef, useState } from "react";
import { user } from "../../data/constants";

function Assignment() {
    const submitBtnRef = useRef(null);
    const [assignmentData, setAssignmentData] = useState({
        q1: "",
        q2: "",
        q3: "",
    });
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (
            assignmentData.q1.trim() &&
            assignmentData.q2.trim() &&
            assignmentData.q3.trim()
        ) {
            user.assignment = { ...assignmentData };
        } else {
            alert("Please answer all questions.");
            return;
        }
        console.log("Assignment submitted:", user);
    };

    const isSubmitDisabled =
        !assignmentData.q1.trim() ||
        !assignmentData.q2.trim() ||
        !assignmentData.q3.trim();

    return (
        <div className="level-page-container assignment-page-container">
            <div className="play-buttons">
                <button
                    className="button-back assignment-button-back"
                    onClick={() => navigate(-1)}
                >
                    <label htmlFor="" className="button-back-icon">
                        <img src={arrow} alt="Back" />
                    </label>
                    Back
                </button>
                <div className="level-buttons-container">
                    <div className="card-button-container assignment-button-container">
                        <button className="level-button">
                            <img
                                src={button}
                                alt=""
                                className="level-button-img"
                            />
                        </button>
                        <button className="level-button assignment-button">
                            <img
                                src={taskBoard}
                                alt=""
                                className="level-button-img"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className="assignment-form-container">
                <form className="assignment-form" onSubmit={handleFormSubmit}>
                    <div className="assignment-form-text">
                        <h2>Assesment title goes here</h2>
                        <p>
                            Fill the questions below best describing what you
                            learnt from all the 3 videos #3. All are mandatory
                        </p>
                    </div>
                    <div className="assignment-form-inputs">
                        <label
                            htmlFor=""
                            className="assignment-form-input-label"
                        >
                            Question #1 title goes here related to nutrition?*
                            <div className="textarea-wrapper">
                                <textarea
                                    required
                                    name="q1"
                                    className="question-area"
                                    placeholder="Write your answer..."
                                    value={assignmentData.q1}
                                    onChange={(e) =>
                                        setAssignmentData({
                                            ...assignmentData,
                                            q1: e.target.value,
                                        })
                                    }
                                />
                                <span className="char-counter">
                                    {assignmentData.q1.length}/500
                                </span>
                            </div>
                        </label>
                        <label
                            htmlFor=""
                            className="assignment-form-input-label"
                        >
                            Question #2 title goes here related to nutrition?
                            <div className="textarea-wrapper">
                                <textarea
                                    required
                                    name="q2"
                                    className="question-area"
                                    placeholder="Write your answer..."
                                    value={assignmentData.q2}
                                    onChange={(e) =>
                                        setAssignmentData({
                                            ...assignmentData,
                                            q2: e.target.value,
                                        })
                                    }
                                />
                                <span className="char-counter">
                                    {assignmentData.q2.length}/500
                                </span>
                            </div>
                        </label>
                        <label
                            htmlFor=""
                            className="assignment-form-input-label"
                        >
                            Question #3 title goes here related to nutrition?*
                            <div className="textarea-wrapper">
                                <textarea
                                    required
                                    name="q3"
                                    className="question-area"
                                    placeholder="Write your answer..."
                                    value={assignmentData.q3}
                                    onChange={(e) =>
                                        setAssignmentData({
                                            ...assignmentData,
                                            q3: e.target.value,
                                        })
                                    }
                                />
                                <span className="char-counter">
                                    {assignmentData.q3.length}/500
                                </span>
                            </div>
                        </label>
                    </div>
                    <button
                        type="submit"
                        ref={submitBtnRef}
                        disabled={isSubmitDisabled}
                        className={
                            isSubmitDisabled
                                ? "assignment-btn-disabled"
                                : "assignment-btn-active"
                        }
                    >
                        Submit assignment
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Assignment;
