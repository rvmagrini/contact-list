import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListContactComponent from './components/ListContactComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <div>
        <Router>
            <Header />

            <div className="container">
              <Switch> http://localhost:3000/contacts
                <Route path = "/" component = {ListContactComponent}></Route>
                <Route path = "/contacts" component = {ListContactComponent}></Route>
                <ListContactComponent />
              </Switch>
            </div>
            
            <Footer />
        </Router>
      </div>
  );
}

export default App;
