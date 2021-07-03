import React, { Component } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import axios from "axios";

export default class GetStores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
    };
  }
  componentDidMount() {
    this.fetchStores();
  }

  fetchStores = () => {
    axios
      .get("/store/GetStoreList")
      .then(({ data }) => {
        console.log(data);
        this.setState({
          stores: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { stores } = this.state;

    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Store Name</Table.HeaderCell>
            <Table.HeaderCell>Store Address</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {stores.map((store) => (
            <Table.Row>
              <Table.Cell>{store.name}</Table.Cell>
              <Table.Cell>{store.address}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}
