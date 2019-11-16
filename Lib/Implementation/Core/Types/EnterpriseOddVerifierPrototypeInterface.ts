export interface EnterpriseOddVerifierPrototypeInterface<T extends Object> {
  IsOdd(PotentiallyOddInputValue: T): boolean;
  GenerateNumberFromPotentiallyOddInputValue(
    PotentiallyOddInputValue: T
  ): number;
}
