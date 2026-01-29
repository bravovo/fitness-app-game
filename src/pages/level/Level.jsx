import "./Level.css";

import { useParams } from "react-router-dom";

import { levels } from "../../data/constants";
import { useEffect, useRef, useState } from "react";

import button from "/images/levels/button.png";
import taskBoard from "/images/levels/task-board.png";

import levelBack from "/images/background-level.png";

import arrow from "/icons/arrow-left.svg";

import file from "/icons/file.svg";
import download from "/icons/download.svg";
import link from "/icons/link.svg";

import dungeon from "/images/dungeon.png";
import play from "/icons/play-icon.svg";

function Level() {
    const [dashboardOpen, setDashboardOpen] = useState(true);
    const playgroundRef = useRef(null);
    const { id } = useParams();
    const level = levels[levels.findIndex((l) => l.level === parseInt(id))];

    useEffect(() => {
        if (!dashboardOpen) {
            document.body.style.backgroundImage = `url(${levelBack})`;
        } else {
            document.body.style.backgroundImage = `url(${level.imageUrl})`;
        }
    }, [level.imageUrl, dashboardOpen]);

    useEffect(() => {
        if (dashboardOpen) {
            playgroundRef.current?.classList.remove("playground-container");
        } else {
            playgroundRef.current?.classList.add("playground-container");
        }
    }, [dashboardOpen]);

    const handleDashboardClick = () => {
        setDashboardOpen(false);
    };

    const markAsWatched = () => {
        console.log("WATCHED!");
    };

    return (
        <div className="level-page-container">
            {dashboardOpen && (
                <div className="level-form">
                    <h1>
                        Welcome to <br /> Level {level.level}: {level.title}
                    </h1>
                    <h2>Where your journey begins</h2>
                    <p>
                        Start your adventure with a quick intro, learn how the
                        game works, and get ready for a smooth, confident
                        beginning.
                    </p>
                    <button
                        className="login-button"
                        onClick={handleDashboardClick}
                    >
                        Let's get started
                    </button>
                </div>
            )}
            <div className="playground-closed" ref={playgroundRef}>
                <div className="playground">
                    <div className="play-buttons">
                        <button className="button-back">
                            <label htmlFor="" className="button-back-icon">
                                <img src={arrow} alt="Back" />
                            </label>
                            Back
                        </button>
                        <div className="level-buttons-container">
                            <div className="card-button-container level-buttons">
                                <button className="level-button">
                                    <img
                                        src={button}
                                        alt=""
                                        className="level-button-img"
                                    />
                                </button>
                                <button className="level-button">
                                    <img
                                        src={taskBoard}
                                        alt=""
                                        className="level-button-img"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="level-main-content">
                        <div className="level-main-text-container">
                            <div className="level-main-header-text">
                                <h2 className="level-header-main">
                                    Build better choices
                                </h2>
                                <p>
                                    Get a quick introduction to the flow,
                                    understand what level covers, and prepare
                                    for a smooth, confident start
                                </p>
                            </div>
                            <div className="level-main-header-text">
                                <h2>Resources</h2>
                                <div className="resources-container">
                                    <div className="resource">
                                        <div className="resource-text">
                                            <img src={file} alt="File" />
                                            Diet plan
                                        </div>
                                        <img src={download} alt="Download" />
                                    </div>
                                    <div className="resource">
                                        <div className="resource-text">
                                            <img src={file} alt="File" />
                                            Workout plan
                                        </div>
                                        <button>
                                            <img
                                                src={download}
                                                alt="Download"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="level-main-header-text level-links-container">
                                <h2>Links</h2>
                                <a href="#" className="level-link">
                                    {" "}
                                    <img src={link} alt="" />
                                    <span>Facts on diet</span>
                                </a>
                            </div>
                        </div>
                        <div className="level-video-container">
                            <div className="video-container">
                                <img src={dungeon} alt="" />
                                <div className="level-video-overlay">
                                    <button>
                                        <img src={play} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="stage-controls level-controls">
                    <button className="back-button" onClick={() => {}}>
                        Button
                    </button>
                    <button
                        className="continue-button playground-button"
                        onClick={markAsWatched}
                    >
                        Mark as watched
                    </button>
                </footer>
            </div>
        </div>
    );
}

export default Level;
