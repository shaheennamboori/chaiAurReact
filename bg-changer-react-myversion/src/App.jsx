import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("bg-black");

  return (
    <>
      <div className={"relative h-lvh " + color}>
        <div className="absolute bottom-10 r">
          <ul className="list-none flex">
            <li
              className="p-5 bg-red-600"
              onClick={() => setColor("bg-red-600")}
            ></li>
            <li
              className="p-5 bg-blue-600"
              onClick={() => setColor("bg-blue-600")}
            ></li>
            <li
              className="p-5 bg-green-600"
              onClick={() => setColor("bg-green-600")}
            ></li>
            <li
              className="p-5 bg-orange-600"
              onClick={() => setColor("bg-orange-600")}
            ></li>
            <li
              className="p-5 bg-yellow-600"
              onClick={() => setColor("bg-yellow-600")}
            ></li>
            <li
              className="p-5 bg-purple-600"
              onClick={() => setColor("bg-purple-600")}
            ></li>
            <li
              className="p-5 bg-violet-600"
              onClick={() => setColor("bg-violet-600")}
            ></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
