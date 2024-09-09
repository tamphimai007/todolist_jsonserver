// rafce
import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";
import { toast } from "react-toastify";
// import useTodoStore from "../store/todos-store";

const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState({
    title: "",
    status: false,
  });

  // javascript
  const API = "http://localhost:8000/todos";
  useEffect(() => {
    // code
    getData();
  }, []);
  const getData = async () => {
    try {
      // code
      const resp = await axios.get(API);
      setTodos(resp.data);
    } catch (err) {
      //err
      console.log(err.message);
      toast.error(err.message);
    }
  };
  const deleteTodos = async (id) => {
    try {
      // code
      const resp = await axios.delete(API + "/" + id);
      toast.success(`Delete ${resp.data.title} Success`);
      getData();
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  const handleOnChange = (e) => {
    console.log(e.target.name, e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddTodo = async (form) => {
    console.log(form);
    try {
      //code
      const resp = await axios.post(API, form);
      toast.success(`Add ${resp.data.title} Success!!!`);
      getData();
    } catch (err) {
      //err
      console.log(err.message);
      toast.error(err.message);
    }
  };

  const editTodo = async (id, data) => {
    try {
      // code
      const resp = await axios.put(API + "/" + id, data);
      console.log(resp);
      getData();
      toast.success(`Edit ${resp.data.title} Success`);
    } catch (err) {
      //err
      console.log(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div>
      <h1>Todolist</h1>
      <input type="text" name="title" onChange={handleOnChange} />
      <button onClick={() => handleAddTodo(form)}>Add</button>
      {todos.map((item, index) => {
        return (
          <List
            editTodo={editTodo}
            deleteTodos={deleteTodos}
            item={item}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Todolist;
