import { numbers, operators } from './constants';
import { TNumber, TOperator } from './types';
import { doMath } from './utils';

export class Calc {
  state = {
    previous: '',
    current: '',
    operator: '',
  };

  input(commands: string) {
    for (const command of commands.split('')) {
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
