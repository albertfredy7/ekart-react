
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import WishList from './Pages/WishList';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App d-flex flex-column gap-5">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
