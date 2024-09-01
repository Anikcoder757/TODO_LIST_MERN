import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";

const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Add logic to handle todo submission here, e.g., sending data to a server
    console.log("Submitted:", text); 
    setText(""); // Clear the input field after submission
    dispatch(addNewTodo());
  };

  const onInputChange = (e) => {
    setText(e.target.value); 
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        type="text"
        value={text}
        onChange={onInputChange}
        placeholder="Enter new Todo Task......" 
      />
      <button type="submit">Add Todo</button> 
    </form>
  );
};

export default TodoForm;