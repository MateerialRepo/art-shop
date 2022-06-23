import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row m-3'>
            <div className="col-12" >
                <h1>ArtShop Products</h1>
            </div>
        </div>
        
        <ProductList />
      </div>
    </div>
  );
}

export default App;
