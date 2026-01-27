import "./InfoPage.css";

function InfoPage() {
    return (
        <div
            className="details-container"
            style={{
                backgroundImage: `url(/images/background.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="details-content">
                <h1>Info Page</h1>
                <p>Welcome to the Info page!</p>
            </div>
        </div>
    );
}

export default InfoPage;
