import "./Login.css";

import logo from "../../../public/images/logo.png";
import silhouette from "../../../public/images/silhouette.png";
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitLogin = (e) => {
        e.preventDefault();

        alert(`Logged in with email: ${email}`);

        setEmail("");
        setPassword("");
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
                    <h2>Welcome back!</h2>
                    <p>Sign in your account</p>
                </div>
                <form onSubmit={submitLogin} className="login-form">
                    <label htmlFor="login-email">
                        Email address
                        <input
                            type="email"
                            required
                            name="login-email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label htmlFor="login-pass">
                        Password
                        <input
                            type="password"
                            required
                            name="login-pass"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button type="submit" className="login-button">
                        Sign in
                    </button>
                </form>
                <a href="#" className="forgot-pass-link">
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
