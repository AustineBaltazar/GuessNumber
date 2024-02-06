import React, { useEffect, useState } from "react";
import "./cardview.css";

export default function CardView() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [editMode, setEditMode] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addList = () => {
    if (editMode !== null) {
      const updatedList = todo.map((item) =>
        item.id === editMode ? { ...item, lists: input } : item
      );
      setTodo(updatedList);
      setEditMode(null);
    } else {
      const newList = {
        lists: input,
        id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
        color: "black",
      };
      setTodo([...todo, newList]);
    }
    setInput(""); // Clear input after adding or updating task
  };

  const removeList = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  const editList = (id) => {
    const newInput = todo.find((item) => item.id === id);
    setInput(newInput.lists);
    setEditMode(id);
  };

  const isDone = (id) => {
    const updatedTodo = todo.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setTodo(updatedTodo);
  };

  const taskStatus = (id) => {
    const failed = todo.map((item) =>
      item.id === id
        ? { ...item, color: item.color === "red" ? "black" : "red" }
        : item
    );
    setTodo(failed);
  };

  return (
    <div className="container">
      <div>
        <h3>MY TODO LIST APP</h3>
        <label htmlFor="">
          <input type="text" value={input} onChange={handleChange} />
          <button onClick={addList}>
            {editMode !== null ? "Update" : "Submit"}
          </button>
        </label>

        {todo.map(function (data) {
          return (
            <div key={data.id} className={data.done ? "truth-list" : ""}>
              <h1 className={"red" === data.color ? "failed-list" : ""}>
                {data.lists}
              </h1>
              <button onClick={() => removeList(data.id)}>X</button>
              <button onClick={() => editList(data.id)}>Edit</button>
              <button onClick={() => isDone(data.id)}>
                {data.done ? "Undone" : "Done"}
              </button>
              <button onClick={() => taskStatus(data.id)}>failed</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
