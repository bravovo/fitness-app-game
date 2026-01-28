import Header from "../../components/Header/Header";
import "./Start.css";

import LevelCard from "../../components/LevelCard/LevelCard";

import { levels } from "../../data/constants";
import { useEffect } from "react";

import eagle from "/images/eagle.png";
import { useState } from "react";

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
                                />
                            );
                        })}
                </div>
            </div>
        </>
    );
}

export default Start;
