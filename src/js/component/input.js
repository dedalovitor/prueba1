import React, { useState } from "react";

const Input = () => {

    const [inputText, setInputText] = useState();

    return (
        <>
            <h2>Mi nombre es: {inputText ? inputText : "escríbelos porfa"}</h2>
            <input type="text" onChange={(event) => setInputText(event.target.value)} value={inputText} placeholder="Porfa, escribe tu nombre y apellidos:"></input>

        </>
    );
};

export default Input;