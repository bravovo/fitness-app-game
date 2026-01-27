import { useEffect, useState } from "react";
import "./InfoPage.css";

import logo from "/images/logo.png";
import { avatars } from "../../data/constants";

import silhouette from "/images/silhouette.png";

function InfoPage() {
    const [_user, setUser] = useState({
        avatar: "",
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        mainGoal: "",
        units: "",
        height: "",
        weight: "",
        weightGoal: "",
        gender: "",
    });
    const [selectedId, setSelectedId] = useState(0);
    const [username, setUsername] = useState("");
    const [stage, setStage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const submitStage1 = (e) => {
        e.preventDefault();
        setUser((prevUser) => {
            return { ...prevUser, avatar: avatars[selectedId] };
        });
        setStage(2);
    };

    const submitStage2 = (e) => {
        e.preventDefault();
        if (username.trim().length < 3) {
            alert("Please enter a valid username with at least 3 characters.");
            return;
        }

        setUser((prevUser) => {
            return { ...prevUser, username: username };
        });
        alert("User information submitted successfully!");
        setStage(3);
    };

    const skipForNowClick = (e) => {
        e.preventDefault();
        setUser((prevUser) => {
            return { ...prevUser, avatar: "" };
        });
        setStage(2);
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
                    <div className="stage2-container">
                        <div className="stage2-main-content-container">
                            <div className="form-container">
                                <div className="form-text-container">
                                    <h2>What's your user name?</h2>
                                </div>
                                <input
                                    type="text"
                                    name="username"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    id=""
                                    placeholder="Enter your username"
                                />
                            </div>
                            <div>
                                <img
                                    src={silhouette}
                                    alt="Silhouette"
                                    className="login-page-image"
                                />
                            </div>
                        </div>
                        <div className="stage2-controls">
                            <button
                                className="back-button"
                                onClick={() => setStage((prev) => prev - 1)}
                            >
                                Back
                            </button>
                            <button
                                className="continue-button"
                                onClick={submitStage2}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                );
            default:
                break;
        }
    };

    return (
        <div
            className="info-container"
            style={{
                backgroundImage: `url(/images/background.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <img src={logo} alt="Logo" className="top-logo" />
            {loading ? <h2>Orru felt your intent...</h2> : renderStage()}
        </div>
    );
}

export default InfoPage;
