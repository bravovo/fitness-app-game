import { useNavigate } from "react-router-dom";
import "./forgotPassword.css";

import logo from "/images/logo.png";
import silhouette from "/images/silhouette.png";
import { useState } from "react";
import { user } from "../../data/constants";

function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [stage, setStage] = useState(1);

    const submitStage1 = (e) => {
        e.preventDefault();

        user.email = email;

        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setStage(2);
    };

    const submitStage2 = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long!");
            return;
        }

        user.password = password;

        alert("Password has been reset successfully!");
        setEmail("");
        navigate("/");
    };

    return (
        <div
            className="login-container"
            style={{
                backgroundImage: `url(/images/background.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="form-container">
                <img src={logo} alt="Logo" />
                <div className="form-text-container">
                    <h2>Forgot password?</h2>
                    <p>Reset your account password</p>
                </div>
                {stage === 1 ? (
                    <form onSubmit={submitStage1} className="login-form">
                        <label htmlFor="login-email form-label">
                            Your registered email address
                            <input
                                placeholder="Enter your email address"
                                type="email"
                                required
                                name="login-email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <button type="submit" className="login-button">
                            Confirm
                        </button>
                    </form>
                ) : (
                    <form onSubmit={submitStage2} className="login-form">
                        <label htmlFor="login-pass form-label">
                            New password
                            <input
                                placeholder="Enter your new password"
                                type="password"
                                value={password}
                                required
                                name="login-pass"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <label htmlFor="login-pass form-label">
                            Confirm new password
                            <input
                                value={confirmPassword}
                                placeholder="Enter your confirm new password"
                                type="password"
                                required
                                name="login-pass"
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                        </label>
                        <button type="submit" className="login-button">
                            Confirm
                        </button>
                    </form>
                )}
            </div>
            <div>
                <img
                    src={silhouette}
                    alt="Silhouette"
                    className="login-page-image"
                />
            </div>
        </div>
    );
}

export default ForgotPassword;
