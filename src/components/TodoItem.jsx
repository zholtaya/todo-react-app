import React from 'react';
import formatDate from '../utils/formatDate';

const TodoItem = ({ setTodos, todo }) => {

    const onCheckedToggle = (id) => {
        setTodos((prevState) => {
            prevState = [...prevState];

            prevState = prevState.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        checked: !todo.checked
                    }
                }
                return todo;
            });
            return prevState;
        });
    }

    const onDeleteTodoById = (id) => {
        setTodos((prevState) => {
            prevState = [...prevState];

            // .filter()
            prevState = prevState.filter((todo) => todo.id !== id);


            return prevState;

        });
    }

    return (
        <div className="one_todo">
            <h3>{todo.name}({formatDate(todo.date)})</h3>
            <div>
                <button onClick={() => onCheckedToggle(todo.id)} className="buttons">
                    {todo.checked ? "Не выполнена" : "Выполнена"}
                </button>
                <button onClick={() => onDeleteTodoById(todo.id)} className="buttons">
                    Удалить
                </button>
            </div>
        </div>
    )
}

export default TodoItem;