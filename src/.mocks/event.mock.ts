import { PDFServiceRequest } from "../types";

export const event: PDFServiceRequest.IEvent = {
  template: "HOBBIT_INVENTORY",
  payload: {
    name: "Frodo Baggins",
    address: "Bag's end, Hobbiton, The Shire",
    options: {
      ring: true,
      sting: true,
      shirt: true,
      bread: false,
    },
  },
};
