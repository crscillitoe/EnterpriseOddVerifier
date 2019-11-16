export function IsOdd(PotentiallyOddInputValue: any): boolean {
  const GuaranteedNumber: number = GenerateNumberFromPotentiallyOddInputValue(
    PotentiallyOddInputValue
  );
  return GuaranteedNumber % 2 === 1;
}

function GenerateNumberFromPotentiallyOddInputValue(
  PotentiallyOddInputValue: any
): number {
  return IsPrimitiveType(PotentiallyOddInputValue)
    ? NumberValueForPrimitive(PotentiallyOddInputValue)
    : NumberValueForNonPrimitive(PotentiallyOddInputValue);
}

function IsPrimitiveType(PotentiallyPrimitiveInputValue: any): boolean {
  const PotentiallyPrimitiveType = typeof PotentiallyPrimitiveInputValue;
  return (
    PotentiallyPrimitiveType === "number" ||
    PotentiallyPrimitiveType === "string" ||
    PotentiallyPrimitiveType === "boolean"
  );
}

function NumberValueForPrimitive(PrimitiveInput: number | string | boolean) {
  const Type = typeof PrimitiveInput;
  if (Type === "number") {
    const NumberInput = PrimitiveInput as number;
    return NumberInput;
  } else if (Type === "string") {
    const StringInput = PrimitiveInput as string;
    return StringInput.length;
  } else if (Type === "boolean") {
    const BooleanInput = PrimitiveInput as boolean;
    return BooleanInput ? 1 : 0;
  }
}

function NumberValueForNonPrimitive(NonPrimitiveInputValue: any) {
  const keys = Object.keys(NonPrimitiveInputValue);
  let sum = 0;
  for (const key of keys) {
    sum += GenerateNumberFromPotentiallyOddInputValue(
      NonPrimitiveInputValue[key]
    );
  }
  return sum;
}
