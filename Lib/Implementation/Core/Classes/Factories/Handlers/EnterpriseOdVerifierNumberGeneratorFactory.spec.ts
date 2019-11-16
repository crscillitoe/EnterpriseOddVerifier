import { EnterpriseOddVerifierNumberGeneratorFactory } from "./EnterpriseOddVerifierNumberGeneratorFactory";
import { EnterpriseOddVerifierNumberGenerator } from "../../Handlers/EnterpriseOddVerifierNumberGenerator";

test("Factory returns new EnterpriseOddVerifierNumberGenerator instance", async () => {
  const Factory = new EnterpriseOddVerifierNumberGeneratorFactory();
  const NumberGenerator = await Factory.BuildObject();

  expect(NumberGenerator).toBeInstanceOf(EnterpriseOddVerifierNumberGenerator);
});
