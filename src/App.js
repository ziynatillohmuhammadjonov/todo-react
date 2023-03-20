import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  const itemSelect = (id) => {
    const newArr = data.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    setData(newArr);
  };
  const delItem = (id) => {
    const newArr = data.filter((item) => {
      return item.id !== id;
    });
    console.log(newArr);
    setData(newArr);
  };
  const clearAll = () => {
    setData("");
  };
  return (
    <div className="App">
      <Form setData={setData} />
      <TodoList data={data} itemSelect={itemSelect} delItem={delItem} />
      <hr />
      <footer>
        <p>Item: {data.length}</p>
        <button onClick={clearAll}>ClearAll</button>
      </footer>
    </div>
  );
}

export default App;
