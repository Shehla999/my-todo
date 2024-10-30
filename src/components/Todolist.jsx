import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../redux/todo/todosSlice";
import { nanoid } from "@reduxjs/toolkit";

const Todolist = () => {
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      dispatch(updateTodo({ id: editId, text }));
      setEditId(null);
    } else {
      dispatch(addTodo({ id: nanoid(), text }));
    }
    setText("");
  };

  const handleEdit = (todo) => {
    setText(todo.text);
    setEditId(todo.id);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">TODO List</h1>
      <div onSubmit={handleSubmit} className="flex mb-4 gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Add new task"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
        >
          {editId ? "update" : "Add"}
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 border-b"
          >
            <span>{todo.text}</span>
            <div>
              <button className="px-2 py-1 text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white">
                EDIT
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
