import React, { Component } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import axios from "axios";

export default class GetSales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sales: [],
    };
  }

  componentDidMount() {
    this.fetchSales();
  }

  fetchSales = () => {
    axios
      .get("/sales/GetSalesList")
      .then(({ data }) => {
        console.log(data);
        this.setState({
          sales: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { sales } = this.state;

    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Customer name</Table.HeaderCell>
            <Table.HeaderCell>Product Name</Table.HeaderCell>
            <Table.HeaderCell>Store Name</Table.HeaderCell>
            <Table.HeaderCell>Product Date Sold</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {sales.map((sale) => (
            <Table.Row>
              <Table.Cell>{sale.customerNavigation.name}</Table.Cell>
              <Table.Cell>{sale.productNavigation.name}</Table.Cell>
              <Table.Cell>{sale.storeNavigation.name}</Table.Cell>
              <Table.Cell>{sale.dateSold}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}
