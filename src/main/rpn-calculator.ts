export function evaluateRpn(expression: string): number {
  var cleanExpr = expression.replace(/\s/g, "");
  let operator : String = ("+-*/");

  var a = 0;
  var b = 0;

  var stack = [];

  for (var i = 0; i < cleanExpr.length; i++) {
    if (!operator.includes(cleanExpr.charAt(i))) {
        stack.push(parseInt(cleanExpr.charAt(i)));
        continue;
    } else {
      a = stack.pop() as number;
      b = stack.pop() as number;
      switch (cleanExpr.charAt(i)) {
        case '*':
            stack.push(b * a);
            break;
        case '+':
            stack.push(b + a);
            break;
        case '-':
            stack.push(b - a);
            break;
        default:
            stack.push(b / a);
            break;
      }
    }
  }
  return stack.pop() as number;
}
