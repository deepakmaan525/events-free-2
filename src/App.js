import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Choose from './components/Choose';
import Herosec from './components/Herosec';
import Footer from './components/Footer';

function App() {
  return (
   <div>
    <Herosec/>
    <Choose/>
    <Footer/>
   </div>
  );
}

export default App;