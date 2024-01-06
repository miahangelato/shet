
import Footer from './components/Footer';
import Header from './components/Header';
import DetailView from './screens/DetailView';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter ,Routes, Route, } from 'react-router-dom';


function App() {
  //Router > Routes > Route
  return (
      <div>
        <Header />
        <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<DetailView />} />
          </Routes>
        </main>
        </BrowserRouter>
        <Footer/>
      </div>
  );
}

export default App;
