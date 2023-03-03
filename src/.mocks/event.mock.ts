import { PDFServiceRequest } from "../types";

export const event: PDFServiceRequest.IEvent = {
  template: "hobbit_inventory",
  payload: {
    name: "Frodo Baggins",
    address: "Bag End, Hobbiton, The Shire",
    options: {
      ring: true,
      sting: true,
      shirt: true,
      bread: false,
    },
  },
};
