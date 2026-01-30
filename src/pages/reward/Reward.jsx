import { useNavigate, useParams } from "react-router-dom";
import "./Reward.css";
import { levels } from "../../data/constants";

import diamond from "/icons/diamond.svg";

function Reward() {
    const navigate = useNavigate();
    const { id } = useParams();
    const level = levels[levels.findIndex((l) => l.level === parseInt(id))];

    const handleDashboardClick = () => {
        navigate(`/levels/${level.level}/assignment`);
    };

    return (
        <div className="level-page-container">
            <div className="reward-form">
                <h1 className="reward-title">
                    Video 1 Module <br /> Completed!
                </h1>
                <p>You've earned reward for finishing this module</p>
                <h2>Loot collected</h2>
                <div className="reward-card-container">
                    <div className="reward-card-content">
                        <img src={diamond} alt="Reward" />
                        <h2>127</h2>
                    </div>
                    <h2>XP</h2>
                </div>
                <button className="login-button" onClick={handleDashboardClick}>
                    Move to assignment
                </button>
            </div>
        </div>
    );
}

export default Reward;
