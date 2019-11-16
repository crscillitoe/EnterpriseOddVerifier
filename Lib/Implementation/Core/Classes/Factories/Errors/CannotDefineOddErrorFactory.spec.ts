import { CannotDefineOddErrorFactory } from "./CannotDefineOddErrorFactory";
import { CannotDefineOddError } from "../../Errors/CannotDefineOddError";
import {
  EnterpriseOddVerifierGarbageCollectorSingleton,
  EnterpriseOddVerifierGarbageCollectorSingletonQueueObject
} from "../../Handlers/EnterpriseOddVerifierGarbageCollectorSingleton";

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

test(
  "CannotDefineOddErrorFactory properly destroys CannotDefineOddError " +
    "when asked to do so.",
  async () => {
    const Factory = new CannotDefineOddErrorFactory();
    const ResolvedError = await Factory.BuildObject();
    expect(ResolvedError).toBeInstanceOf(CannotDefineOddError);

    const Deleted = await Factory.DestroyObject(ResolvedError);
    expect(Deleted).toBeTruthy();
    expect(ResolvedError).toMatchObject({});
  }
);
