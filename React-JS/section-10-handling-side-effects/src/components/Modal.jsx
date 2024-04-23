// import { forwardRef, useImperativeHandle, useRef } from 'react';
// import { createPortal } from 'react-dom';

// const Modal = forwardRef(function Modal({ children }, ref) {
//   const dialog = useRef();

//   useImperativeHandle(ref, () => {
//     return {
//       open: () => {
//         dialog.current.showModal();
//       },
//       close: () => {
//         dialog.current.close();
//       },
//     };
//   });

//   return createPortal(
//     <dialog className="modal" ref={dialog}>
//       {children}
//     </dialog>,
//     document.getElementById('modal')
//   );
// });

// export default Modal;

import {  useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({open, children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
      if(open){
        dialog.current.showModal()
      }else{
        dialog.current.close()
      }
  }, [open])

  //effect dependencies are simply prop or state values that are used inside of this effect function
  // Any values that causes the component function to execute again
  // In addition, other effect dependencies would be functions or context values that depend on oruse state or props

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      { open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
