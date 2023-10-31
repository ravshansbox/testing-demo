import { TOperator } from './types';

export const doMath = (
  operator: TOperator,
  operand1: number,
  operand2: number,
) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand1 / operand2;
  }
};
