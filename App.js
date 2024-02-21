
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbare } from './components/Navbare';
import ProductList from './components/ProductList';
function App() {
  return (
    <div className="App">
      <Navbare/>
      <ProductList/> 

    </div>
  );
}

export default App;
