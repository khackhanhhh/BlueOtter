import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';
import UserTodo from './components/UserTodo';
import UserPhoto from './components/UserPhoto';
import UserComment from './components/UserComment';

function App() {
  return (
    <Router>
      <div className="container-xxl ml-5 mr-5">
      <br/>
      <Route path="/" exact component={UserList} />
      <Route path="/:id" exact component={UserDetails} />
      <Route path="/todos/:id" component={UserTodo} />
      <Route path="/comments/:id" component={UserComment} />
      <Route path="/photos/:id" component={UserPhoto} />
      </div>
    </Router>
    
  );
 }

export default App;
