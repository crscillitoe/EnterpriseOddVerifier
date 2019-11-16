import { EnterpriseOddVerifierFactoryInterface } from "../EnterpriseOddVerifierFactoryInterface";
import { CannotDefineOddError } from "../../Errors/CannotDefineOddError";

export class CannotDefineOddErrorFactory
  implements EnterpriseOddVerifierFactoryInterface<CannotDefineOddError> {
  BuildObject(): Promise<CannotDefineOddError> {
    return Promise.resolve(new CannotDefineOddError());
  }

  BuildObjectWithSpecificErrorMessage(
    SpecificErrorMessage: string
  ): Promise<CannotDefineOddError> {
    return Promise.resolve(new CannotDefineOddError(SpecificErrorMessage));
  }

  DestroyObject(ToDestroy: CannotDefineOddError): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
