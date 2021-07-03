import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import axios from "axios";

const EditCustomer = (props) => {
  const [name, setName] = useState("");
  const [id, setID] = useState("");
  const [address, setAddress] = useState("");
  const [canSave, setSave] = useState(false);
  const {
    open,
    toggleEditModal,
    customerName,
    customerAddress,
    fetchCustomers,
  } = props;

  useEffect(() => {
    if (canSave) {
      axios
        .post("/customer/AddOrUpdateCustomer", {
          id: id,
          name: name,
          address: address,
        })
        .then(({ data }) => {
          console.log(data);
          toggleEditModal(false);
          fetchCustomers();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [canSave]);

  const updateCustomer = () => {
    console.log("hgvsdvcsh");
    setSave(true);
  };

  return (
    <Modal open={open}>
      <Modal.Header>Edit Customer</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Customer Name</label>
            <input
              value={name !== "" ? name : customerName}
              placeholder="Customer Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Customer Address</label>
            <input
              value={address !== "" ? address : customerAddress}
              placeholder="Customer Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => toggleEditModal(false)}>
          Cancel
        </Button>
        <Button
          disabled={name.length < 1 || address.length < 1}
          color="green"
          onClick={updateCustomer}
        >
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default EditCustomer;
