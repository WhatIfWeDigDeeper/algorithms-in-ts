const kMultiply = (a, b, c, d) => {
  const step1 = a * c;
  const step2 = b * d;
  const step3 = (a + b) * (c + d);
  const step4 = step3 - step2 - step1;
  const step1Plus4zeros = step1 * 10000;
  const step4Plus2zeros = step4 * 100;
  const step5 = step1Plus4zeros + step2 + step4Plus2zeros;
  return step5;
};
export default kMultiply;
