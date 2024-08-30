import React, { useState } from "react";

const Form = ({createTodo}) => {
  const [value, setvalue] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    createTodo(value);
    setvalue("");
  };
  return (
    <form className="mb-4 font-primary w-full" onSubmit={handelSubmit}>
      <input
        type="text"
        className="outline-none bg-transparent border border-gray-500 p-4 w-[400px] text-black mb-8 rounded
        placeholder:text-black-500 mt-8 "
        placeholder="What task do you have today?"
        onChange={(e) => setvalue(e.target.value)}
        value={value}
      ></input>
      <button className="bg-gray-700 border-none  p-2 w-32  text-white cursor-pointer rounded ml-2">
        Add task
      </button>
    </form>
  );
};

export default Form;
