import "./LevelResource.css";

import file from "/icons/file.svg";
import download from "/icons/download.svg";

function LevelResource({ title, onClick }) {
    return (
        <button className="resource" onClick={onClick}>
            <div className="resource-text">
                <img src={file} alt="File" />
                {title}
            </div>
            <img src={download} alt="Download" />
        </button>
    );
}

export default LevelResource;
