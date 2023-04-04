import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/Layout/Navbar';
import NotFound from './component/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddUsers from './Users/AddUsers';
import EditUser from './Users/EditUser';
import UserView from './Users/UserView';
// You have to start with this command npm run start:dev {because we have concurrently we have included in a single path}
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUsers} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={UserView} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
