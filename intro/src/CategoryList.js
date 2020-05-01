import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props); //component that is extended.
    this.state = {
      categories: [],
      //   counter: 1
    };
  }

  componentDidMount(){
    this.getCategories()
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories ")
      .then((response) => response.json())
      .then((data) => this.setState({categories: data}));
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        {/* <h3>{this.state.counter}</h3> */}
        {/* arrow function is needed */}
        <ListGroup >
          {this.state.categories.map((category) => (
            <ListGroupItem active = {category.categoryName === this.props.currentCategory ? true: false}
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      
      </div>
    );
  }
}
