export function sum(a: number, b: number): number {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      throw new Error('Both parameters must be integers');
    }
    return a + b;
  }
