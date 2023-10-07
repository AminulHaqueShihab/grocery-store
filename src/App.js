
import './App.css';
import Carousel from './components/Carousel';
import Details from './components/Details';
import { Heading } from './components/Heading';
import Navbar from './components/Navbar';
import Path from './components/Path';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Heading />
      <Navbar />
      <Path />
      <ProductDetails />
      <Details />
      {/* <Carousel /> */}
      <Footer />
    </>
    
  );
}

export default App;
