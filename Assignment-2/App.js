import React from "react";
import KeyPadComponent from "./Calculator";
import "./Calculator.css"; 

function App() {
    return (
        <div className="App">
            <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "2rem", color: "#333" }}>
                My React Calculator
            </h1>
            <KeyPadComponent />
        </div>
    );
}

export default App;
