import "./Register.css";

import logo from "/images/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { user } from "../../data/constants";
import SilhouetteImg from "../../components/SilhouetteImg/SilhouetteImg";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submitRegister = (e) => {
        e.preventDefault();

        // Simulate successful registration
        user.email = email;
        user.password = password;

        // Redirect to details page
        navigate("/info");
    };

    return (
        <div className="login-container">
            <div className="form-container">
                <img src={logo} alt="Logo" />
                <div className="form-text-container">
                    <h2>Welcome!</h2>
                    <p>Create your account</p>
                </div>
                <form onSubmit={submitRegister} className="login-form">
                    <label htmlFor="register-email form-label">
                        Email address
                        <input
                            placeholder="Enter your email"
                            type="email"
                            required
                            name="register-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label htmlFor="register-pass form-label">
                        Password
                        <input
                            placeholder="Enter your password"
                            type="password"
                            required
                            name="register-pass"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
            <SilhouetteImg />
        </div>
    );
}

export default Register;
