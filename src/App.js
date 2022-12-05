import "./index.css";
import { planetMap } from "./componentTwo.js";
import { math } from "./componentOne.js";
function App() {
  return (
    <>
      {planetMap()}
      {math()}
    </>
  );
}

export default App;
