import kMultiply from './karatsuba-multiplication';

describe('karatsuba multiplication', () => {
  it('should multiply same', () => {
    expect(kMultiply(56, 78, 12, 34)).toEqual(5678 * 1234);
  });
});
