import { useNavigate, useParams } from "react-router-dom";
import "./Assignment.css";

import button from "/images/levels/button.png";
import taskBoard from "/images/levels/task-board.png";
import { useState } from "react";
import { levels, user } from "../../data/constants";

import pencil from "/icons/pencil.svg";
import bear from "/icons/avatars/bear.png";
import man from "/icons/avatars/man.png";
import AssignTextArea from "../../components/AssignTextArea/AssignTextArea";
import BackAndPlay from "../../components/BackAndPlay/BackAndPlay";

function Assignment() {
    const { id } = useParams();
    const level = levels[levels.findIndex((l) => l.level === parseInt(id))];

    const [isEditOpen, setIsEditOpen] = useState(false);

    const initialAssignmentData = level.assign.reduce((acc, { name }) => {
        acc[name] = "";
        return acc;
    }, {});

    const [assignmentData, setAssignmentData] = useState(initialAssignmentData);
    const navigate = useNavigate();

    const formatDate = (date) => {
        const d = String(date.getDate()).padStart(2, "0");
        const m = String(date.getMonth() + 1).padStart(2, "0");
        const y = date.getFullYear();
        return `${d}/${m}/${y}`;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (
            !Object.values(assignmentData).some((value) => {
                const trimmed = value.trim();
                return trimmed.length === 0;
            })
        ) {
            user.assignment = {
                ...assignmentData,
                date: formatDate(new Date()),
            };
        } else {
            alert("Please answer all questions.");
            return;
        }
        console.log("Assignment submitted:", user);

        setIsEditOpen(false);

        navigate(`/levels/${level.level}/assignment`);
    };

    const isSubmitDisabled = Object.values(assignmentData).some((value) => {
        const trimmed = value.trim();
        return trimmed.length === 0 || trimmed.length > 500;
    });

    const editClick = () => {
        setIsEditOpen(true);

        setAssignmentData(user.assignment);
    };

    const renderForm = () => {
        if (
            user.assignment &&
            Object.keys(user.assignment).length > 0 &&
            !isEditOpen
        ) {
            return (
                <div className="assignment-form completed-assign-form">
                    <div className="completed-assignment-title">
                        <h2>Your assignment</h2>
                        <button
                            className="completed-assign-button"
                            onClick={editClick}
                        >
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
                                    <span>{user.assignment.date}</span>
                                </div>
                            </div>
                            <div className="assign-answers">
                                {level.assign &&
                                    level.assign.map((as) => {
                                        return (
                                            <div
                                                className="assign-answer"
                                                key={as.name}
                                            >
                                                <h3>{as.title}</h3>
                                                <p>
                                                    {user.assignment[as.name]}
                                                </p>
                                            </div>
                                        );
                                    })}
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
                                {level.assign &&
                                    level.assign.map((as) => {
                                        return (
                                            <div
                                                className="assign-answer"
                                                key={as.name}
                                            >
                                                <h3>{as.title}</h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Morbi eget rhoncus eros, id
                                                    viverra urna. Quisque
                                                    rhoncus, augue id ornare
                                                    cursus, tellus risus
                                                    sollicitudin quam, at
                                                    porttitor nulla massa eget
                                                    eros. Integer et fringilla
                                                    augue, vitae molestie nibh.
                                                    Quisque vitae massa nec
                                                    mauris gravida lacinia. In
                                                    sollicitudin diam quis purus
                                                    varius pulvinar. Suspendisse
                                                    metus tortor, porttitor quis
                                                    suscipit a, condimentum eget
                                                    mi. Aliquam lobortis, lacus
                                                    ac ultrices tincidunt,
                                                    ligula felis pulvinar lacus,
                                                    sit amet fermentum nulla
                                                    erat vitae erat. Duis eu
                                                    tortor id ipsum tincidunt
                                                    posuere mattis at sapien.
                                                    Maecenas quis eleifend
                                                    purus.
                                                </p>
                                            </div>
                                        );
                                    })}
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
                        {level.assign &&
                            level.assign.map((assign) => {
                                return (
                                    <AssignTextArea
                                        key={assign.name}
                                        question={assign.title}
                                        name={assign.name}
                                        limit={assign.limit}
                                        data={assignmentData[assign.name]}
                                        setData={(e) =>
                                            setAssignmentData({
                                                ...assignmentData,
                                                [assign.name]: e.target.value,
                                            })
                                        }
                                    />
                                );
                            })}
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
                        {isEditOpen ? "Save" : "Submit assignment"}
                    </button>
                </form>
            );
        }
    };

    return (
        <div className="level-page-container assignment-page-container">
            <BackAndPlay
                onBack={() => navigate("/levels")}
                className="assignment-button-container"
            >
                <button className="level-button">
                    <img src={button} alt="" className="level-button-img" />
                </button>
                <button className="level-button">
                    <img src={taskBoard} alt="" className="level-button-img" />
                </button>
            </BackAndPlay>
            <div className="assignment-form-container">{renderForm()}</div>
        </div>
    );
}

export default Assignment;
