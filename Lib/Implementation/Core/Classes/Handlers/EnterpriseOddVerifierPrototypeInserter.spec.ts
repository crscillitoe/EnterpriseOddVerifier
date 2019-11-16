import { EnterpriseOddVerifierPrototypeInserter } from "./EnterpriseOddVerifierPrototypeInserter";

test("Assigns odd prototype to number", () => {
  const PrototypeInserter = new EnterpriseOddVerifierPrototypeInserter<
    number
  >();
  expect((5).isOdd()).toBe(true);
});
