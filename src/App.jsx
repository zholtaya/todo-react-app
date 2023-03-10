import { useState, useEffect } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoItem from "./components/TodoItem";

const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {

    const [todos, setTodos] = useState(initialTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        setTodos(JSON.parse(localStorage.getItem("todos")));
    }, [todos]);

    return (
        <div className="layout">
            <TodoHeader setTodos={setTodos} />
            <div className="all_todos">
                {
                    !todos.length && (
                        <h2>У вас пока нет задач</h2>
                    )
                }
                {
                    todos && todos.map((todo) => {
                        return (
                            <TodoItem key={todo.id} setTodos={setTodos} todo={todo} />
                        )
                    })
                }
            </div>
        </div>
    );

};

export default App;
