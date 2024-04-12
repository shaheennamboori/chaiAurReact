import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
  const [themeMode, setTheme] = useState("light");
  const lightTheme = () => {
    setTheme("light");
  };
  const darkTheme = () => {
    setTheme("dark");
  };
  useEffect(() => {
    let element = document.querySelector("html").classList;
    element.remove("light", "dark");
    element.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
