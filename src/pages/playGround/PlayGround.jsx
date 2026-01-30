import "./PlayGround.css";

import arrow from "/icons/arrow-left.svg";

import file from "/icons/file.svg";
import download from "/icons/download.svg";
import link from "/icons/link.svg";

import dungeon from "/images/dungeon.png";
import play from "/icons/play-icon.svg";
import closeIcon from "/icons/close.svg";

import button from "/images/levels/button.png";
import taskBoard from "/images/levels/task-board.png";
import { useEffect, useRef } from "react";
import { levels } from "../../data/constants";
import { useNavigate, useParams } from "react-router-dom";

function PlayGround() {
    const navigate = useNavigate();
    const { id } = useParams();
    const level = levels[levels.findIndex((l) => l.level === parseInt(id))];

    const videoOverlayRef = useRef(null);

    useEffect(() => {
        document.body.style.backgroundImage = `url(/images/background-level.png)`;
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [level.imageUrl]);

    const openVideoOverlay = () => {
        videoOverlayRef.current?.classList.add("active");
        document.body.style.overflow = "hidden";
    };

    const handleCloseClick = () => {
        videoOverlayRef.current?.classList.remove("active");
        document.body.style.overflow = "auto";
    };

    const markAsWatched = () => {
        navigate(`/levels/${level.level}/reward`);
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
                <div className="video-container video-overlay-container">
                    <img src={dungeon} alt="" className="video-overlay-img" />
                    <div className="level-video-overlay">
                        <button className="earth-btn">
                            <img src={play} alt="Play" className="play-img" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="playground-container">
                <div className="playground">
                    <div className="play-buttons">
                        <button
                            className="button-back"
                            onClick={() => navigate(-1)}
                        >
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
        </div>
    );
}

export default PlayGround;
