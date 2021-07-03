import React, { Component } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import axios from "axios";

export default class GetProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    axios
      .get("/product/GetProductList")
      .then(({ data }) => {
        console.log(data);
        this.setState({
          products: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { products } = this.state;

    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product Name</Table.HeaderCell>
            <Table.HeaderCell>Product Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row>
              <Table.Cell>{product.name}</Table.Cell>
              <Table.Cell>{product.price}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}
