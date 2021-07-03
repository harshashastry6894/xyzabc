import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import axios from "axios";

const CreateCustomers = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [canSave, setSave] = useState(false);
  const { open, toggleCreateModal, createCustomer, fetchCustomers } = props;

  useEffect(() => {
    if (canSave) {
      axios
        .post("/customer/AddOrUpdateCustomer", {
          name: name,
          address: address,
        })
        .then(({ data }) => {
          console.log(data);
          toggleCreateModal(false);
          fetchCustomers();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [canSave]);

  const addCustomer = () => {
    console.log("hgvsdvcsh");
    setSave(true);
  };

  return (
    <Modal open={open}>
      <Modal.Header>Create Customer</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Customer Name</label>
            <input
              placeholder="Customer Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Customer Address</label>
            <input
              placeholder="Customer Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => toggleCreateModal(false)}>
          Cancel
        </Button>
        <Button
          disabled={name.length < 1 || address.length < 1}
          color="green"
          onClick={addCustomer}
        >
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default CreateCustomers;
