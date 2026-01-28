import Header from "../../components/Header/Header";
import "./Start.css";

import LevelCard from "../../components/LevelCard/LevelCard";

import level1Card from "/images/levels/level1-card.jpg";

import button from "/images/levels/button.png";
import taskBoard from "/images/levels/task-board.png";

import { useEffect } from "react";

import eagle from "/images/eagle.png";
import { useState } from "react";

const levels = [
    {
        level: 0,
        title: "Campfire",
        imageUrl: level1Card,
        isAvalilable: true,
        children: (
            <>
                <button className="level-button">
                    <img src={button} alt="" className="level-button-img" />
                </button>
                <button className="level-button">
                    <img src={taskBoard} alt="" className="level-button-img" />
                </button>
            </>
        ),
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
    const [stage, setStage] = useState(0);

    const overlayClickHandler = (e) => {
        console.log(e.target);
        if (stage === 0) {
            console.log("Stage 0 clicked");
            setStage(1);
            return;
        } else {
            closeOverlay();
        }
    };

    const closeOverlay = () => {
        document.getElementById("overlay").style.display = "none";
        document.body.style.overflow = "auto";
    };

    useEffect(() => {
        document.getElementById("overlay").style.display = "block";
        document.body.style.overflow = "hidden";
    }, []);

    return (
        <>
            <div id="overlay" onClick={overlayClickHandler}>
                <div className="overlay-container">
                    {stage === 0 ? (
                        <div className="overlay-text">
                            <h2>Hi there! Im Max!</h2>
                            <p>
                                Finish all The Fitness Dungeon levels within 5
                                days to unlock your subscription discount.
                            </p>
                            <p>
                                The timer runs across every screen. When it
                                ends, so does the reward.
                            </p>
                        </div>
                    ) : (
                        <div className="overlay-text stage1-overlay-text">
                            <h2>Hi there! Im Max!</h2>

                            <p>
                                Ready to enter The Fitness Dungeon? Grab your
                                water, stretch those muscles, and let's crush
                                Level 1 together!
                            </p>
                        </div>
                    )}
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
                                    children={levelData.children}
                                />
                            );
                        })}
                </div>
            </div>
        </>
    );
}

export default Start;
