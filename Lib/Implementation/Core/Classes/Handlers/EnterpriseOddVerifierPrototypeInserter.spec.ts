import { EnterpriseOddVerifierPrototypeInserterFactory } from "../Factories/Handlers/EnterpriseOddVerifierPrototypeInserterFactory";

test("Assigns odd prototype to all objects", async () => {
  const Factory = new EnterpriseOddVerifierPrototypeInserterFactory<number>();
  await Factory.BuildObject(); // This build injects the prototype

  expect((5).isOdd).toBeDefined();
  expect("".isOdd).toBeDefined();
  expect({}.isOdd).toBeDefined();
  expect(Factory.isOdd).toBeDefined();
});
