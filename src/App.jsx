import React from "react";
import Todolist from "./components/Todolist";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* <h1 className="text-5xl">Todo List </h1> */}
      <Todolist />
    </div>
  );
};

export default App;
