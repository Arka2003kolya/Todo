import { useState } from "react";
import "./ToDo.css";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import { VscCircleSlash } from "react-icons/vsc";
import { Button, TextField } from "@mui/material";

const todoKey = "reactTodo";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [dateTime, setDateTime] = useState("");

  const [task, setTask] = useState(() => {
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) return [];
    return JSON.parse(rawTodos);
  });

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); //stop propagation

    if (!inputValue) return;

    if (
      task.some(
        (item) => item.taskName.toLowerCase() === inputValue?.toLowerCase()
      )
    ) {
      setInputValue("");
      alert("already exist");
      return;
    }

    const newTask = {
      id: new Date().getTime(),
      taskName: inputValue,
      isCompleted: false,
    };
    setTask((prev) => [...prev, newTask]);

    localStorage.setItem(todoKey, JSON.stringify(task));

    setInputValue("");
  };

  setInterval(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();

    setDateTime(`${formattedDate} - ${formattedTime}`);
  }, 1000);

  const handleDeleteToDo = (id) => {
    const updatedTask = task.filter((curTask) => {
      return curTask.id !== id;
    });
    setTask(updatedTask);
  };

  const handleClearTodoData = () => {
    setTask([]);
  };
  const handleCutTodoData = (id) => {
    setTask((prev) =>
      prev.map((curTask) => {
        if (curTask.id === id) {
          return {
            ...curTask,
            isCompleted: curTask.id === id ? true : false,
          };
        } else return curTask;
      })
    );
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{dateTime}</h2>
      </header>
      <section className="from">
        <form onSubmit={handleFormSubmit}>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              style={{ position: "none !important" }}
            >
              Contained
            </Button>
          </div>
        </form>
      </section>
      <section className="myUnOrderList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{curTask.taskName}</span>
                <button
                  className="check-btn"
                  onClick={() => handleCutTodoData(curTask.id)}
                >
                  {curTask?.isCompleted ? <MdCheck /> : <VscCircleSlash />}
                  
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteToDo(curTask.id)}
                >
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear All
        </button>
      </section>
    </section>
  );
};
