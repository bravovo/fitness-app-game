import "./DetailsPage.css";

function DetailsPage() {
    return (
        <div
            className="details-container"
            style={{
                backgroundImage: `url(../../../public/images/background.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="details-content">
                <h1>Details Page</h1>
                <p>Welcome to the details page!</p>
            </div>
        </div>
    );
}

export default DetailsPage;
