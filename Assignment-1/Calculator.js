import React, { useState } from "react";
import './Calculator.css';
import Button from "./Button";
import Meimage from './Me.jpg'; 

function KeyPadComponent() {
    const [text1, setText] = useState("");  
    const [showImage, setShowImage] = useState(false); 

    const ClickHandle = (e) => {
        if (e.target.value === "C") {
            setText("");  
        } else if (e.target.value === "=") {
            setText(eval(text1));  
            alert(eval(text1));
        } else if (e.target.value === "square") {
            const number = parseFloat(text1);
            if (!isNaN(number)) {
                const square = number * number;
                setText(square.toString());
                alert(`Square: ${square}`);
            }
        } else {
            setText(text1 + e.target.value); 
        }
    };

    const handleShowImage = () => {
        setShowImage(true);  
    };

    return (
        <div>
            <div className="Calculator">
                <div className="screen-row">
                    <input type="text" readOnly value={text1} />
                </div>

                <div>
                    <Button label="(" ClickHandle={ClickHandle} />
                    <Button label="CE" ClickHandle={ClickHandle} />
                    <Button label=")" ClickHandle={ClickHandle} />
                    <Button label="C" ClickHandle={ClickHandle} />
                </div>
                <div>
                    <Button label="1" ClickHandle={ClickHandle} />
                    <Button label="2" ClickHandle={ClickHandle} />
                    <Button label="3" ClickHandle={ClickHandle} />
                    <Button label="+" ClickHandle={ClickHandle} />
                </div>
                <div>
                    <Button label="4" ClickHandle={ClickHandle} />
                    <Button label="5" ClickHandle={ClickHandle} />
                    <Button label="6" ClickHandle={ClickHandle} />
                    <Button label="-" ClickHandle={ClickHandle} />
                </div>
                <div>
                    <Button label="7" ClickHandle={ClickHandle} />
                    <Button label="8" ClickHandle={ClickHandle} />
                    <Button label="9" ClickHandle={ClickHandle} />
                    <Button label="*" ClickHandle={ClickHandle} />
                </div>
                <div>
                    <Button label="." ClickHandle={ClickHandle} />
                    <Button label="0" ClickHandle={ClickHandle} />
                    <Button label="=" ClickHandle={ClickHandle} />
                    <Button label="/" ClickHandle={ClickHandle} />
                </div>
                <div className="ShowSquareRow">
                    <Button label="Show Me" customClick={handleShowImage} /> 
                    <Button label="square" ClickHandle={ClickHandle} /> 
                </div>

            </div>

            
            {showImage && (
                <div>
                    <img src={Meimage} alt="Me" style={{ width: "150px", height: "150px", padding: "81px"}} />
                </div>
            )}
        </div>
    );
}

export default KeyPadComponent;
