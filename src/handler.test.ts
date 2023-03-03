import { handler } from "./handler";
import { event } from "./.mocks/event.mock";
import * as fs from "fs";
import { join } from "path";

(async () => {
  let result;
  try {
    result = await handler(event, {} as any);

    fs.writeFileSync(join(__dirname, "../.temp/result"), result.data);

    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();
