import "./Loader.css";

import logo from "/images/logo.png";

function Loader({ isLoading, text }) {
    return (
        <div className={isLoading ? "loader-active" : ""} id="overlay">
            <img src={logo} alt="Logo" className="loader-img" />
            {text && <p className="loader-text">{text}</p>}
        </div>
    );
}

export default Loader;
