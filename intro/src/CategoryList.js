import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props); //component that is extended.
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "Beverages" },
        { categoryId: 2, categoryName: "Condiments" },
      ],
    //   counter: 1
    currentCategory:"ggg"
    };
  }
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        {/* <h3>{this.state.counter}</h3> */}
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem onClick ={()=>this.setState({currentCategory:category.categoryName})}key ={category.categoryId}>{category.categoryName}</ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.state.currentCategory}</h4>
      </div>
    );
  }
}
