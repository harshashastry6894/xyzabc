import React, { useState } from "react";
import { Button, Form, Modal } from "semantic-ui-react";

const CreateEditCustomer = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const { open, toggleModal, header, customerName, customerAddress, updateCustomer } = props;
  const addCustomer = () => {
    updateCustomer(name !== '' ? name : customerName, address !== '' ? address : customerAddress);
    setName('');
    setAddress('');
  };

  return (
    <Modal open={open}>
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Customer Name</label>
            <input
              value={name !== '' ? name : customerName}
              placeholder="Customer Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Customer Address</label>
            <input
              value={address !== '' ? address : customerAddress}
              placeholder="Customer Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={toggleModal}>
          Cancel
        </Button>
        <Button
          disabled={name.length < 1 && address.length < 1}
          color="green"
          onClick={addCustomer}
        >
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

<<<<<<< HEAD:src/components/Customers/CreateEditCustomers.jsx
export default CreateEditCustomer;
=======
export default CreateEditCustomer;
>>>>>>> 222da64a36591c8150b9a7f996e154a195d94caa:src/components/Customers/CreateEditCustomer.jsx
