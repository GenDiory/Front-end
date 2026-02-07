import Counter from "./Counter"; // подключаем наш компонент-счётчик

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Мой минимальный React App</h1>
      <Counter /> {/* вот здесь React покажет наш счётчик */}
    </div>
  );
}

export default App;
