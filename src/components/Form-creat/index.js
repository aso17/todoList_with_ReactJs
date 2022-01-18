import { useState } from "react";
import "../Form-creat/Form.css";

const FromCreate = (props) => {
  const [newData, setnewdata] = useState("");

  const HeandelSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();

    const newTodo = {
      id: Math.floor(Math.random() * 100 + 1),
      title: `${newData}`,
    };
    await props.ondataTodo(newTodo);
  };

  return (
    <form className="Form-todo" onSubmit={HeandelSubmit}>
      <input type="text" value={newData} onChange={(e) => setnewdata(e.target.value)} />
      <button type="submit">add</button>
    </form>
  );
};
export default FromCreate;
