import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products --> you can't go back
    this.props.history.replace("/products");
  };

  handleNext = () => {
    // Navigate to /products --> you can go back
    this.props.history.push("/products");
  };

  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id} </h1>
        <button onClick={this.handleSave}>Save</button>
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}

export default ProductDetails;
