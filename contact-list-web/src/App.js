import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListContactComponent from './components/ListContactComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddContactComponent from './components/AddContactComponent';

function App() {
  return (
      <div>
        <Router>
            <Header />

            <div className="container">
              <Switch>
                <Route path = "/" exact component = {ListContactComponent}></Route>
                <Route path = "/contacts" component = {ListContactComponent}></Route>
                <Route path = "/add-contact/:id" component = {AddContactComponent}></Route>
              </Switch>
            </div>
            
            <Footer />
        </Router>
      </div>
  );
}

export default App;
