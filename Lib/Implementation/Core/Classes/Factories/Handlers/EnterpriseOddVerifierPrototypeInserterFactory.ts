import { EnterpriseOddVerifierFactoryInterface } from "../../../Types/EnterpriseOddVerifierFactoryInterface";
import { EnterpriseOddVerifierPrototypeInserter } from "../../Handlers/EnterpriseOddVerifierPrototypeInserter";
import { AbstractEnterpriseOddVerifierFactory } from "../../Abstract/AbstractEnterpriseOddVerifierFactory";

export class EnterpriseOddVerifierPrototypeInserterFactory<
  T
> extends AbstractEnterpriseOddVerifierFactory<
  EnterpriseOddVerifierPrototypeInserter<T>
> {
  BuildObject(): Promise<EnterpriseOddVerifierPrototypeInserter<T>> {
    return Promise.resolve(new EnterpriseOddVerifierPrototypeInserter<T>());
  }
}
