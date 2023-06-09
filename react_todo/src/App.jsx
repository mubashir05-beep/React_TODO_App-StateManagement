import "./App.css";
import { Todo } from "./components/To-Do App/Todo";
import WeatherApp from "./components/Weather_App/WeatherApp";
import TodoWork from "./components/To-Do App/TodoWork";
import AddTodo from "./components/To-Do App/AddTodo";
import Music from "./components/Music/Music";
function App() {
  return (
    <div className="mainContainer">
      <Todo>
        <div className="TodoApp">
          <AddTodo/>
          <TodoWork />
        </div>
      </Todo>
    </div>
  );
}

export default App;
