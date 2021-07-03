// import * as React from "react";
// import { Button, Icon, Modal } from "semantic-ui-react";
// import axios from "axios";

// const DeleteCustomer = (props) => {
//   //const [open, setOpen] = React.useState(true);
//   const [canDelete, setDelete] = React.useState(false);
//   const { open, customerId, toggleDeleteModal, id, fetchCustomers } = props;

//   React.useEffect(() => {
//     if (canDelete) {
//       axios
//         .delete(
//           `https://localhost:5001/customer/DeleteCustomer?customerID=${id}`
//         )
//         .then(({ data }) => {
//           console.log(data);
//           toggleDeleteModal(false);
//           fetchCustomers();
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   }, [canDelete]);

//   const deleteCustomer = () => {
//     setDelete(true);
//   };
//   return (
//     <>
//       <Modal size={"tiny"} open={open}>
//         <Modal.Header>Delete Your Account</Modal.Header>
//         <Modal.Content>
//           <p>Are you sure you want to delete your account</p>
//         </Modal.Content>
//         <Modal.Actions>
//           <Button negative onClick={toggleDeleteModal(false)}>
//             No
//           </Button>
//           <Button positive onClick={deleteCustomer(customerId.id)}>
//             Yes
//           </Button>
//         </Modal.Actions>
//       </Modal>
//     </>
//   );
// };

// export default DeleteCustomer;
