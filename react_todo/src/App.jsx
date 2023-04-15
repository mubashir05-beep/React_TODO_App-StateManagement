import "./App.css";
import { Todo } from "./components/To-Do App/Todo";
import WeatherApp from "./components/Weather_App/WeatherApp";
import TodoWork from "./components/To-Do App/TodoWork";
import AddTodo from "./components/To-Do App/AddTodo";
import Music from "./components/Music/Music";
function App() {
  return (
    <div className="mainContainer">
      {/* <WeatherApp /> */}
      <Todo>
        <div className="App">
          <AddTodo/>
          <TodoWork />
          
        </div>
      </Todo>
      {/* <Music /> */}
    </div>
  );
}

export default App;
