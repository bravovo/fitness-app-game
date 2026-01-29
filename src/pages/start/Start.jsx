import "./Start.css";

import LevelCard from "../../components/LevelCard/LevelCard";

import button from "/images/levels/button.png";
import taskBoard from "/images/levels/task-board.png";

import { useEffect, useRef } from "react";

import eagle from "/images/eagle.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { levels, spokeWithMax } from "../../data/constants";

function Start() {
    const navigate = useNavigate();

    const overlayRef = useRef(null);
    const overlayTextRef = useRef(null);
    const [stage, setStage] = useState(0);

    const overlayClickHandler = (e) => {
        console.log(e.target);
        if (stage === 0) {
            console.log("Stage 0 clicked");
            setStage(1);
            overlayTextRef.current?.classList.add("next-stage");
            return;
        } else {
            closeOverlay();
        }
    };

    const closeOverlay = () => {
        overlayRef.current?.classList.remove("active");
        document.body.style.overflow = "auto";
        spokeWithMax.value = true;
    };

    useEffect(() => {
        document.body.style.backgroundImage = "url(/images/background.png)";
        if (!spokeWithMax.value) {
            overlayRef.current?.classList.add("active");
            document.body.style.overflow = "hidden";
        }
    }, []);

    return (
        <>
            <div id="start-overlay" ref={overlayRef} onClick={overlayClickHandler}>
                <div className="overlay-container">
                    <div className="overlay-text" ref={overlayTextRef}>
                        <h2>Hi there! Im Max!</h2>
                        {stage === 0 ? (
                            <>
                                <p>
                                    Finish all The Fitness Dungeon levels within
                                    5 days to unlock your subscription discount.
                                </p>
                                <p>
                                    The timer runs across every screen. When it
                                    ends, so does the reward.
                                </p>
                            </>
                        ) : (
                            <p>
                                Ready to enter The Fitness Dungeon? Grab your
                                water, stretch those muscles, and let's crush
                                Level 1 together!
                            </p>
                        )}
                    </div>

                    <img src={eagle} alt="Eagle" className="overlay-img" />
                </div>
            </div>
            <div className="page-container">
                <div className="levels-container">
                    {levels &&
                        levels.map((levelData) => {
                            return (
                                <LevelCard
                                    key={levelData.level}
                                    level={levelData.level}
                                    title={levelData.title}
                                    imageUrl={levelData.cardImg}
                                    isAvalilable={levelData.isAvalilable}
                                    onClick={() =>
                                        navigate(`/levels/${levelData.level}`)
                                    }
                                >
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
                                </LevelCard>
                            );
                        })}
                </div>
            </div>
        </>
    );
}

export default Start;
