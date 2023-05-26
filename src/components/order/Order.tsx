import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";

import Heading from "components/heading";
import { TOrder } from "components/type";
import ModalOrder from "./ModalOrder";
import "./../modal/modal.scss";

export default function Order() {
  const initOder = {
    _id: "64698bd90a51ba37fdedffc0",
    pickUpLocation: {
      _id: "6468e5b5ad141309e6447a29",
      name: "16 Tân Triều",
    },
    pickUpLocation_detail: "Thanh Trì, Hà Nội",
    destination: {
      _id: "6468c607fbc0bdeb47b44feb",
      name: "17 Thái Hà",
    },
    destination_detail: "Trung Liệt, Đống Đa, Hà Nội",
    type_car: {
      _id: "6468d4bbef1b705447e41e36",
      name: "Xe 7 chỗ",
    },
    name: "Hòa moi",
    phoneNumber: "0345333xxx",
    date: "2023-05-17",
    type: 1,
  };
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [orders, setOrders] = useState<TOrder[]>([initOder]);
  const [orderSelected, setOrderSelected] = useState<TOrder | undefined>();
  console.log(orderSelected);
  return (
    <>
      <Heading text="Quản lý đơn hàng" />
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" stickyHeader={true}>
          <TableHead>
            <TableRow>
              <TableCell align="center" width={150}>
                Tên Khách Hàng
              </TableCell>
              <TableCell align="center">Địa Chỉ</TableCell>
              <TableCell align="center">Loại Xe</TableCell>
              <TableCell align="center">Số Điện Thoại</TableCell>
              <TableCell align="center">Ngày Đón</TableCell>
              <TableCell align="center">Tình Trạng Đơn</TableCell>
              <TableCell align="center" />
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order: TOrder) => (
              <TableRow key={order._id}>
                <TableCell align="center">{order.name}</TableCell>
                <TableCell align="center">
                  {`${order.pickUpLocation.name}`}
                  {" ---> "} {`${order.destination.name}`}
                </TableCell>
                <TableCell align="center">{order.type_car.name}</TableCell>
                <TableCell align="center">{order.phoneNumber}</TableCell>
                <TableCell align="center">{order.date}</TableCell>
                <TableCell align="center">{order.type}</TableCell>
                <TableCell
                  align="center"
                  className="Order_icon"
                  onClick={() => {
                    setOrderSelected(order);
                    setOpenModal(true);
                  }}
                >
                  {<InfoOutlinedIcon />}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {orderSelected && (
        <ModalOrder
          open={openModal}
          onCloseModal={() => {
            setOpenModal(false);
            setOrderSelected(undefined);
          }}
          order={orderSelected}
        />
      )}
    </>
  );
}
