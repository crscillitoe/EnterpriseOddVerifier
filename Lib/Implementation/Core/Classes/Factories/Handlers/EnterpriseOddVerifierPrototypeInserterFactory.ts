import { EnterpriseOddVerifierFactoryInterface } from "../../../Types/EnterpriseOddVerifierFactoryInterface";
import { EnterpriseOddVerifierPrototypeInserter } from "../../Handlers/EnterpriseOddVerifierPrototypeInserter";

export class EnterpriseOddVerifierPrototypeInserterFactory
  implements
    EnterpriseOddVerifierFactoryInterface<
      EnterpriseOddVerifierPrototypeInserter<Object>
    > {
  BuildObject(): Promise<EnterpriseOddVerifierPrototypeInserter<Object>> {
    return Promise.resolve(
      new EnterpriseOddVerifierPrototypeInserter<Object>()
    );
  }
  DestroyObject(
    ToDestroy: EnterpriseOddVerifierPrototypeInserter<Object>
  ): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
