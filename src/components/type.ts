export type TOrder = {
  _id: string;
  pickUpLocation: {
    _id: string;
    name: string;
  };
  pickUpLocation_detail: string;
  destination: {
    _id: string;
    name: string;
  };
  destination_detail: string;
  type_car: {
    _id: string;
    name: string;
  };
  name: string;
  phoneNumber: string;
  date: string;
  type: number;
};

export type TCar = {
  id?: number;
  name: string;
  type: string;
  carNumber: string;
};

export type TDestination = {
  id?: number;
  pickup_Locations: string;
  destination: string;
};
