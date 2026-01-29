import "./Level.css";

import { useParams } from "react-router-dom";

import { levels } from "../../data/constants";
import { Suspense, useEffect, useRef, useState } from "react";

import button from "/images/levels/button.png";
import taskBoard from "/images/levels/task-board.png";

import levelBack from "/images/background-level.png";

import arrow from "/icons/arrow-left.svg";

import file from "/icons/file.svg";
import download from "/icons/download.svg";
import link from "/icons/link.svg";

import dungeon from "/images/dungeon.png";
import play from "/icons/play-icon.svg";
import closeIcon from "/icons/close.svg";
import Loader from "../../components/Loader/Loader";

function Level() {
    const [dashboardOpen, setDashboardOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const playgroundRef = useRef(null);
    const videoOverlayRef = useRef(null);
    const videoContainerRef = useRef(null);

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

    const openVideoOverlay = () => {
        videoOverlayRef.current?.classList.add("active");
        document.body.style.overflow = "hidden";
    };

    const handleDashboardClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setDashboardOpen(false);
        }, 300);
    };

    const markAsWatched = () => {
        console.log("WATCHED!");
    };

    const handleCloseClick = () => {
        videoOverlayRef.current?.classList.remove("active");
        document.body.style.overflow = "auto";
    };

    return (
        <div className="level-page-container">
            <div
                className="video-page-overlay"
                id="overlay"
                ref={videoOverlayRef}
            >
                <button
                    className="earth-btn close-btn"
                    onClick={handleCloseClick}
                >
                    <img src={closeIcon} alt="Close" className="close-img" />
                </button>
                <div className="video-page-text-container">
                    <p>Fitness Dungeon</p>
                    <h2>Start your journey</h2>
                </div>
                <div
                    className="video-container video-overlay-container"
                    ref={videoContainerRef}
                >
                    <img src={dungeon} alt="" className="video-overlay-img" />
                    <div className="level-video-overlay">
                        <button className="earth-btn">
                            <img src={play} alt="Play" className="play-img" />
                        </button>
                    </div>
                </div>
            </div>
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
            {!dashboardOpen && (
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
                                        understand what level covers, and
                                        prepare for a smooth, confident start
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
                                            <img
                                                src={download}
                                                alt="Download"
                                            />
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
                                <div
                                    className="video-container"
                                    onClick={openVideoOverlay}
                                >
                                    <img src={dungeon} alt="" />
                                    <div className="level-video-overlay">
                                        <button className="earth-btn">
                                            <img
                                                src={play}
                                                alt="Play"
                                                className="play-img"
                                            />
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
            )}
            {isLoading && dashboardOpen && <Loader isLoading={isLoading} />}
        </div>
    );
}

export default Level;
