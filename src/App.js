import "./App.css";
import CounterComp from "./components/CounterComp";
import AddTodoForm from "./components/Todos/AddTodoForm";
import TodoList from "./components/Todos/TodoList";
import TotalCompleteItems from "./components/Todos/TotalCompleteTodo";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App container">
      {/* <h1>hi saheb !</h1> */}
      {/* <CounterComp /> */}
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
    </div>
  );
}

export default App;
