import "./Level.css";

import { useParams } from "react-router-dom";

import { levels } from "../../data/constants";
import { useEffect } from "react";

function Level() {
    const { id } = useParams();
    const level = levels[levels.findIndex((l) => l.level === parseInt(id))];

    useEffect(() => {
        document.body.style.backgroundImage = `url(${level.imageUrl})`;
    }, [level.imageUrl]);

    return (
        <div className="page-container">
            <div className="level-form">
                <h1>
                    Welcome to <br /> Level {level.level}: {level.title}
                </h1>
                <h2>Where your journey begins</h2>
                <p>
                    Start your adventure with a quick intro, learn how the game
                    works, and get ready for a smooth, confident beginning.
                </p>
                <button className="login-button">Let's get started</button>
            </div>
        </div>
    );
}

export default Level;
