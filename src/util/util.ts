export function checkPrimeNumber(number: number): boolean {
  if (number <= 1) {
    return false;
  }
  for (let index = 0; index < number - 1; index++) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}
