export namespace PDFServiceRequest {
  interface IEvent {
    template: Template;
    payload: any;
  }

  type Template = "HOBBIT_INVENTORY";
}
