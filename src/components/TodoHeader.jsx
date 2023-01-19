import { useState } from "react";

const TodoHeader = ({ setTodos }) => {
    const [value, setValue] = useState('');

    const onChangeHandle = (event) => {
        setValue(event.target.value);
    }

    const onSubmitHandle = (event) => {
        event.preventDefault();

        // add todos

        if (value.length < 3) {
            return;
        }

        setTodos((prevState) => {
            prevState = [...prevState];

            prevState.push({
                id: Date.now(),
                name: value,
                date: new Date(),
                checked: false
            });
            return prevState;
        });

        setValue('');
    }
    return (
        <div>
            <form onSubmit={(e) => onSubmitHandle(e)} className="form_add">
                <h2>Добавить задачу:</h2>
                <div className="addForm">
                    <input type="text"
                        placeholder="Купить молоко..."
                        onChange={(e) => onChangeHandle(e)}
                        value={value}
                        className="add_input_style"
                    />
                    <button onClick={onSubmitHandle} className="addButton">Добавить</button>
                </div>
            </form>
        </div>
    );
}

export default TodoHeader;