class rpnSolver {
  stack: number[];
  
  constructor() {
    this.stack = []
  }

  popStack(): number {
    return this.stack.pop() as number
  }

  pushOperand(n: number) {
    this.stack.push(n)
  }

  addsOperator() {
    const val1: number = this.popStack()
    const val2: number = this.popStack()

    this.stack.push(val1 + val2)
  }

  subtractsOperator() {
    const val1: number = this.popStack()
    const val2: number = this.popStack()

    this.stack.push(val2 - val1)
  }

  multipliesOperator() {
    const val1: number = this.popStack()
    const val2: number = this.popStack()

    this.stack.push(val1 * val2)
  }

  dividesOperator() {
    const val1: number = this.popStack()
    const val2: number = this.popStack()

    this.stack.push(val2 / val1)
  }

  getResult(): number {
    return this.popStack()
  }
}

export function evaluateRpn(expression: string): number {
  const tokensList: string[] = expression.split(' ')
  const solver = new rpnSolver();

  for (let token of tokensList) {
    if (token === '+') {
      solver.addsOperator()
    } else if (token === '-') {
      solver.subtractsOperator()
    } else if (token === '*') {
      solver.multipliesOperator()
    } else if (token === '/') {
      solver.dividesOperator()
    } else {
      solver.pushOperand(parseFloat(token))
    }
  }

  return solver.getResult()
}
