import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() === "") {
      return;
    }

    setTasks((prevTasks) => [
      ...prevTasks,
      { text: newTask, completed: false },
    ]);
    setNewTask("");
  };

  const handleCompleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <>
      <h2 className="headline">ToDo List</h2>

      <div className="to-do">
        <div className="task-form">
          <input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={handleInputChange}
            className="input"
          />
          <button onClick={handleAddTask} className="add-btn">
            Add
          </button>
        </div>
        <div className="tasks">
          <div className="task">
            {tasks.map((task, index) => (
              <div key={index} className="task-item">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleCompleteTask(index)}
                  className="input"
                />
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="delete-btn"
                >
                  Delet
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoApp;
