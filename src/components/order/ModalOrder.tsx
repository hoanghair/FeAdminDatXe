import Modal from "components/modal";
import { TOrder } from "components/type";

interface IProps {
  order?: TOrder;
  open: boolean;
  onCloseModal: () => void;
  onSubmit?: () => void;
}

const ModalOrder = ({ order, open, onCloseModal, onSubmit }: IProps) => {
  const handleSubmid = () => {
    console.log("adad");
  };
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      onSubmid={handleSubmid}
      title="Chi tiết đơn"
    >
      <div className="ModalOrder">
        <p>
          <span>Mã Hóa Đơn:</span> {order?._id}
        </p>
        <p>
          <span>Tên Khách Hàng:</span> {order?.name}
        </p>
        <p>
          <span>Điểm Đón:</span>{" "}
          {`${order?.pickUpLocation.name}, ${order?.pickUpLocation_detail}`}
        </p>
        <p>
          <span>Điểm Đến:</span>{" "}
          {`${order?.destination.name}, ${order?.destination_detail}`}
        </p>
        <p>
          <span>Loại Xe:</span> {order?.type_car.name}
        </p>
        <p>
          <span>Số Điện Thoại:</span> {order?.phoneNumber}
        </p>
        <p>
          <span>Ngày Đón:</span> {order?.date}
        </p>
        <p>
          <span> Type:</span> {order?.type}
        </p>
      </div>
    </Modal>
  );
};

export default ModalOrder;
