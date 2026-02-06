import "./LevelLink.css";

import linkImg from "/icons/link.svg";

function LevelLink({ link, title, img }) {
    return (
        <a href={link || "#"} className="level-link">
            {" "}
            <img src={img || linkImg} alt={title} />
            <span>{title}</span>
        </a>
    );
}

export default LevelLink;
