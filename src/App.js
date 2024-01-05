import React, { useState } from "react";
import "./index.css";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [id, setId] = useState(1);

  const addTodo = () => {
    if (todoInput == "") return;
    const newTodo = {
      name: todoInput,
      completed: false,
      id: id,
    };
    setTodoList([newTodo, ...todoList]);
    setId((pre) => pre + 1);
    setTodoInput("");
  };

  const deleteTodo = (item) => {
    const updateTodo = todoList.filter((i) => {
      return i.id !== item;
    });
    setTodoList(updateTodo);
  };

  const viewTodo = (item) => {
    const updatedTodo = todoList.map((i) => {
      return i.id == item ? { ...i, completed: true } : i;
    });
    setTodoList(updatedTodo);
  };

  return (
    <div className="main-container">
      <div className="head-container">
        <h1>Todo App</h1>
      </div>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter name"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <div className="list-container">
        {todoList?.map((item, index) => {
          return (
            <div key={index} className="todo-item-conatiner">
              <p
                style={{
                  textDecoration: `${item.completed ? "line-through" : "none"}`,
                }}
              >
                {item.name}
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  style={{
                    backgroundColor: "blue",
                    cursor: `${item.completed ? "not-allowed" : "pointer"}`,
                    backgroundColor: `${item.completed ? "grey" : "blue"}`,
                  }}
                  onClick={() => viewTodo(item.id)}
                >
                  {item.completed ? "Viewed" : "View"}
                </button>
                <button onClick={() => deleteTodo(item.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
