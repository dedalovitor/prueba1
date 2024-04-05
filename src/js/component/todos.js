import React, { useState } from "react";

const Todos = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    return (
        <div className="container">
            <h1>My Todos</h1>
            <input
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                onKeyUp={(e) => {
                    if (e.key == "Enter" && e.target.value.trim() != "") {
                        setTodos(todos.concat(e.target.value));
                        setInputValue("");
                    }

                }}
                placeholder="What do you need to do?">

            </input>

            <ul>
                {todos.map((item, index) =>
                    <li key={index}>{item}{" "}
                        <i
                            className="fa-solid fa-trash-can"
                            onClick={() =>
                                setTodos(
                                    todos.filter(
                                        (t, currentIndex) =>
                                            index != currentIndex
                                    )
                                )
                            }> (X) </i>
                    </li>
                )}

            </ul>

            <div>{todos.length > 0 ? `${todos.length} todos` : 'No todos'}</div>
        </div>
    );
};





export default Todos;