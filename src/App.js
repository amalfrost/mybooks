import { Route, Routes } from 'react-router';
import './App.css';
import Booklist from './Components/Booklist';
import BookDetails from './Components/BookDetails';
import Favourites from './Components/Favourites';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes >
      <Route path='/' element = {<Booklist/>}/>
      <Route path='/books/:id' element = {<BookDetails/>}  />
      <Route path='favourites'  element ={<Favourites/>} />
    </Routes>
    <Footer/>
     
    </div>
  );
}

export default App;
