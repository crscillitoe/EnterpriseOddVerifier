import { AbstractEnterpriseOddVerifierFactory } from "../../Abstract/AbstractEnterpriseOddVerifierFactory";
import { EnterpriseOddVerifierNumberGenerator } from "../../Handlers/EnterpriseOddVerifierNumberGenerator";

export class EnterpriseOddVerifierNumberGeneratorFactory extends AbstractEnterpriseOddVerifierFactory<
  EnterpriseOddVerifierNumberGenerator
> {
  BuildObject<EnterpriseOddVerifierNumberGenerator>(): Promise<
    EnterpriseOddVerifierNumberGenerator
  > {
    return Promise.resolve(new EnterpriseOddVerifierNumberGenerator());
  }
}
