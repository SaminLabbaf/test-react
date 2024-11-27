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
    },
    {
      id: 2, 
      name: 'Headphones',
      price: 150,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3, 
      name: 'Tablet',
      price: 200,
      image: 'https://via.placeholder.com/200'
    },
    {
      id: 4, 
      name: 'SmartWacth',
      price: 200,
      image: 'https://via.placeholder.com/200'
    },
    {
      id: 5, 
      name: 'Car',
      price: 2000,
      image: 'https://via.placeholder.com/200'
    },
    {
      id: 6, 
      name: 'TShirt',
      price: 20,
      image: 'https://via.placeholder.com/200'
    }
  ])
  return (
    <div className="flex min-h-screen">
      <Header />
      <div className="flex-1 flex flex-col">
        <Main products={products}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
