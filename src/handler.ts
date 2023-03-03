import { Context } from "aws-lambda";
import ejs from "ejs";
import { join } from "path";
import puppeteer from "puppeteer";
import { PDFServiceRequest } from "./types";
import crypto from "crypto";

export async function handler(
  event: PDFServiceRequest.IEvent,
  context: Context
): Promise<PDFServiceRequest.ISuccessResponse> {
  const { template, payload } = event;

  // Create a browser instance
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  //Get HTML content from EJS file
  const html = await ejs.renderFile(
    join(__dirname, `../templates/${template}.html`),
    payload
  );

  await page.setContent(html as string, { waitUntil: "domcontentloaded" });

  //To reflect CSS used for screens instead of print
  await page.emulateMediaType("screen");

  // Download the PDF
  const pdf = await page.pdf({
    /**
     * NOTE: Remove `path` to prevent creating a file in storage.
     */
    path: join(
      __dirname,
      `../.temp/${Math.round(new Date().getTime() / 1000)}-${template}_${
        crypto.randomUUID().split("-")[0]
      }.pdf`
    ),
    margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
    printBackground: true,
    format: "A4",
  });

  // Close the browser instance
  await browser.close();

  return {
    data: pdf.toString("base64"),
    mimeType: "application/pdf",
    extension: ".pdf",
  };
}
