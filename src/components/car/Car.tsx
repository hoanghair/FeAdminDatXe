import React from "react";
import { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import HandymanIcon from "@mui/icons-material/Handyman";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import Heading from "components/heading";

import { TCar } from "components/type";
import ModalCar from "./ModalCar";

export const initCar = {
  id: 1,
  name: "Honda",
  type: "7 Chỗ",
  carNumber: "88H1-10615",
};
const Car = () => {
  const [cars, setCars] = useState<TCar[]>([initCar]);
  const [openModal, setOpenModal] = useState<boolean>(true);
  const [carSelected, setCarSelected] = useState<TCar | undefined>();

  return (
    <>
      <Heading text="Quản lý xe" />
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" stickyHeader={true}>
          <TableHead>
            {cars.map((car: TCar) => (
              <TableRow>
                <TableCell align="center">Số thứ tự</TableCell>
                <TableCell align="center">Tên Xe</TableCell>
                <TableCell align="center">Số Chỗ Ngồi</TableCell>
                <TableCell align="center">Biển Số Xe</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    className="btn"
                    endIcon={<HandymanIcon />}
                    size="medium"
                    onClick={() => {
                      setCarSelected(car);
                      setOpenModal(true);
                    }}
                  >
                    New
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {cars.map((car: TCar) => (
              <TableRow key={car.id}>
                <TableCell align="center">{car.id}</TableCell>
                <TableCell align="center">{car.name}</TableCell>
                <TableCell align="center">{car.type}</TableCell>
                <TableCell align="center">{car.carNumber}</TableCell>
                <TableCell align="center">
                  <Button aria-label="delete" color="error" size="small">
                    <DeleteIcon fontSize="small" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {carSelected && (
        <ModalCar
          open={openModal}
          onCloseModal={() => {
            setOpenModal(false);
            setCarSelected(undefined);
          }}
          car={carSelected}
        />
      )}
    </>
  );
};

export default Car;
