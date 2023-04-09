import logo from './logo.svg';
import './App.css';
import { Login } from './component/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './component/Footer'
import { NavBar } from './component/NavBar'
import { Home } from './component/Home'


function App( ) {
  return (
    <><div className="App">
      <NavBar />
       <Home />
    <Footer />
    </div></>
  );
}

export default App;
