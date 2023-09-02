import logo from './logo.svg';
import {Navbar,Nav,Container} from "react-bootstrap"
import {FaShoppingCart, FaUser} from "react-icons/fa"
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import { Outlet } from 'react-router-dom';


function App() {
  return (
<>
<Header />
<main>
  <Container>
<Outlet />
  </Container>
</main>
<Footer />
</>
  );
}

export default App;
