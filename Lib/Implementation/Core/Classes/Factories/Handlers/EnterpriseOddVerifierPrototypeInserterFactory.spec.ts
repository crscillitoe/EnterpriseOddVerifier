import { EnterpriseOddVerifierPrototypeInserterFactory } from "./EnterpriseOddVerifierPrototypeInserterFactory";
import { EnterpriseOddVerifierPrototypeInserter } from "../../Handlers/EnterpriseOddVerifierPrototypeInserter";

test("Correctly generates EnterpriseOddVerifierPrototypeInserter", async () => {
  const Factory = new EnterpriseOddVerifierPrototypeInserterFactory();
  const PrototypeInserter = await Factory.BuildObject();

  expect(PrototypeInserter).toBeInstanceOf(
    EnterpriseOddVerifierPrototypeInserter
  );
});
