import { useState } from "react";
import style from "./Form.module.css";

function Form({ setData }) {
  const [todo, setTodo] = useState("");

  function formSubmit(e) {
    e.preventDefault();
    const item = {
      id: Date.now(),
      text: todo,
      selected: false,
    };
    setData((pre) => {
      return [...pre, item];
    });
    setTodo("");
  }
  return (
    <form onSubmit={formSubmit}>
      <input
        type="text"
        placeholder="Add new text here..."
        autoFocus="on"
        required
        onChange={(e) => {
          setTodo(e.target.value.trim());
        }}
        value={todo}
      />
      <button className={style.btn}>Add</button>
    </form>
  );
}

export default Form;
