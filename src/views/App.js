import './App.scss';
import NavComponent from './Nav/NavComponent';
import HomeComponent from './Home/HomeComponent';
import ToDoListComponent from './ToDoApp/ToDoListComponent';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavComponent></NavComponent>
        </header>
        <div>
          <Switch>
            <Route path={`/`} exact>
              <HomeComponent />
            </Route>
            <Route path={`/todo`}>
              <ToDoListComponent />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
