import React from 'react';
import Navi from './Navi'
import CategoryList from './CategoryList';
import ProductList from './ProductList';


function App() {
  return (
    <div>
      <h2>Hello from Ayşe Nur </h2>
      <h1>
        Hello from Mehmet Kaan
        </h1>  
        <Navi/>
        <CategoryList/>
        <ProductList/>
      </div>
    //  Parsing error: Adjacent JSX elements must be 
    // wrapped in an enclosing tag. Did you want a JSX fragment <>
    // <h3></h3>
  );
}

export default App;
