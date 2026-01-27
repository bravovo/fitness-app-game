import "./Register.css";

import logo from "../../../public/images/logo.png";
import silhouette from "../../../public/images/silhouette.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const submitRegister = (e) => {
        e.preventDefault();

        // Client-side validation
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long!");
            return;
        }

        // Simulate successful registration
        alert(`Registration successful! Welcome, ${username}`);

        // Redirect to details page
        navigate("/details");
    };

    return (
        <div
            className="login-container"
            style={{
                backgroundImage: `url(../../../public/images/background.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="form-container">
                <img src={logo} alt="Logo" />
                <div className="form-text-container">
                    <h2>Create Account</h2>
                    <p>Sign up for a new account</p>
                </div>
                <form onSubmit={submitRegister} className="login-form">
                    <label htmlFor="register-username">
                        Username
                        <input
                            type="text"
                            required
                            name="register-username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label htmlFor="register-email">
                        Email address
                        <input
                            type="email"
                            required
                            name="register-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label htmlFor="register-pass">
                        Password
                        <input
                            type="password"
                            required
                            name="register-pass"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <label htmlFor="register-confirm-pass">
                        Confirm Password
                        <input
                            type="password"
                            required
                            name="register-confirm-pass"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </label>
                    <button type="submit" className="login-button">
                        Sign up
                    </button>
                </form>
                <p className="sign-up-para">
                    Already have an account? <a href="/">Sign in</a>
                </p>
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

export default Register;
