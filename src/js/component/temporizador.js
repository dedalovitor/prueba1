import React, { useState, useEffect } from "react";

const Temporizador = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    /*
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    */

    return (

        <>
            <h1>{time}</h1>
            <button onClick={() => setTime(new Date().toLocaleTimeString())}>dime la hora</button>

        </>
    );

};

export default Temporizador;