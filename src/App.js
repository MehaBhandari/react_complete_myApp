// import { createStore } from "redux";

import GrandParent from "./hooks/useContextHook/grandParentComponent";
import Counter from "./components/incrementDecrementCounter";
import EmployeeListingComponent from "./components/employeeListingComponent";

// var applicationStore = createStore();

function App() {
  return (
      <div className="App">
      <header className="App-header">
        <h1>First React Component</h1>
      </header>
      <Counter></Counter>
      <GrandParent></GrandParent>
      <EmployeeListingComponent></EmployeeListingComponent>
      </div>
  );
}

export default App;
