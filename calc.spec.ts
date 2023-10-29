import { Calc } from './calc';

const cases = [
  ['.1', ['', '0.1', '']],
  ['1.2', ['', '1.2', '']],
  ['1', ['', '1', '']],
  ['12', ['', '12', '']],
  ['1+', ['', '1', '+']],
  ['12+', ['', '12', '+']],
  ['1+2', ['1', '2', '+']],
  ['12+34', ['12', '34', '+']],
  ['1+2=', ['', '3', '']],
  ['12+34=', ['', '46', '']],
  ['1.2+3.4=', ['', '4.6', '']],
  ['1.2+3.4+', ['', '4.6', '+']],
  ['1.2+3.4+5.6', ['4.6', '5.6', '+']],
  ['1.2+3.4+5.6=', ['', '10.2', '']],
] as const;

for (const [input, [previous, current, operator]] of cases) {
  test(`${input} => p:${previous} c:${current} o:${operator}`, () => {
    const calc = new Calc();
    calc.input(input);
    expect(calc.state).toEqual({ previous, current, operator });
  });
}
