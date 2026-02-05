import "./PlayGround.css";

import dungeon from "/images/dungeon.png";
import play from "/icons/play-icon.svg";
import closeIcon from "/icons/close.svg";

import button from "/images/levels/button.png";
import taskBoard from "/images/levels/task-board.png";
import { useEffect, useRef } from "react";
import { levels } from "../../data/constants";
import { useNavigate, useParams } from "react-router-dom";
import Controls from "../../components/Controls/Controls";
import LevelLink from "../../components/LevelLink/LevelLink";
import LevelResource from "../../components/LevelResource/LevelResource";
import BackAndPlay from "../../components/BackAndPlay/BackAndPlay";

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
        <div className="playground-page-container">
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
                <div className="video-overlay-container">
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
                    <BackAndPlay onBack={() => navigate(-1)}>
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
                    </BackAndPlay>
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
                                <h2 className="level-header-secondary">
                                    Resources
                                </h2>
                                <div className="resources-container">
                                    <LevelResource
                                        title="Diet plan"
                                        onClick={() => {}}
                                    />
                                    <LevelResource
                                        title="Workout plan"
                                        onClick={() => {}}
                                    />
                                </div>
                            </div>
                            <div className="level-main-header-text level-links-container">
                                <h2 className="level-header-secondary">
                                    Links
                                </h2>
                                <LevelLink title="Facts on diet" />
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
                <Controls
                    onSubmit={markAsWatched}
                    onBack={() => {
                        navigate(-1);
                    }}
                    buttonTitle={"Mark as watched"}
                    addStyles={{ position: "sticky" }}
                />
            </div>
        </div>
    );
}

export default PlayGround;
