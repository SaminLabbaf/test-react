import logo from './logo.svg';
import Footer from './components/Footer'
import Main from './components/Main'
import Header from './components/Header'
import './App.css';
import {useState} from 'react'

function App() {

  const [products] = useState([
    {
      id: 1, 
      name: 'Laptop',
      price: 120,
      image: 'https://via.placeholder.com/150'
    }
  ])
  return (
    <div className="App">
      <Header />
      <Main products={products}/>
      <Footer />
    </div>
  );
}

export default App;
