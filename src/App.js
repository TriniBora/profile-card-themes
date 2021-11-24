import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Card />
      </ThemeProvider>
    </>
  );
}

export default App;
