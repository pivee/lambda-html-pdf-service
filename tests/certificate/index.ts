import * as fs from "fs";
import { join } from "path";
import { handler } from "../../src/handler";

class CertificateBuilder {
  template = "certificate";
  payload = {
    name: "",
    teacher: "Albus Dumbledore",
    date: "March 03, 2023",
  };

  constructor(name: string) {
    this.payload.name = name;
  }
}

const names = [
  "Harry Potter",
  "Ron Weasley",
  "Hermione Granger",
  "Neville Longbottom",
  "Draco Malfoy",
];

const certificates: any[] = [];

names.forEach((name) => {
  certificates.push(new CertificateBuilder(name));
});

(async () => {
  let result;
  try {
    const promises: any[] = [];

    certificates.forEach((certificate) => {
      const promise = handler(certificate, {} as any);

      promises.push(promise);
    });

    const result = await Promise.all(promises);

    fs.writeFileSync(
      join(__dirname, "../../.temp/last_file_base64"),
      result[result.length - 1].data
    );
  } catch (error) {
    console.error(error);
  }
})();
