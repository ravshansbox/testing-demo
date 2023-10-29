import { TElementOf } from './types';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const operators = ['+', '-', '*', '/'] as const;

type TNumber = TElementOf<typeof numbers>;
type TOperator = TElementOf<typeof operators>;

const doMath = (operator: TOperator, operand1: number, operand2: number) => {
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

export class Calc {
  state = {
    previous: '',
    current: '',
    operator: '',
  };

  input(commandStr: string) {
    const commands = commandStr.split('');
    for (const command of commands) {
      this.inputSingle(command);
    }
  }

  inputSingle(command: string) {
    const { state } = this;
    if (numbers.includes(command as TNumber)) {
      if (state.operator && !state.previous) {
        state.previous = state.current;
        state.current = command;
      } else {
        state.current = state.current + command;
      }
    }
    if (operators.includes(command as TOperator)) {
      if (!state.previous) {
        state.operator = command;
      } else {
        state.current = String(
          doMath(
            state.operator as TOperator,
            Number(state.previous),
            Number(state.current),
          ),
        );
        state.previous = '';
        state.operator = command;
      }
    }
    if (command === '=') {
      state.current = String(
        doMath(
          state.operator as TOperator,
          Number(state.previous),
          Number(state.current),
        ),
      );
      state.previous = '';
      state.operator = '';
    }
    if (command === '.') {
      if (!state.current.includes('.')) {
        if (!state.current) {
          state.current = '0' + command;
        } else {
          state.current = state.current + command;
        }
      }
    }
  }
}
