import { useState } from "react";
import "./App.css";

function App() {
  // useState хук для создания состояния isHighlighted, false же означает что изначально абзац не подсвечен
  const [isHighlighted, setIsHighlighted] = useState(false);

  // о а эта функция для переключения подстветки текста
  function toggleHighlight() {
    // меняем состояние на противоположное
    setIsHighlighted(!isHighlighted);
  }

  return (
    <>
      <button onClick={toggleHighlight}>Toggle Highlight</button>
      <p className={isHighlighted ? "highlight" : ""}>
        This is a sample paragraph.
      </p>
    </>
  );
}

export default App;
