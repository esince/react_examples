import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {
  //no need to constructor with new versions. ıt wont give any error.

  render() {
    return (
      <div>
        <h3>
          {this.props.info.title} - {this.props.currentCategory}
        </h3>
        {/* <h3>{this.props.info.another}</h3> */}
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td><Button color="info">Add</Button></td>

              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
