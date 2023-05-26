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

import { TDestination } from "components/type";
import ModalDestination from "./ModalDestination";

export const initDestination = {
  id: 1,
  pickup_Locations: "Thái Hà",
  destination: "Hà Đông",
};

const Destination = () => {
  const [destinations, setDestinations] = useState<TDestination[]>([
    initDestination,
  ]);
  const [openModal, setOpenModal] = useState<boolean>(true);
  const [orderSelected, setOrderSelected] = useState<
    TDestination | undefined
  >();

  return (
    <>
      <Heading text="Quản lý địa chỉ" />
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" stickyHeader={true}>
          <TableHead>
            {destinations.map((destination: TDestination) => (
              <TableRow>
                <TableCell align="center">Số thứ tự</TableCell>
                <TableCell align="center">Điểm Đón</TableCell>
                <TableCell align="center">Điểm đến</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    className="btn"
                    endIcon={<HandymanIcon />}
                    size="medium"
                    onClick={() => {
                      setOrderSelected(destination);
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
            {destinations.map((destination: TDestination) => (
              <TableRow key={destination.id}>
                <TableCell align="center">{destination.id}</TableCell>
                <TableCell align="center">
                  {destination.pickup_Locations}
                </TableCell>
                <TableCell align="center">{destination.destination}</TableCell>
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

      {orderSelected && (
        <ModalDestination
          open={openModal}
          onCloseModal={() => {
            setOpenModal(false);
            setOrderSelected(undefined);
          }}
          destination={orderSelected}
        />
      )}
    </>
  );
};

export default Destination;
