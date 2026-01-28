import "./Header.css";

import { user } from "../../data/constants";

import earth from "/icons/header/earth.svg";
import timer from "/icons/header/timer.png";
import energy from "/icons/header/energy.svg";
import fire from "/icons/header/fire.svg";
import coins from "/icons/header/coins.svg";

import eagle from "/images/mini-eagle.png";

import profile from "/icons/avatars/profile.svg";
import verified from "/icons/header/done.svg";

function Header() {
    console.log(user);

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-left-section">
                    <button className="earth-btn">
                        <img src={earth} alt="Earth" className="earth-img" />
                    </button>
                    <div className="days-left-container">
                        <img src={timer} alt="Timer" className="timer-img" />
                        <div className="days-left-text">
                            <p className="days-left-para">6 days to go</p>
                            <p className="days-left-para">1/7 days</p>
                        </div>
                    </div>
                </div>
                <div className="header-main-section">
                    <div className="energy-container">
                        <img
                            src={energy}
                            alt="Energy"
                            className="energy-icon"
                        />
                        <p>Level 1/50</p>
                    </div>
                    <div className="progress-bar-container">
                        <div className="progress-bar">
                            <div
                                className="progress-bar-fill"
                                style={{ width: "12%" }}
                            />
                        </div>
                        <p>12%</p>
                    </div>
                    <div className="strike-container">
                        <img src={fire} alt="Fire" className="strike-icon" />
                        <p className="strike-days">3</p>
                    </div>
                    <div className="coins-container">
                        <img src={coins} alt="Coins" className="coins-icon" />
                        <p>1240</p>
                    </div>
                </div>
                <div className="header-right-section">
                    <button className="earth-btn avatar-btn">
                        <img
                            src={eagle}
                            alt="Earth"
                            className="earth-img avatar-img"
                        />
                    </button>
                    <button className="earth-btn avatar-btn user-avatar-button">
                        <img
                            src={user.avatar || profile}
                            alt="User"
                            className="earth-img avatar-img"
                        />
                        <img
                            src={verified}
                            alt="Verified"
                            className="verified-img"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
