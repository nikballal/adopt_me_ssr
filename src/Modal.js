import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div"); //elRef can onyl modify current, can only in the context of elRef.current
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal"); //creating a place for the modal to render, which is later destroyed (created in index.html)
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current); //have to remove the DOM element, otherwise it'll keep re-rendering
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
