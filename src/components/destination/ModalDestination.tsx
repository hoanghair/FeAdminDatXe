
import React, { useState } from "react";
import { TDestination } from "components/type";
import TextField from "@mui/material/TextField";
import Modal from "components/modal";

interface Iprops {
  open: boolean;
  destination: TDestination;
  onCloseModal: () => void;
}
const ModalDestination = ({ open, onCloseModal, destination }: Iprops) => {
  const [values, setValues] = useState<TDestination>({
    pickup_Locations: "",
    destination: "",
  });
  const handleSubmid = () => {
    console.log(values);
    setValues({
      pickup_Locations: "",
      destination: "",
    });
  };

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      onSubmid={handleSubmid}
      title="Thêm địa chỉ đón"
    >
      <>
        <TextField
          id="outlined-multiline-flexible"
          label="Điểm đón"
          className="input"
          value={values.pickup_Locations}
          onChange={(e) => {
            setValues({ ...values, pickup_Locations: e.target.value });
          }}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Điểm đến"
          className="input"
          value={values.destination}
          onChange={(e) => {
            setValues({ ...values, destination: e.target.value });
          }}
        />
      </>
    </Modal>
  );
};

export default ModalDestination;
