import { evaluateRpn } from '../main/rpn-calculator';

describe('Reverse polish notation from fixture 2', () => {
  it('should compute reverse polish notation', () => {
    const result = evaluateRpn('2 2 + 4 * 2 / 2 -');

    expect(result).toEqual(6);
  });

  it('should compute reverse polish notation from fixture 2', () => {
    const result = evaluateRpn('2 2 * 4 - 2 + 2 /');

    expect(result).toEqual(1);
  });

  it('should compute reverse polish notation from fixture 2', () => {
    const result = evaluateRpn('1 2 + 4 * 3 +');

    expect(result).toEqual(15);
  });
});
