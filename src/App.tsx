import React, { useState } from "react";
import "./App.css";
import InputFields from "./components/InputFields";
import BartsButt from "./components/BartsButt";
import TodoList from "./components/TodoList";
import { Todo } from "./utils";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [bartButt, setBartButt] = useState(false);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading"> I WILL KILL THAT PICE OF CHEESE 🧀 NOM </span>
      <InputFields todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
      <div>
        <BartsButt
          setBartButt={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </div>
  );
};

export default App;
