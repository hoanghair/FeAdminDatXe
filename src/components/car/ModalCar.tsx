import { useState } from "react";
import TextField from "@mui/material/TextField";
import Modal from "components/modal";
import { TCar } from "components/type";


interface Iprops {
  open: boolean;
  car: TCar;
  onCloseModal: () => void;
}

const ModalCar = ({ open, onCloseModal, car }: Iprops) => {
  const [values, setValues] = useState<TCar>({
    name: "",
    type: "",
    carNumber: "",
  });
  const handleSubmid = () => {
    console.log(values);
    setValues({
      name: "",
      type: "",
      carNumber: "",
    });
  };
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      onSubmid={handleSubmid}
      title="Thêm mới xe"
    >
      <>
        <TextField
          id="outlined-multiline-flexible"
          label="Tên xe"
          className="input"
          value={values.name}
          onChange={(e) => {
            setValues({ ...values, name: e.target.value });
          }}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Loại xe"
          className="input"
          value={values.type}
          onChange={(e) => {
            setValues({ ...values, type: e.target.value });
          }}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Biển số"
          className="input"
          value={values.carNumber}
          onChange={(e) => {
            setValues({ ...values, carNumber: e.target.value });
          }}
        />
      </>
    </Modal>
  );
};

export default ModalCar;
