import Header from "../../components/Header/Header";
import "./Start.css";

import LevelCard from "../../components/LevelCard/LevelCard";

import level1Card from "/images/levels/level1-card.jpg";

import button from "/images/levels/button.png";
import taskBoard from "/images/levels/task-board.png";

import { useEffect, useRef } from "react";

import eagle from "/images/eagle.png";
import { useState } from "react";

const levels = [
    {
        level: 0,
        title: "Campfire",
        imageUrl: level1Card,
        isAvalilable: true,
        onLevelClick: () => {
            console.log("Level 0 clicked");
        },
    },
    {
        level: 1,
        title: "Nutrition",
        imageUrl: level1Card,
        isAvalilable: false,
    },
    {
        level: 2,
        title: "Exercise",
        imageUrl: level1Card,
        isAvalilable: false,
    },
    {
        level: 3,
        title: "Mindset",
        imageUrl: level1Card,
        isAvalilable: false,
    },
    {
        level: 4,
        title: "Game plan",
        imageUrl: level1Card,
        isAvalilable: false,
    },
].reverse();

function Start() {
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
    };

    useEffect(() => {
        overlayRef.current?.classList.add("active");
        document.body.style.overflow = "hidden";
    }, []);

    return (
        <>
            <div id="overlay" ref={overlayRef} onClick={overlayClickHandler}>
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
            <Header />
            <div className="page-container">
                <div className="levels-container">
                    {levels &&
                        levels.map((levelData) => {
                            return (
                                <LevelCard
                                    key={levelData.level}
                                    level={levelData.level}
                                    title={levelData.title}
                                    imageUrl={levelData.imageUrl}
                                    isAvalilable={levelData.isAvalilable}
                                    onClick={levelData.onLevelClick}
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
