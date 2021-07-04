import * as React from "react";
import { Button, Table } from "semantic-ui-react";
import axios from "axios";
import CreateEditCustomers from "./CreateEditCustomer";
import DeleteCustomer from "./DeleteCustomer";

const GetCustomers = () => {
  const [customers, setCustomers] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [customerName, setCustomerName] = React.useState('');
  const [customerAddress, setCustomerAddress] = React.useState('');
  const [header, setHeader] = React.useState('');
  const [customerId, setCustomerId] = React.useState();

  const fetchData = React.useCallback(() => {
    axios
      .get("https://60e013606b689e001788c8a1.mockapi.io/api/v1/customers")
      .then(({ data }) => {
        setCustomers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const createCustomer = () => {
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
    setCustomerId(id);
  };

  const deleteCustomer = (id, name) => {
    setDeleteOpen(open => !open);
    setCustomerName(name);
    setCustomerId(id);
  };

  const toggleModal = React.useCallback(() => {
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
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [customerId, fetchData]);

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
                  color="blue"
                  onClick={() => editCustomer(customer.id, customer.name, customer.address)}
                >
                  Edit Customer
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  color="yellow"
                  onClick={() => deleteCustomer(customer.id, customer.name)}
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
}

export default GetCustomers;