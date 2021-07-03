import React, { Component } from "react";
import { Button, Table, StatisticValue } from "semantic-ui-react";
import axios from "axios";
// import CustomerTable from "./CustomerTable";
import CreateCustomers from "./CreateCustomers";
import EditCustomer from "./EditCustomer";
// import DeleteCustomer from "./DeleteCustomer";
// import GenCustTable from "./GenCustTable";
// import GetCustTable from "./GenCustTable";

export default class GetCustomers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      createOpen: false,
      editOpen: false,
      deleteOpen: false,
    };
  }
  componentDidMount() {
    this.fetchCustomers();
  }

  toggleCreateModal = (value) => {
    this.setState({
      createOpen: value,
    });
  };

  toggleEditModal = (value) => {
    this.setState({
      editOpen: value,
    });
  };

  toggleDeleteModal = (event) => {
    this.setState({
      deleteOpen: true,
    });
  };

  fetchCustomers = () => {
    axios
      .get("/customer/GetCustomers")
      .then(({ data }) => {
        console.log(data);
        this.setState({
          customers: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  editCustomer = (id, name, address) => {
    axios
      .post(`https://localhost:5001/customer/AddotrUpdatestudent/`, {
        id: id,
        name: name,
        address: address,
      })
      .then(({ data }) => {
        console.log(data);
        this.toggleEditModal(false);
        this.fetchCustomers();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { customers } = this.state;

    return (
      <div>
        <CreateCustomers
          toggleCreateModal={this.toggleCreateModal}
          fetchCustomers={this.fetchCustomers}
          open={this.state.createOpen}
        />

        <Button color="blue" onClick={() => this.toggleCreateModal(true)}>
          Create Customer
        </Button>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Customer Name</Table.HeaderCell>
              <Table.HeaderCell>Customer Address</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {customers.map((customer) => (
              <Table.Row key={customer.id}>
                <Table.Cell>{customer.name}</Table.Cell>
                <Table.Cell>{customer.address}</Table.Cell>

                <Table.Cell>
                  <EditCustomer
                    toggleEditModal={this.toggleEditModal}
                    fetchCustomers={this.fetchCustomers}
                    open={this.state.editOpen}
                    customerID={customer.id}
                    customerName={customer.name}
                    customerAddress={customer.address}
                  />
                  <Button
                    color="blue"
                    onClick={() => this.toggleEditModal(true)}
                  >
                    Edit Customer
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    color="yellow"
                    onClick={(e) => this.toggleDeleteModal(e)}
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}
