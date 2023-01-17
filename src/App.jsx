import { useState, useEffect } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoItem from "./components/TodoItem";

const initialTodos = [
    {
        id: 1,
        name: "Купить продукты",
        date: new Date(),
        checked: false
    },
    {
        id: 2,
        name: "Заправить автомобиль",
        date: new Date(),
        checked: false
    }
];

const App = () => {

    const [todos, setTodos] = useState(initialTodos);


    return (
        <div className="layout">
            <TodoHeader setTodos={setTodos} />
            <div className="all_todos">
                {
                    todos.map((todo) => {
                        return (
                            <TodoItem setTodos={setTodos} todo={todo} />
                        )
                    })
                }
            </div>
        </div>
    );

};

export default App;
