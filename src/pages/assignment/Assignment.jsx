import { useNavigate, useParams } from "react-router-dom";
import "./Assignment.css";

import arrow from "/icons/arrow-left.svg";
import button from "/images/levels/button.png";
import taskBoard from "/images/levels/task-board.png";
import { useState } from "react";
import { levels, user } from "../../data/constants";

import pencil from "/icons/pencil.svg";
import bear from "/icons/avatars/bear.png";
import man from "/icons/avatars/man.png";

function Assignment() {
    const { id } = useParams();
    const level = levels[levels.findIndex((l) => l.level === parseInt(id))];
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

        navigate(`/levels/${level.level}/assignment`);
    };

    const isSubmitDisabled =
        !assignmentData.q1.trim() ||
        !assignmentData.q2.trim() ||
        !assignmentData.q3.trim();

    const renderForm = () => {
        if (user.assignment && Object.keys(user.assignment).length > 0) {
            return (
                <div className="assignment-form completed-assign-form">
                    <div className="completed-assignment-title">
                        <h2>Your assignment</h2>
                        <button className="completed-assign-button">
                            <img src={pencil} alt="" />
                            Edit
                        </button>
                    </div>
                    <div className="user-assign-container">
                        <div className="user-assign">
                            <div className="user-assign-data">
                                <img src={user.avatar || bear} alt="" />
                                <div className="user-assign-data-text">
                                    <p>You</p>
                                    <span>13/10/2025</span>
                                </div>
                            </div>
                            <div className="assign-answers">
                                <div className="assign-answer">
                                    <h3>
                                        Question #1 title goes here related to
                                        nutrition?*
                                    </h3>
                                    <p>{user.assignment.q1}</p>
                                </div>
                                <div className="assign-answer">
                                    <h3>
                                        Question #2 title goes here related to
                                        nutrition?*
                                    </h3>
                                    <p>{user.assignment.q2}</p>
                                </div>
                                <div className="assign-answer">
                                    <h3>
                                        Question #3 title goes here related to
                                        nutrition?*
                                    </h3>
                                    <p>{user.assignment.q3}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="assign-separator" />
                    <div className="completed-assignment-title">
                        <h2>Other assignments</h2>
                    </div>
                    <div className="user-assign-container">
                        <div className="user-assign other-assign">
                            <div className="user-assign-data">
                                <img src={man} alt="" />
                                <div className="user-assign-data-text">
                                    <p>Nathan C.</p>
                                    <span>13/10/2025</span>
                                </div>
                            </div>
                            <div className="assign-answers">
                                <div className="assign-answer">
                                    <h3>
                                        Question #1 title goes here related to
                                        nutrition?*
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Morbi eget rhoncus
                                        eros, id viverra urna. Quisque rhoncus,
                                        augue id ornare cursus, tellus risus
                                        sollicitudin quam, at porttitor nulla
                                        massa eget eros. Integer et fringilla
                                        augue, vitae molestie nibh. Quisque
                                        vitae massa nec mauris gravida lacinia.
                                        In sollicitudin diam quis purus varius
                                        pulvinar. Suspendisse metus tortor,
                                        porttitor quis suscipit a, condimentum
                                        eget mi. Aliquam lobortis, lacus ac
                                        ultrices tincidunt, ligula felis
                                        pulvinar lacus, sit amet fermentum nulla
                                        erat vitae erat. Duis eu tortor id ipsum
                                        tincidunt posuere mattis at sapien.
                                        Maecenas quis eleifend purus.
                                    </p>
                                </div>
                                <div className="assign-answer">
                                    <h3>
                                        Question #2 title goes here related to
                                        nutrition?*
                                    </h3>
                                    <p>
                                        Nunc lobortis nisl sit amet nibh
                                        venenatis, vitae blandit orci pretium.
                                        Pellentesque eros orci, sagittis non
                                        lectus sit amet, euismod finibus nisl.
                                        Cras eu sapien congue, porta dolor ut,
                                        ultricies risus. Vestibulum commodo
                                        laoreet eleifend. Sed rutrum rutrum
                                        faucibus. Proin pulvinar nisi sapien, in
                                        imperdiet nulla varius in. In fringilla
                                        velit metus, id varius dui eleifend
                                        quis. Ut felis eros, luctus vel elit
                                        nec, posuere auctor sem. Fusce in nulla
                                        ut mi dictum auctor vel non sem.
                                    </p>
                                </div>
                                <div className="assign-answer">
                                    <h3>
                                        Question #3 title goes here related to
                                        nutrition?*
                                    </h3>
                                    <p>
                                        Ut tempor volutpat placerat. Sed
                                        fermentum, erat ut pretium ornare, justo
                                        neque efficitur nisl, non ornare arcu
                                        eros vel turpis. Quisque nec ipsum ac ex
                                        dapibus molestie et quis urna. In hac
                                        habitasse platea dictumst. Phasellus
                                        eget dolor interdum, placerat mi
                                        pellentesque, dignissim leo. Curabitur
                                        pellentesque ligula a mauris convallis
                                        faucibus. Quisque vel volutpat ipsum.
                                        Aliquam aliquet magna at magna mollis
                                        varius. Maecenas in nibh facilisis,
                                        ultricies elit consectetur, commodo
                                        sapien. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Aenean nec
                                        purus dui.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="assign-separator" />
                    <button className={"assignment-btn-active"}>
                        Continue
                    </button>
                </div>
            );
        } else {
            return (
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
            );
        }
    };

    return (
        <div className="level-page-container assignment-page-container">
            <div className="play-buttons">
                <button
                    className="button-back assignment-button-back"
                    onClick={() => navigate(`/levels`)}
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
            <div className="assignment-form-container">{renderForm()}</div>
        </div>
    );
}

export default Assignment;
