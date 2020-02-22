import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <h1>Context App</h1>
      <Navbar />
      <BookList />
    </div>
  );
}

export default App;
