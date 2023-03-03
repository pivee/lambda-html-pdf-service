export namespace PDFServiceRequest {
  interface IEvent {
    template: Template;
    payload: any;
  }

  type Template = "hobbit_inventory";

  interface ISuccessResponse {
    data: string; // File as a Base64 encoded string
    mimeType: "application/pdf";
    extension: ".pdf";
  }
}
