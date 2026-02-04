import "./AssignTextArea.css";

function AssignTextArea({ name, question, data, setData, limit = 500 }) {
    console.log(question, data);

    return (
        <label htmlFor={name} className="assignment-form-input-label">
            {question}
            <div className="textarea-wrapper">
                <textarea
                    required
                    name={name}
                    className="question-area"
                    style={
                        data.length > limit
                            ? {
                                  borderColor: "red",
                                  boxShadow: "0 0 15px red",
                              }
                            : {}
                    }
                    placeholder="Write your answer..."
                    value={data}
                    onChange={setData}
                />
                <span className="char-counter">
                    {data.length}/{limit}
                </span>
            </div>
        </label>
    );
}

export default AssignTextArea;
