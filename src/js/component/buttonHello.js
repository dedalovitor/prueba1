
import React, { useState } from "react";

const ButtonHello = () => {

    const [superVariable, setSuperVariable] = useState(null);
    console.log(superVariable);

    return (
        <div className="container">
            <button onClick={() => setSuperVariable('hello')}>click me to say hello</button>
            <h1>{superVariable}</h1>
        </div>
    );
}

export default ButtonHello;
