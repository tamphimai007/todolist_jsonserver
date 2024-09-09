// rafce
import React, { useState } from "react";

const List = ({ item, deleteTodos, editTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [form, setForm] = useState({
    title: item.title,
    status: item.status,
  });
  // javascript
  const hdlOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onChangeEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleConfirm = (id) => {
    setIsEdit(!isEdit);
    editTodo(id, form);
  };
  return (
    <div>
      {isEdit ? (
        <input
          onChange={hdlOnChange}
          name="title"
          value={form.title}
          type="text"
        />
      ) : (
        <span>{item.title}</span>
      )}

      {isEdit ? (
        <button onClick={() => handleConfirm(item.id)}>Confirm</button>
      ) : (
        <button onClick={onChangeEdit}>Edit</button>
      )}

      <button onClick={() => deleteTodos(item.id)}>Delete</button>
    </div>
  );
};

export default List;
