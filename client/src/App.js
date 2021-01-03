import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalProvider from './utils/GlobalContext';
import Homepage from './pages/Homepage';
import AddTodo from './pages/AddTodo';
// import ViewTodos from './pages/ViewTodos';
// import Navbar from './components/Navbar';
import Portal from "./pages/Portal";

function App() {
  return (
    <Router>
      <GlobalProvider>
        {/* <Navbar /> */}
        <Route exact path='/portal' component={Portal} />
        <Route exact path='/' component={Homepage} />
        <div className="App">
          <Switch>
            
            <Route exact path='/todos/new' component={AddTodo} />
          </Switch>
        </div>
      </GlobalProvider>
    </Router>
  );
}


export default App;
