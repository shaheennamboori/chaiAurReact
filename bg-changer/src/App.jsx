import { useState } from "react";

function App() {
  const [color, setColor] = useState("Olive");

  function createColorFunction(colorValue) {
    return () => setColor(colorValue);
  }
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{
          backgroundColor: color,
        }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 bg-red-600 py-1 rounded-full text-white shadow-lg"
              onClick={createColorFunction("Red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 bg-green-600 py-1 rounded-full text-white shadow-lg"
              onClick={createColorFunction("Green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 bg-blue-600 py-1 rounded-full text-white shadow-lg"
              onClick={createColorFunction("Blue")}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
