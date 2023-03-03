import { PDFServiceRequest } from "../../src/types";

export const event: PDFServiceRequest.IEvent = {
  template: "certificate" as any,
  payload: {
    name: "Frodo Baggins",
    teacher: "Gandalf the Gray",
    date: "March 3, 2023",
  },
};
