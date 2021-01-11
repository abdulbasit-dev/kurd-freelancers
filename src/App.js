import React from "react";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">
        <h1 className="text-red-300">Hello Footer</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
