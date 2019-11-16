import { EnterpriseOddVerifierPrototypeInserterFactory } from "../Factories/Handlers/EnterpriseOddVerifierPrototypeInserterFactory";

beforeEach(async () => {
  const Factory = new EnterpriseOddVerifierPrototypeInserterFactory();
  await Factory.BuildObject();
});

test("IsOdd prototype correctly detects odd number", () => {
  expect((5).isOdd()).toBe(true);
});

test("IsOdd prototype correctly detects not odd number", () => {
  expect((4).isOdd()).toBe(false);
});
