import React from "react";
import Product from "./components/Product";

function App() {
  return (
    <main
      className="px-4 py-8 flex justify-center items-center min-h-screen"
      style={{ background: "var(--cream-bg, #F2EAE2)" }}
    >
      <Product />
    </main>
  );
}

export default App;
