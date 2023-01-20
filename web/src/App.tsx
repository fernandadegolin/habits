import "./styles/global.css";
import { Habit } from "./components/Habit";

function App() {
  return (
    <>
      <Habit completed={2} />
      <Habit completed={2} />
      <Habit completed={3} />
    </>
  );
}

export default App;
