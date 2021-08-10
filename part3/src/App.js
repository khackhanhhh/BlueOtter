import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';

function App() {
  return (
    <Router>
      <div className="container-xxl ml-5 mr-5">
      <br/>
      <Route path="/" exact component={UserList} />
      <Route path="/:id" component={UserDetails} />
      </div>
    </Router>
    
  );
 }

export default App;
