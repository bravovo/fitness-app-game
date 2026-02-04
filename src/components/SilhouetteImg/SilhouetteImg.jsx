import "./SilhouetteImg.css";

import silhouette from "/images/silhouette.png";

function SilhouetteImg({ className = "" }) {
    return (
        <div>
            <img
                src={silhouette}
                alt="Silhouette"
                className={`sil-image ${className}`}
            />
        </div>
    );
}

export default SilhouetteImg;
