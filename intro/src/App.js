import React, { Component } from "react"; //component must be imported
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "", products: [] };
  
  componentDidMount() {
    this.getProducts();
  }
  //arrow function declaration
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.seoUrl) 
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products"
    if(categoryId){
      url+="?categoryId="+categoryId
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  render() {
    let productInfo = { title: "Product List", another: "other" };
    let categoryInfo = { title: "Category List" };

    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
      //  Parsing error: Adjacent JSX elements must be
      // wrapped in an enclosing tag. Did you want a JSX fragment <>
      // <h3></h3>
    );
  }
}
