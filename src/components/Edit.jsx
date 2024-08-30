 
import React, { useState } from "react";

const Edit = ({ editTodo,task }) => {
  const [value, setvalue] = useState('');
  const handelSubmit = (e) => {
    e.preventDefault();
    editTodo(value,task.id);
    setvalue("");
  };
  return (
    <form className="mb-4 font-primary w-full" onSubmit={handelSubmit}>
      <input
        type="text"
        className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded
        placeholder:text-black-500 "
        placeholder="Update Task"
        onChange={(e) => setvalue(e.target.value)}
        value={value}></input>
      <button className="bg-gray-700 border-none  p-2  text-white cursor-pointer rounded ml-2">
        Update Task
      </button>
    </form>
  );
};

export default Edit;
