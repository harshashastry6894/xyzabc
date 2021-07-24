import * as React from "react";
<<<<<<< HEAD
import { Table, Menu, Icon } from "semantic-ui-react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import CreateEditCustomers from "./CreateEditCustomers";
import DeleteCustomer from "./DeleteCustomer";
import { green, white } from "@material-ui/core/colors";
=======
import { Button, Table } from "semantic-ui-react";
import axios from "axios";
import CreateEditCustomers from "./CreateEditCustomer";
import DeleteCustomer from "./DeleteCustomer";
>>>>>>> 222da64a36591c8150b9a7f996e154a195d94caa

const GetCustomers = () => {
  const [customers, setCustomers] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
<<<<<<< HEAD
  const [customerName, setCustomerName] = React.useState("");
  const [customerAddress, setCustomerAddress] = React.useState("");
  const [header, setHeader] = React.useState("");
=======
  const [customerName, setCustomerName] = React.useState('');
  const [customerAddress, setCustomerAddress] = React.useState('');
  const [header, setHeader] = React.useState('');
>>>>>>> 222da64a36591c8150b9a7f996e154a195d94caa
  const [customerId, setCustomerId] = React.useState();

  const fetchData = React.useCallback(() => {
    axios
<<<<<<< HEAD
      .get("https://localhost:5001/customer/GetCustomers")
=======
      .get("https://60e013606b689e001788c8a1.mockapi.io/api/v1/customers")
>>>>>>> 222da64a36591c8150b9a7f996e154a195d94caa
      .then(({ data }) => {
        setCustomers(data);
      })
      .catch((err) => {
        console.log(err);
      });
<<<<<<< HEAD
  }, []);
=======
  }, [])
>>>>>>> 222da64a36591c8150b9a7f996e154a195d94caa

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const createCustomer = () => {
<<<<<<< HEAD
    setOpen((open) => !open);
    setCustomerName("");
    setCustomerId();
    setCustomerAddress("");
    setHeader("Create Customer");
  };

  const editCustomer = (id, name, address) => {
    setOpen((open) => !open);
    setCustomerName(name);
    setCustomerAddress(address);
    setHeader("Edit Customer");
=======
    setOpen(open => !open);
    setCustomerName('');
    setCustomerId();
    setCustomerAddress('');
    setHeader('Create Customer');
  };

  const editCustomer = (id, name, address) => {
    setOpen(open => !open);
    setCustomerName(name);
    setCustomerAddress(address);
    setHeader('Edit Customer');
>>>>>>> 222da64a36591c8150b9a7f996e154a195d94caa
    setCustomerId(id);
  };

  const deleteCustomer = (id, name) => {
<<<<<<< HEAD
    setDeleteOpen((open) => !open);
=======
    setDeleteOpen(open => !open);
>>>>>>> 222da64a36591c8150b9a7f996e154a195d94caa
    setCustomerName(name);
    setCustomerId(id);
  };

  const toggleModal = React.useCallback(() => {
<<<<<<< HEAD
    setOpen((open) => !open);
  }, []);

  const updateData = React.useCallback(
    (name, address) => {
      setOpen((open) => !open);
      if (!customerId) {
        debugger;
        axios
          .post("https://localhost:5001/customer/AddCustomer", {
            id: customerId,
            name: name,
            address: address,
          })
          .then(() => {
            console.log();
            fetchData();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        debugger;
        axios
          .put(
            `https://localhost:5001/customer/UpdateCustomer?Id=${customerId}`,
            {
              name: name,
              address: address,
            }
          )
          .then(() => {
            fetchData();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    [customerId, fetchData]
  );

  const deleteData = React.useCallback(() => {
    setDeleteOpen((open) => !open);
    axios
      .delete(
        `https://localhost:5001/customer/DeleteCustomer?customerID=${customerId}`
      )
=======
    setOpen(open => !open);
  }, []);

  const updateData = React.useCallback((name, address) => {
    setOpen(open => !open);
    if (!customerId) {
      axios
        .post("https://60e013606b689e001788c8a1.mockapi.io/api/v1/customers", {
          id: customerId,
          name: name,
          address: address,
        })
        .then(() => {
          fetchData();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .put(`https://60e013606b689e001788c8a1.mockapi.io/api/v1/customers/${customerId}`, {
          name: name,
          address: address,
        })
        .then(() => {
          fetchData();
        })
        .catch((err) => {
          console.log(err);
        });
    }

  }, [customerId, fetchData]);

  const deleteData = React.useCallback(() => {
    setDeleteOpen(open => !open);
    axios
      .delete(`https://60e013606b689e001788c8a1.mockapi.io/api/v1/customers/${customerId}`)
>>>>>>> 222da64a36591c8150b9a7f996e154a195d94caa
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [customerId, fetchData]);
<<<<<<< HEAD

  return (
    <>
      <CreateEditCustomers
        toggleModal={toggleModal}
        open={open}
        header={header}
        updateCustomer={updateData}
        customerName={customerName}
        customerAddress={customerAddress}
      />
      <DeleteCustomer
        toggleModal={() => setDeleteOpen((open) => !open)}
        open={deleteOpen}
        deleteCustomer={deleteData}
        customerName={customerName}
      />

      <Button
        onClick={createCustomer}
        variant="outlined"
        color="primary"
        endIcon={<AddIcon />}
      >
        Create
=======

  return (
    <>
      <CreateEditCustomers
        toggleModal={toggleModal}
        open={open}
        header={header}
        updateCustomer={updateData}
        customerName={customerName}
        customerAddress={customerAddress}
      />

      <DeleteCustomer
        toggleModal={() => setDeleteOpen(open => !open)}
        open={deleteOpen}
        deleteCustomer={deleteData}
        customerName={customerName}
      />

      <Button color="blue" onClick={createCustomer}>
        Create Customer
>>>>>>> 222da64a36591c8150b9a7f996e154a195d94caa
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
                <Button
<<<<<<< HEAD
                  onClick={() =>
                    editCustomer(customer.id, customer.name, customer.address)
                  }
                  variant="outlined"
                  style={{ color: green[500] }}
                  endIcon={<EditIcon />}
                >
                  Edit
=======
                  color="blue"
                  onClick={() => editCustomer(customer.id, customer.name, customer.address)}
                >
                  Edit Customer
>>>>>>> 222da64a36591c8150b9a7f996e154a195d94caa
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
<<<<<<< HEAD
                  onClick={() => deleteCustomer(customer.id, customer.name)}
                  variant="outlined"
                  color="secondary"
                  endIcon={<DeleteIcon />}
=======
                  color="yellow"
                  onClick={() => deleteCustomer(customer.id, customer.name)}
>>>>>>> 222da64a36591c8150b9a7f996e154a195d94caa
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
<<<<<<< HEAD
};

export default GetCustomers;
=======
}

export default GetCustomers;
>>>>>>> 222da64a36591c8150b9a7f996e154a195d94caa
