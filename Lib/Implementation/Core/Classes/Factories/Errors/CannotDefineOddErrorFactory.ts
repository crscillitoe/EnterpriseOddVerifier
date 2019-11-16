import { EnterpriseOddVerifierFactoryInterface } from "../EnterpriseOddVerifierFactoryInterface";
import { CannotDefineOddError } from "../../Errors/CannotDefineOddError";

export class CannotDefineOddErrorFactory
  implements EnterpriseOddVerifierFactoryInterface<CannotDefineOddError> {
  BuildObject(): Promise<CannotDefineOddError> {
    throw new Error("Method not implemented.");
  }

  DestroyObject(ToDestroy: CannotDefineOddError): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
