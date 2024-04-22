"use client";

// Todo import all the components from components folder
import React from "react";
import Form from "@/components/Form";
import Header from "@/components/Header";
import TODOHero from "@/components/TODOHero";
import TODOList from "@/components/TODOList";

// Todo create a functional component Page

function Home() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

// Todo create a variable to store the number of completed todos
  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;

  const total_todos = todos.length;

// Todo return the Page component
  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form todos={todos} setTodos={setTodos}/>
      <TODOList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

// Todo export the Page component
export default Home;