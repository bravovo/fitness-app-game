/* eslint-disable react-hooks/immutability */
import { useEffect, useRef, useState } from "react";
import "./InfoPage.css";

import Tooltip from "../../components/Tooltip/Tooltip";
import RangeInput from "../../components/RangeInput/RangeInput";
import OneFieldForm from "../../components/OneFieldForm/OneFieldForm";

import logo from "/images/logo.png";
import dungeon from "/images/dungeon.png";
import { avatars, user, mainGoals } from "../../data/constants";

import male from "/icons/male.svg";
import female from "/icons/female.svg";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import SilhouetteImg from "../../components/SilhouetteImg/SilhouetteImg";
import Controls from "../../components/Controls/Controls";

function InfoPage() {
    const navigate = useNavigate();
    const transitionTimerRef = useRef(null);

    const [goalSelected, setGoalSelected] = useState(0);
    const [genderSelected, setGenderSelected] = useState("male");

    const [unit, setUnit] = useState("metric");
    const [height, setHeight] = useState(75);
    const [weight, setWeight] = useState(75);
    const [goalWeight, setGoalWeight] = useState(75);

    const [selectedId, setSelectedId] = useState(0);
    const [username, setUsername] = useState("username");
    const [email, setEmail] = useState(user.email || "email@gmail.com");
    const [firstName, setFirstName] = useState("user");
    const [lastName, setLastName] = useState("lastName");

    const [stage, setStage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        return () => {
            if (transitionTimerRef.current) {
                clearTimeout(transitionTimerRef.current);
            }
        };
    }, []);

    const submitStage1 = (e) => {
        e.preventDefault();
        user.avatar = avatars[selectedId];
        setStage(2);
    };

    const submitStage2 = (e) => {
        e.preventDefault();
        if (username.trim().length < 3) {
            alert("Please enter a valid username with at least 3 characters.");
            return;
        }

        if (username.trim().length > 20) {
            alert("Username cannot exceed 20 characters.");
            return;
        }

        console.log(username);

        user.username = username.trim();
        setStage(3);
    };

    const submitStage3 = (e) => {
        e.preventDefault();
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email");
            return;
        }

        user.email = email;
        setStage(4);
    };

    const submitStage4 = (e) => {
        e.preventDefault();
        if (firstName.length < 3) {
            alert("Please enter a valid first name");
            return;
        }

        user.firstName = firstName;
        setStage(5);
    };

    const submitStage5 = (e) => {
        e.preventDefault();
        if (!lastName.length) {
            alert("Please enter a valid last name");
            return;
        }

        user.lastName = lastName;
        console.log(user);
        setStage(6);
    };

    const submitStage6 = (e) => {
        e.preventDefault();
        if (!goalSelected) {
            alert("Please enter select a goal");
            return;
        }

        user.mainGoal = mainGoals.find((goal) => goal.id === goalSelected);
        console.log(user);
        setStage(7);
    };

    const submitStage7 = (e) => {
        e.preventDefault();
        if (genderSelected === "") {
            alert("Please choose a gender");
            return;
        }

        user.gender = genderSelected;
        console.log(user);
        setStage(8);
    };

    const submitStage8 = (e) => {
        e.preventDefault();
        if (unit === "") {
            alert("Please choose a unit system");
            return;
        }

        if (weight <= 0 || height <= 0 || goalWeight <= 0) {
            alert("Please enter valid metrics");
            return;
        }

        user.units = unit;
        user.height = height;
        user.weight = weight;
        user.weightGoal = goalWeight;

        console.log(user);
        transitionToStage(9);
    };

    const submitStage9 = (e) => {
        e.preventDefault();

        console.log(user);
        navigate("/levels");
    };

    const skipForNowClick = (e) => {
        e.preventDefault();
        user.avatar = "";
        setStage(2);
    };

    const transitionToStage = (newStage) => {
        if (isTransitioning) return;

        setIsTransitioning(true);

        transitionTimerRef.current = setTimeout(() => {
            setStage(newStage);
            setIsTransitioning(false);
            transitionTimerRef.current = null;
        }, 600);
    };

    const renderStage = () => {
        switch (stage) {
            case 1:
                return (
                    <div className="form-container">
                        <div className="form-text-container">
                            <h2>Select your avatar</h2>
                        </div>
                        <form
                            onSubmit={submitStage1}
                            className="login-form stage1-form"
                        >
                            <div className="selected-avatar-preview">
                                <div className="avatar-circle large">
                                    <img
                                        src={avatars[selectedId]}
                                        alt="Selected"
                                    />
                                </div>
                            </div>
                            <div className="avatars-container">
                                {avatars &&
                                    avatars.map((avatar, index) => {
                                        return (
                                            <div
                                                className={`avatar-circle small ${
                                                    index === selectedId
                                                        ? "selected"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    setSelectedId(index)
                                                }
                                                key={index}
                                            >
                                                <img
                                                    src={avatar}
                                                    alt={`Avatar ${index + 1}`}
                                                />
                                            </div>
                                        );
                                    })}
                            </div>
                            <div className="stage1-controls">
                                <button type="submit" className="login-button">
                                    Continue
                                </button>
                                <button
                                    className="skip-button"
                                    onClick={skipForNowClick}
                                >
                                    Skip for now
                                </button>
                            </div>
                        </form>
                    </div>
                );
            case 2:
                return (
                    <OneFieldForm
                        title={"What's your user name?"}
                        tooltip="This is the name other users will see you as"
                        value={username}
                        onSubmit={submitStage2}
                        setValue={(e) => setUsername(e.target.value)}
                        onBackClick={() => setStage((prev) => prev - 1)}
                        placeholder="Enter your username"
                    />
                );
            case 3:
                return (
                    <OneFieldForm
                        title={"What's your email address?"}
                        value={email}
                        onSubmit={submitStage3}
                        setValue={(e) => setEmail(e.target.value)}
                        onBackClick={() => setStage((prev) => prev - 1)}
                        placeholder="Enter your email"
                        hasEdit={true}
                        type="email"
                    />
                );
            case 4:
                return (
                    <OneFieldForm
                        title={"What's your first name?"}
                        tooltip="This is your real first name"
                        value={firstName}
                        onSubmit={submitStage4}
                        setValue={(e) => setFirstName(e.target.value)}
                        onBackClick={() => setStage((prev) => prev - 1)}
                        placeholder="Enter your first name"
                        hasEdit={true}
                    />
                );
            case 5:
                return (
                    <OneFieldForm
                        title={"What's your last name?"}
                        tooltip="This is your real last name"
                        value={lastName}
                        onSubmit={submitStage5}
                        setValue={(e) => setLastName(e.target.value)}
                        onBackClick={() => setStage((prev) => prev - 1)}
                        placeholder="Enter your last name"
                        hasEdit={true}
                    />
                );
            case 6:
                return (
                    <div className="stage2-container">
                        <div className="stage2-main-content-container">
                            <div className="form-container stage6-form-container">
                                <div className="form-text-container stage-text-container">
                                    <h2>What's your main goal?</h2>
                                </div>
                                <div class="goal-group">
                                    {mainGoals &&
                                        mainGoals.map((goal) => {
                                            return (
                                                <label
                                                    className="goal-card"
                                                    key={goal.id}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="goal"
                                                        value={goal.label
                                                            .toLowerCase()
                                                            .replace(/ /g, "-")}
                                                        checked={
                                                            goalSelected ===
                                                            goal.id
                                                        }
                                                        onChange={() =>
                                                            setGoalSelected(
                                                                goal.id
                                                            )
                                                        }
                                                    />
                                                    <div className="goal-content">
                                                        <img
                                                            src={goal.img}
                                                            alt={goal.label}
                                                        />
                                                        <span>
                                                            {goal.label}
                                                        </span>
                                                    </div>
                                                </label>
                                            );
                                        })}
                                </div>
                            </div>
                            <SilhouetteImg
                                className={isTransitioning ? "image-exit" : ""}
                            />
                        </div>
                        <Controls
                            onSubmit={submitStage6}
                            onBack={() => setStage((prev) => prev - 1)}
                        />
                    </div>
                );
            case 7:
                return (
                    <div className="stage2-container">
                        <div className="stage2-main-content-container">
                            <div className="form-container stage7-form-container">
                                <label className="stage7-form-label">
                                    Characters gender{" "}
                                    <Tooltip text="Choose your gender">
                                        <span className="stage-text-tooltip">
                                            ?
                                        </span>
                                    </Tooltip>
                                </label>
                                <div className="stage7-input-container">
                                    <label
                                        htmlFor=""
                                        className="goal-card stage7-card"
                                    >
                                        <div className="goal-content stage7-card-content">
                                            <img src={male} alt="Male" />
                                            <span>Male</span>
                                        </div>
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            checked={genderSelected === "male"}
                                            onChange={() =>
                                                setGenderSelected("male")
                                            }
                                        />
                                    </label>
                                    <label
                                        htmlFor=""
                                        className="goal-card stage7-card"
                                    >
                                        <div className="goal-content stage7-card-content">
                                            <img src={female} alt="Female" />
                                            <span>Female</span>
                                        </div>
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            checked={
                                                genderSelected === "female"
                                            }
                                            onChange={() =>
                                                setGenderSelected("female")
                                            }
                                        />
                                    </label>
                                </div>
                            </div>
                            <SilhouetteImg
                                className={isTransitioning ? "image-exit" : ""}
                            />
                        </div>
                        <Controls
                            onSubmit={submitStage7}
                            onBack={() => setStage((prev) => prev - 1)}
                        />
                    </div>
                );
            case 8:
                return (
                    <div
                        className={`stage2-container ${
                            isTransitioning ? "stage-exit" : ""
                        }`}
                    >
                        <div className="stage2-main-content-container">
                            <div className="form-container stage2-form-container">
                                <div className="form-text-container stage-text-container">
                                    <h2>Fill the details below</h2>
                                    <Tooltip text="You can always update and change these metrics ">
                                        <span className="stage-text-tooltip">
                                            i
                                        </span>
                                    </Tooltip>
                                </div>
                                <div className="stage8-input-container">
                                    <label className="stage8-input-label">
                                        Preferred unit system:
                                    </label>
                                    <div className="stage7-input-container stage8-input">
                                        <label
                                            htmlFor=""
                                            className="goal-card stage8-card"
                                        >
                                            <div class="goal-content stage8-card-content">
                                                Metric System
                                            </div>
                                            <input
                                                type="radio"
                                                name="unit"
                                                value="metric"
                                                checked={unit === "metric"}
                                                onChange={() =>
                                                    setUnit("metric")
                                                }
                                            />
                                        </label>
                                        <label
                                            htmlFor=""
                                            className="goal-card stage8-card"
                                        >
                                            <div className="goal-content stage8-card-content">
                                                Imperial System
                                            </div>
                                            <input
                                                type="radio"
                                                name="unit"
                                                value="imperial"
                                                checked={unit === "imperial"}
                                                onChange={() =>
                                                    setUnit("imperial")
                                                }
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="stage8-input-container">
                                    <RangeInput
                                        onChange={(value) => setWeight(value)}
                                        title={`Current weight (${
                                            unit === "metric" ? "kgs" : "lbs"
                                        }):`}
                                    />
                                    <RangeInput
                                        onChange={(value) => setHeight(value)}
                                        title={`Current height (${
                                            unit === "metric" ? "cms" : "inches"
                                        }):`}
                                    />
                                    <RangeInput
                                        onChange={(value) =>
                                            setGoalWeight(value)
                                        }
                                        title={`Target weight (${
                                            unit === "metric" ? "kgs" : "lbs"
                                        }):`}
                                    />
                                </div>
                            </div>
                            <SilhouetteImg
                                className={isTransitioning ? "image-exit" : ""}
                            />
                        </div>
                        <Controls
                            onSubmit={submitStage8}
                            onBack={() => setStage((prev) => prev - 1)}
                        />
                    </div>
                );
            case 9:
                return (
                    <div className="stage2-container stage9-container">
                        <div className="form-container stage9-form-container">
                            <div className="form-text-container stage9-text-container">
                                <h2 className="acc-set-h2">
                                    Your account is all set!
                                </h2>
                                <p>Your fitness journey starts with</p>
                                <h2 className="fitness-dungeon">
                                    The Fitness Dungeon
                                </h2>
                            </div>
                            <img
                                src={dungeon}
                                alt="Enter the world"
                                className="dungeon-img"
                            />
                            <button
                                className="enter-world-button"
                                onClick={submitStage9}
                            >
                                Enter the world
                            </button>
                        </div>
                    </div>
                );
            default:
                break;
        }
    };

    return (
        <div className="info-container">
            <Loader isLoading={loading} text={"Orru felt your intent..."} />
            <img src={logo} alt="Logo" className="top-logo" />
            {!loading && renderStage()}
        </div>
    );
}

export default InfoPage;
