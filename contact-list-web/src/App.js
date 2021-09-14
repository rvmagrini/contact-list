import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListContactComponent from './components/ListContactComponent';
import AddContactComponent from './components/AddContactComponent';
import ViewContactComponent from './components/ViewContactComponent';

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
                <Route path = "/view-contact/:id" component = {ViewContactComponent}></Route>
              </Switch>
            </div>
            
            <Footer />
        </Router>
      </div>
  );
}

export default App;
