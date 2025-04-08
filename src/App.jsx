import { UseState } from "./UseState.jsx";
import { ClassState } from "./ClassState.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <UseState name="UseState" />
      <ClassState name="ClassState" />
    </div>
  );
}

export default App;
