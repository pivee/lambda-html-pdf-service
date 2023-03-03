import { Context } from "aws-lambda";
import { PDFServiceRequest } from "./types";
import { event } from "./.mocks/event.mock";

export function handler(event: PDFServiceRequest.IEvent, context: Context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "hello world",
    }),
  };
}

console.log(handler(event, {} as any));
