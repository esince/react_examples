import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row , Col} from "reactstrap";

function App() {
  let productInfo = {title:"Product List", another:"other"}
  let categoryInfo = {title:"Category List"}
  
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row> 
        <Row>
          <Col xs = "3" > <CategoryList info = {categoryInfo}/> </Col> 
          <Col xs = "9" > <ProductList info = {productInfo} /> </Col> 
        </Row>
      </Container>

      
    </div>
    //  Parsing error: Adjacent JSX elements must be
    // wrapped in an enclosing tag. Did you want a JSX fragment <>
    // <h3></h3>
  );
}

export default App;
