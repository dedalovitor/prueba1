import React, { useState } from "react";

const LikesCounter = () => {

    const [like, setLike] = useState(0);

    return (

        <>  <h1>{like}</h1>
            <button onClick={() => setLike(like + 1)}>click me to increase likes</button>
            <button onClick={() => setLike(like * 2)}>click me to decrease likes</button>
        </>

    );
}

export default LikesCounter;