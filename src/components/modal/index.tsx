import { Modal as ModalMUI } from "@mui/material";
import Button from "@mui/material/Button";
import "./modal.scss";
import { ReactNode } from "react";

interface IProps {
  open: boolean;
  title: string;
  children: ReactNode;
  textSubmid?: string;
  onSubmid: () => void;
  onClose: () => void;
}

const Modal = ({
  open,
  title,
  children,
  textSubmid,
  onClose,
  onSubmid,
}: IProps) => {
  return (
    <ModalMUI open={open} onClose={onClose} className="Modal">
      <div className="Modal__content">
        <h2 className="Modal__content-title">{title}</h2>
        {children}

        <div className="Modal__content-button">
          <Button variant="outlined" color="error" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={onSubmid}>
            {textSubmid || "Submit"}
          </Button>
        </div>
      </div>
    </ModalMUI>
  );
};

export default Modal;
