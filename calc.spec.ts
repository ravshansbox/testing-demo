import { Calc } from './calc';

const cases = [
  ['1', ['', '1', '']],
  ['1+', ['', '1', '+']],
  ['1+2', ['1', '2', '+']],
  ['1+2=', ['', '3', '']],
] as const;

for (const [input, [previous, current, operator]] of cases) {
  test(`${input} => p:${previous} c:${current} o:${operator}`, () => {
    const calc = new Calc();
    calc.input(input);
    expect(calc.state).toEqual({ previous, current, operator });
  });
}
