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

  it('should compute reverse polish notation of numbers with multiple numeric', () => {
    const result = evaluateRpn('36 100 10 / *');

    expect(result).toEqual(360);
  });

  it('should compute reverse polish notation of numbers with decimals', () => {
    const result = evaluateRpn('0.5 10 * 0.5 /');

    expect(result).toEqual(10);
  });
});
