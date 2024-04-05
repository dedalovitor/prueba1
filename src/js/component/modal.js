import React, { useState } from "react";

const Modal = () => {

    const [opened, setOpened] = useState(true);

    return opened ? (

        <div>
            <h1>Soy un modal que se abre y se cierra</h1>
            <br></br>
            <button type="button" onClick={() => setOpened(false)}>cierrame!</button>
        </div>

    ) : (

        <button type="button" onClick={() => setOpened(true)}>ábreme!</button>

    );



};

export default Modal;