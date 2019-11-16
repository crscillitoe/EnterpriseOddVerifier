import { EnterpriseOddVerifierFactoryEncapsulator } from "./Lib/Implementation/Core/Classes/Encapsulation/EnterpriseOddVeriferFactoryEncapsulator";
import { EnterpriseOddVerifierPrototypeInserter } from "./Lib/Implementation/Core/Classes/Handlers/EnterpriseOddVerifierPrototypeInserter";

const Encapsulator = new EnterpriseOddVerifierFactoryEncapsulator(
  EnterpriseOddVerifierPrototypeInserter
);

Encapsulator.BuildObject();
