import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const Modal = () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" src="/images/avatar/large/rachel.png" />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default Modal;

// import React from "react";
// import { Button, Header, Image, Modal } from "semantic-ui-react";

// class Modal extends React.Component {
//   state = {
//     open: props.click
//   };

//   render() {
//     return (
//       <div>
//         <Modal
//           trigger={
//             <Button onClick={this.props.changeModalState}>Show Modal</Button>
//           }
//         >
//           <Modal.Header>Select a Photo</Modal.Header>
//           <Modal.Content image>
//             <Image
//               wrapped
//               size="medium"
//               src="/images/avatar/large/rachel.png"
//             />
//             <Modal.Description>
//               <Header>Default Profile Image</Header>
//               <p>
//                 We've found the following gravatar image associated with your
//                 e-mail address.
//               </p>
//               <p>Is it okay to use this photo?</p>
//             </Modal.Description>
//           </Modal.Content>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default Modal;
