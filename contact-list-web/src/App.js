import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListContactComponent from './components/ListContactComponent';

function App() {
  return (
      <div>
        <Header />
        <div className="container">
            <ListContactComponent />
        </div>
        <Footer />
      </div>
  );
}

export default App;
