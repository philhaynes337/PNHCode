import Menu from '../menu/menu';
import Header from '../header/Header';
import Home from '../home/Home';
import Footer from '../footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <header className='header'>
        <Header />
      </header>

      <div className='row'>
        <div className='menu col'>
          <Menu />
        </div>
      
      
        <div className='content col'>
          <Home />
        </div>
      </div>
      
      
        <Footer />
      
      
    </>
  );
}

export default App;
