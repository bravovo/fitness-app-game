import "./Login.css";

import logo from "/images/logo.png";
import silhouette from "/images/silhouette.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitLogin = (e) => {
        e.preventDefault();

        alert(`Logged in with email: ${email}`);

        setEmail("");
        setPassword("");
        navigate("/info");
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
                    <h2>Welcome back!</h2>
                    <p>Sign in your account</p>
                </div>
                <form onSubmit={submitLogin} className="login-form">
                    <label htmlFor="login-email">
                        Email address
                        <input
                            placeholder="Enter your email"
                            type="email"
                            value={email}
                            required
                            name="login-email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label htmlFor="login-pass">
                        Password
                        <input
                            placeholder="Enter your password"
                            type="password"
                            required
                            value={password}
                            name="login-pass"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button type="submit" className="login-button">
                        Sign in
                    </button>
                </form>
                <a href="/forgot-password" className="forgot-pass-link">
                    Forgot password?
                </a>
                <p className="sign-up-para">
                    Don't have an account? <a href="/register">Sign up</a>
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

export default Login;
