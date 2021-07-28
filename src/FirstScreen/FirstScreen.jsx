import React from "react";
import loading from "./loading.svg";
import loading2 from "./loading2.svg";
import "./loading.scss";

function FirstScreen() {
    return (
        <div className="loading">
            <img src={loading2} alt="loading" />
        </div>
    );
}

export default FirstScreen;
