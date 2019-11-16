import { CannotDefineOddErrorFactory } from "./CannotDefineOddErrorFactory";
import { CannotDefineOddError } from "../../Errors/CannotDefineOddError";

test("CannotDefineOddErrorFactory builds CannotDefineOddError", async () => {
  const Factory = new CannotDefineOddErrorFactory();
  const ResolvedError = await Factory.BuildObject();
  expect(ResolvedError).toBeInstanceOf(CannotDefineOddError);
});

test(
  "CannotDefineOddErrorFactory builds CannotDefineOddError " +
    "with specific error message when asked",
  async () => {
    const SpecificErrorMessageForVerification = "Specific error message";
    const Factory = new CannotDefineOddErrorFactory();
    const ResolvedError = await Factory.BuildObjectWithSpecificErrorMessage(
      SpecificErrorMessageForVerification
    );
    expect(ResolvedError).toBeInstanceOf(CannotDefineOddError);
    expect(ResolvedError.message).toBe(SpecificErrorMessageForVerification);
  }
);
