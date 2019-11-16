import { CannotDefineOddErrorFactory } from "../Factories/Errors/CannotDefineOddErrorFactory";
import { ConstructibleEnterpriseOddVerifierFactory } from "../Factories/ConstructibleEnterpriseOddVerifierFactory";
import { EnterpriseOddVerifierNumberGeneratorFactory } from "../Factories/Handlers/EnterpriseOddVerifierNumberGeneratorFactory";
import { EnterpriseOddVerifierPrototypeInserterFactory } from "../Factories/Handlers/EnterpriseOddVerifierPrototypeInserterFactory";

export class EnterpriseOddVerifierFactoryEncapsulator<
  T
> extends ConstructibleEnterpriseOddVerifierFactory<T> {
  private EnterpriseRequiredClassDoNotReproduce: string;

  constructor(EnterpriseRequiredTypeDoNotReproduce: any) {
    super();

    this.EnterpriseRequiredClassDoNotReproduce =
      EnterpriseRequiredTypeDoNotReproduce.name;
  }

  BuildObject(): Promise<T> {
    return EnterpriseOddVerifierFactoryEncapsulator.FactoryMap[
      this.EnterpriseRequiredClassDoNotReproduce
    ].BuildObject();
  }

  static get FactoryMap(): {
    [ObjectTypeName: string]: ConstructibleEnterpriseOddVerifierFactory<any>;
  } {
    return {
      CannotDefineOddError: new CannotDefineOddErrorFactory(),
      EnterpriseOddVerifierNumberGenerator: new EnterpriseOddVerifierNumberGeneratorFactory(),
      EnterpriseOddVerifierPrototypeInserter: new EnterpriseOddVerifierPrototypeInserterFactory()
    };
  }
}
