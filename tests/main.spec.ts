import { assertEquals, it } from "./external.ts";
import { returnLalala } from "../src/main.ts";

it("returns lalala", () => {
  assertEquals(returnLalala(), "lalala");
});
