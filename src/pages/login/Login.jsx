import "./Login.css";

import logo from "/images/logo.png";
import silhouette from "/images/silhouette.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { user } from "../../data/constants";

import Loader from "../../components/Loader/Loader";

function Login() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    const submitLogin = (e) => {
        e.preventDefault();

        user.email = email;
        if (!user.password) {
            user.password = password;
        } else {
            if (user.password !== password) {
                alert(
                    "Invalid credentials. Please check your password and try again."
                );
                setPassword("");
                return;
            }
        }

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
            <Loader isLoading={isLoading} text={"hello world"} />
            <div className="form-container">
                <img src={logo} alt="Logo" />
                <div className="form-text-container">
                    <h2>Welcome back!</h2>
                    <p>Sign in your account</p>
                </div>
                <form onSubmit={submitLogin} className="login-form">
                    <label htmlFor="login-email form-label">
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
                    <label htmlFor="login-pass form-label">
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
