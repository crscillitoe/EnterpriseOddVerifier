import { CannotDefineOddErrorFactory } from "./CannotDefineOddErrorFactory";
import { CannotDefineOddError } from "../../Errors/CannotDefineOddError";

test("CannotDefineOddErrorFactory builds CannotDefineOddError", () => {
  const Factory = new CannotDefineOddErrorFactory();
  expect(Factory.BuildObject()).toBeInstanceOf(CannotDefineOddError);
});
